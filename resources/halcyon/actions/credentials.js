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

export function changeAvatar(file) {
  return {
    type: CHANGE_AVATAR,
    file: file[0],
  };
}

export function changeHeader(file) {
  return {
    type: CHANGE_HEADER,
    file: file[0],
  };
}

export function updateCredentials() {
  return (dispatch, getState) => {
    let data = new FormData();

    if ( getState().getIn(['credentials', 'display_name']) ) {
      data.append('display_name', getState().getIn(['credentials', 'display_name']));
    }

    if ( getState().getIn(['credentials', 'note']) ) {
      data.append('note', getState().getIn(['credentials', 'note']));
    }

    if ( getState().getIn(['credentials', 'avatar']) ) {
      data.append('avatar', getState().getIn(['credentials', 'avatar']));
    }

    if ( getState().getIn(['credentials', 'header']) ) {
      data.append('header', getState().getIn(['credentials', 'header']));
    }

    dispatch(updateCredentialsRequest(data));

    api(getState).patch('/api/v1/accounts/update_credentials', data).then(response => {
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
