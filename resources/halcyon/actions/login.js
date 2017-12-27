import api from '../api/halcyon';

export const ACCESS_TOKEN_FETCH_REQUEST = 'ACCESS_TOKEN_FETCH_REQUEST';
export const ACCESS_TOKEN_FETCH_SUCCESS = 'ACCESS_TOKEN_FETCH_SUCCESS';
export const ACCESS_TOKEN_FETCH_FAIL    = 'ACCESS_TOKEN_FETCH_FAIL';

export function fetchAccessToken(instanceDomain, code) {
  return (dispatch, getState) => {
    dispatch(fetchAccessTokenRequest(instanceDomain, code));

    api(getState).get('/api/login/authorize_account', {
      instance_domain: instanceDomain,
      code,
    }).then((response) => {
      dispatch(fetchAccessTokenSuccess(response.data));
    }).catch((error) => {
      dispatch(fetchAccessTokenFail(instanceDomain, code, error));
    });
  };
}

export function fetchAccessTokenRequest(instanceDomain, code) {
  return {
    type: ACCESS_TOKEN_FETCH_REQUEST,
    instanceDomain,
    code,
  };
}

export function fetchAccessTokenSuccess(authorize) {
  return {
    type: ACCESS_TOKEN_FETCH_SUCCESS,
    authorize,
  };
}

export function fetchAccessTokenFail(instanceDomain, code, error) {
  return {
    type: ACCESS_TOKEN_FETCH_FAIL,
    instanceDomain,
    code,
    error,
  };
}
