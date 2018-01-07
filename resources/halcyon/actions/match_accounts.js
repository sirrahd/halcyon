import api from '../api/vinayaka';
import { domain, me } from '../initial_state';

export const MATCH_ACCOUNTS_FETCH_REQUEST = 'MATCH_ACCOUNTS_FETCH_REQUEST';
export const MATCH_ACCOUNTS_FETCH_SUCCESS = 'MATCH_ACCOUNTS_FETCH_SUCCESS';
export const MATCH_ACCOUNTS_FETCH_FAIL    = 'MATCH_ACCOUNTS_FETCH_FAIL';

export const MATCH_ACCOUNTS_DELETE = 'MATCH_ACCOUNTS_DELETE';

export function fetchMatchAccounts() {
  return (dispatch, getState) => {
    dispatch(fetchMatchAccountsRequest());

    const query = `${domain}+${getState().getIn(['accounts', me, 'username'])}`;

    api().get(`/cgi-bin/vinayaka-user-match-simple-api.cgi?${query}`).then(response => {
      dispatch(fetchMatchAccountsSuccess(response.data));
    }).catch(error => {
      dispatch(fetchMatchAccountsFail(error));
    });
  };
}

export function fetchMatchAccountsRequest() {
  return {
    type: MATCH_ACCOUNTS_FETCH_REQUEST,
    skipLoading: true,
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

export function deleteMatchAccounts(index) {
  return {
    type: MATCH_ACCOUNTS_DELETE,
    index,
  };
}
