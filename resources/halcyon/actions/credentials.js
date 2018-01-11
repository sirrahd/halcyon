import api from '../api/mastodon';

export const CREDENTIALS_VERIFY_REQUEST = 'CREDENTIALS_VERIFY_REQUEST';
export const CREDENTIALS_VERIFY_SUCCESS = 'CREDENTIALS_VERIFY_SUCCESS';
export const CREDENTIALS_VERIFY_FAIL    = 'CREDENTIALS_VERIFY_FAIL';

export const CREDENTIALS_EDIT    = 'CREDENTIALS_EDIT';
export const CREDENTIALS_RESET   = 'CREDENTIALS_RESET';
export const CHANGE_DISPLAY_NAME = 'CHANGE_DISPLAY_NAME';
export const CHANGE_NOTE         = 'CHANGE_NOTE';
export const CHANGE_AVATAR       = 'CHANGE_AVATAR';
export const CHANGE_HEADER       = 'CHANGE_HEADER';

export const CREDENTIALS_UPDATE_REQUEST = 'CREDENTIALS_UPDATE_REQUEST';
export const CREDENTIALS_UPDATE_SUCCESS = 'CREDENTIALS_UPDATE_SUCCESS';
export const CREDENTIALS_UPDATE_FAIL    = 'CREDENTIALS_UPDATE_FAIL';

export function verifyCredentials() {
  return (dispatch, getState) => {
    dispatch(verifyCredentialsRequest());

    api(getState).get('/api/v1/accounts/verify_credentials').then(response => {
      dispatch(verifyCredentialsSuccess(response.data));
    }).catch(error => {
      dispatch(verifyCredentialsFail(error));
    });
  };
}

export function verifyCredentialsRequest() {
  return {
    type: CREDENTIALS_VERIFY_REQUEST,
    skipLoading: true,
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


export function editCredentials() {
  return {
    type: CREDENTIALS_EDIT,
  };
}

export function resetCredentials() {
  return {
    type: CREDENTIALS_RESET,
  };
}

export function changeDisplayName(text) {
  return {
    type: CHANGE_DISPLAY_NAME,
    text,
  };
}

export function changeNote(text) {
  return {
    type: CHANGE_NOTE,
    text,
  };
}

export function changeAvatar(image) {
  return {
    type: CHANGE_AVATAR,
    image,
  };
}

export function changeHeader(image) {
  return {
    type: CHANGE_HEADER,
    image,
  };
}

export function updateCredentials(data) {
  return (dispatch, getState) => {
    dispatch(updateCredentialsRequest(data));

    api(getState).patch('/api/v1/accounts/update_credentials', { data }).then(response => {
      dispatch(updateCredentialsSuccess(response.data));
    }).catch(error => {
      dispatch(updateCredentialsFail(error, data));
    });
  };
}

export function updateCredentialsRequest(data) {
  return {
    type: CREDENTIALS_UPDATE_REQUEST,
    data,
  };
}

export function updateCredentialsSuccess(account) {
  return {
    type: CREDENTIALS_UPDATE_SUCCESS,
    account,
  };
}

export function updateCredentialsFail(error, data) {
  return {
    type: CREDENTIALS_UPDATE_FAIL,
    error,
    data,
  };
}
