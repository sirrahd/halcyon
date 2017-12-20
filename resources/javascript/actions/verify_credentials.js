import { api } from '../api/mastodon';

export const VERIFY_CREDENTIALS_REQUEST = 'VERIFY_CREDENTIALS_REQUEST';
export const VERIFY_CREDENTIALS_SUCCESS = 'VERIFY_CREDENTIALS_SUCCESS';
export const VERIFY_CREDENTIALS_FAIL    = 'VERIFY_CREDENTIALS_FAIL';

export function verifyCredentials() {
  return (dispatch, getState) => {
    dispatch(verifyCredentialsRequest());

    api(getState).get('/api/v1/accounts/verify_credentials').then(response => {
      dispatch(verifyCredentialsSuccess(response));
    }).catch(error => {
      dispatch(verifyCredentialsFail(error));
    });
  };
}

export function verifyCredentialsRequest() {
  return {
    type: VERIFY_CREDENTIALS_REQUEST,
  };
}

export function verifyCredentialsSuccess(account) {
  return {
    type: VERIFY_CREDENTIALS_SUCCESS,
    account,
  };
}

export function verifyCredentialsFail(error) {
  return {
    type: VERIFY_CREDENTIALS_FAIL,
    error,
  };
}
