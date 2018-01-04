import api from '../api/vinayaka';
import { debounce } from 'lodash';
import { domain, me } from '../initial_state';

export const MATCH_ACCOUNTS_FETCH_REQUEST = 'MATCH_ACCOUNTS_FETCH_REQUEST';
export const MATCH_ACCOUNTS_FETCH_SUCCESS = 'MATCH_ACCOUNTS_FETCH_SUCCESS';
export const MATCH_ACCOUNTS_FETCH_FAIL    = 'MATCH_ACCOUNTS_FETCH_FAIL';

export function fetchMatchAccounts() {
  return (dispatch, getState) => {
    dispatch(fetchMatchAccountsRequest());

    const query = `${domain}+${getState().getIn(['accounts', me, 'username'])}`;

    api().get(`/cgi-bin/vinayaka-user-match-api.cgi?${query}`).then(response => {
      dispatch(fetchMatchAccountsSuccess(response.data));
    }).catch(error => {
      dispatch(fetchMatchAccountsFail(error));
    });
  };
}

export function fetchMatchAccountsRequest() {
  return {
    type: MATCH_ACCOUNTS_FETCH_REQUEST,
  };
}

export function fetchMatchAccountsSuccess(accounts) {
  return {
    type: MATCH_ACCOUNTS_FETCH_SUCCESS,
    accounts,
  };
}

export function fetchMatchAccountsFail(error) {
  return {
    type: MATCH_ACCOUNTS_FETCH_FAIL,
    error,
  };
}