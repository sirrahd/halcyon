import api from '../api/mastodon';

export const CREDENTIALS_VERIFY_REQUEST = 'CREDENTIALS_VERIFY_REQUEST';
export const CREDENTIALS_VERIFY_SUCCESS = 'CREDENTIALS_VERIFY_SUCCESS';
export const CREDENTIALS_VERIFY_FAIL    = 'CREDENTIALS_VERIFY_FAIL';

export const CREDENTIALS_UPDATE_REQUEST = 'CREDENTIALS_UPDATE_REQUEST';
export const CREDENTIALS_UPDATE_SUCCESS = 'CREDENTIALS_UPDATE_SUCCESS';
export const CREDENTIALS_UPDATE_FAIL    = 'CREDENTIALS_UPDATE_FAIL';

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
    type: CREDENTIALS_VERIFY_REQUEST,
  };
}

export function verifyCredentialsSuccess(account) {
  return {
    type: CREDENTIALS_VERIFY_SUCCESS,
    account,
  };
}

export function verifyCredentialsFail(error) {
  return {
    type: CREDENTIALS_VERIFY_FAIL,
    error,
  };
}


// export function updateCredentials() {
//   return (dispatch, getState) => {
//     dispatch(updateCredentialsRequest());

//     api(getState).get('/api/v1/accounts/credentials').then(response => {
//       dispatch(updateCredentialsSuccess(response));
//     }).catch(error => {
//       dispatch(updateCredentialsFail(error));
//     });
//   };
// }

export function updateCredentialsRequest() {
  return {
    type: CREDENTIALS_UPDATE_REQUEST,
  };
}

export function updateCredentialsSuccess(account) {
  return {
    type: CREDENTIALS_UPDATE_SUCCESS,
    account,
  };
}

export function updateCredentialsFail(error) {
  return {
    type: CREDENTIALS_UPDATE_FAIL,
    error,
  };
}
