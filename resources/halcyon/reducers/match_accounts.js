import {
  MATCH_ACCOUNTS_FETCH_REQUEST,
  MATCH_ACCOUNTS_FETCH_SUCCESS,
  MATCH_ACCOUNTS_FETCH_FAIL,
} from '../actions/match_accounts';
import emojify from '../features/emoji/emoji';
import escapeTextContentForBrowser from 'escape-html';
import { List as ImmutableList, Map as ImmutableMap, fromJS } from 'immutable';

const normalizeAccounts = (state, accounts) => {
  const list = [];

  // Transform Vinayaka's response format to
  // a format that compatible with Mastodon
  accounts.forEach(_account => {
    const account = {};
    account.username          = _account.user;
    account.acct              = `@${_account.user}@${_account.host}`;
    account.display_name      = _account.screen_name;
    account.display_name_html = emojify(escapeTextContentForBrowser(_account.screen_name));
    account.note              = _account.bio;
    account.note_emojified    = emojify(_account.bio);
    account.avatar            = _account.avatar;
    account.url               = `https://${_account.host}/@${_account.user}`;
    list.push(account);
  });

  state.set('accounts', fromJS(list));
};

const initialState = ImmutableMap({
  is_fetching: false,
  accounts: ImmutableList(),
});

export default function matchAccounts(state = initialState, action) {
  switch(action.type) {
  case MATCH_ACCOUNTS_FETCH_REQUEST:
    return state.set('is_fetching', true);
  case MATCH_ACCOUNTS_FETCH_SUCCESS:
    return state
      .set('is_fetching', false)
      .set('accounts', normalizeAccounts(action.accounts));
  case MATCH_ACCOUNTS_FETCH_FAIL:
    return state.set('is_fetching', false);
  default:
    return state;
  }
}