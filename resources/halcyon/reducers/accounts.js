import {
  ACCOUNT_FETCH_SUCCESS,
  FOLLOWERS_FETCH_SUCCESS,
  FOLLOWERS_EXPAND_SUCCESS,
  FOLLOWING_FETCH_SUCCESS,
  FOLLOWING_EXPAND_SUCCESS,
  FOLLOW_REQUESTS_FETCH_SUCCESS,
  FOLLOW_REQUESTS_EXPAND_SUCCESS,
} from '../actions/accounts';
import {
  BLOCKS_FETCH_SUCCESS,
  BLOCKS_EXPAND_SUCCESS,
} from '../actions/blocks';
import {
  MUTES_FETCH_SUCCESS,
  MUTES_EXPAND_SUCCESS,
} from '../actions/mutes';
import { COMPOSE_SUGGESTIONS_READY } from '../actions/compose';
import {
  REBLOG_SUCCESS,
  UNREBLOG_SUCCESS,
  FAVOURITE_SUCCESS,
  UNFAVOURITE_SUCCESS,
  REBLOGS_FETCH_SUCCESS,
  FAVOURITES_FETCH_SUCCESS,
} from '../actions/interactions';
import {
  TIMELINE_REFRESH_SUCCESS,
  TIMELINE_UPDATE,
  TIMELINE_EXPAND_SUCCESS,
} from '../actions/timelines';
import {
  STATUS_FETCH_SUCCESS,
  CONTEXT_FETCH_SUCCESS,
} from '../actions/statuses';
import { SEARCH_FETCH_SUCCESS } from '../actions/search';
import {
  NOTIFICATIONS_UPDATE,
  NOTIFICATIONS_REFRESH_SUCCESS,
  NOTIFICATIONS_EXPAND_SUCCESS,
} from '../actions/notifications';
import {
  FAVOURITED_STATUSES_FETCH_SUCCESS,
  FAVOURITED_STATUSES_EXPAND_SUCCESS,
} from '../actions/favourites';
import {
  CREDENTIALS_VERIFY_SUCCESS,
  CREDENTIALS_UPDATE_SUCCESS,
} from '../actions/credentials';
import { STORE_HYDRATE } from '../actions/store';
import emojify from '../features/emoji/emoji';
import { Map as ImmutableMap, fromJS } from 'immutable';
import escapeTextContentForBrowser from 'escape-html';
import { domain as instanceDomain } from '../initial_state';

const normalizeAccount = (state, account) => {
  account = { ...account };

  delete account.followers_count;
  delete account.following_count;
  delete account.statuses_count;

  const displayName = account.display_name.length === 0 ? account.username : account.display_name;
  account.display_name_html = emojify(escapeTextContentForBrowser(displayName));
  account.note_emojified = emojify(account.note);
  account.is_remote = account.acct.split('@').length < 2;

  const [ username, domain = instanceDomain ] = account.acct.split('@');
  account.full_username = `${username}@${domain}`;
  account.domain = domain;

  if (account.moved) {
    state = normalizeAccount(state, account.moved);
    account.moved = account.moved.id;
  }

  return state.set(account.id, fromJS(account));
};

const normalizeAccounts = (state, accounts) => {
  accounts.forEach(account => {
    state = normalizeAccount(state, account);
  });

  return state;
};

const normalizeAccountFromStatus = (state, status) => {
  state = normalizeAccount(state, status.account);

  if (status.reblog && status.reblog.account) {
    state = normalizeAccount(state, status.reblog.account);
  }

  return state;
};

const normalizeAccountsFromStatuses = (state, statuses) => {
  statuses.forEach(status => {
    state = normalizeAccountFromStatus(state, status);
  });

  return state;
};

const initialState = ImmutableMap();

export default function accounts(state = initialState, action) {
  switch(action.type) {
  case STORE_HYDRATE:
    return state.merge(action.state.get('accounts'));
  case ACCOUNT_FETCH_SUCCESS:
  case NOTIFICATIONS_UPDATE:
  case CREDENTIALS_VERIFY_SUCCESS:
  case CREDENTIALS_UPDATE_SUCCESS:
    return normalizeAccount(state, action.account);
  case FOLLOWERS_FETCH_SUCCESS:
  case FOLLOWERS_EXPAND_SUCCESS:
  case FOLLOWING_FETCH_SUCCESS:
  case FOLLOWING_EXPAND_SUCCESS:
  case REBLOGS_FETCH_SUCCESS:
  case FAVOURITES_FETCH_SUCCESS:
  case COMPOSE_SUGGESTIONS_READY:
  case FOLLOW_REQUESTS_FETCH_SUCCESS:
  case FOLLOW_REQUESTS_EXPAND_SUCCESS:
  case BLOCKS_FETCH_SUCCESS:
  case BLOCKS_EXPAND_SUCCESS:
  case MUTES_FETCH_SUCCESS:
  case MUTES_EXPAND_SUCCESS:
    return action.accounts ? normalizeAccounts(state, action.accounts) : state;
  case NOTIFICATIONS_REFRESH_SUCCESS:
  case NOTIFICATIONS_EXPAND_SUCCESS:
  case SEARCH_FETCH_SUCCESS:
    return normalizeAccountsFromStatuses(normalizeAccounts(state, action.accounts), action.statuses);
  case TIMELINE_REFRESH_SUCCESS:
  case TIMELINE_EXPAND_SUCCESS:
  case CONTEXT_FETCH_SUCCESS:
  case FAVOURITED_STATUSES_FETCH_SUCCESS:
  case FAVOURITED_STATUSES_EXPAND_SUCCESS:
    return normalizeAccountsFromStatuses(state, action.statuses);
  case REBLOG_SUCCESS:
  case FAVOURITE_SUCCESS:
  case UNREBLOG_SUCCESS:
  case UNFAVOURITE_SUCCESS:
    return normalizeAccountFromStatus(state, action.response);
  case TIMELINE_UPDATE:
  case STATUS_FETCH_SUCCESS:
    return normalizeAccountFromStatus(state, action.status);
  default:
    return state;
  }
};
