import api from '../api/halcyon';

export const VERIFY_INSTANCE_REQUEST = 'VERIFY_INSTANCE_REQUEST';
export const VERIFY_INSTANCE_SUCCESS = 'VERIFY_INSTANCE_SUCCESS';
export const VERIFY_INSTANCE_FAIL    = 'VERIFY_INSTANCE_FAIL';

export const AUTHORIZE_ACCOUNT_REQUEST = 'AUTHORIZE_ACCOUNT_REUQEST';
export const AUTHORIZE_ACCOUNT_SUCCESS = 'AUTHORIZE_ACCOUNT_SUCCESS';
export const AUTHORIZE_ACCOUNT_FAIL    = 'AUTHORIZE_ACCOUNT_FAIL';

export function verifyInstance(acct) {
  return (dispatch, getState) => {
    dispatch(verifyInstanceRequest(acct));

    api(getState).post('/api/login/verify_instance', { acct }).then((response) => {
      dispatch(verifyInstanceSuccess(response.data));
    }).catch((error) => {
      dispatch(verifyInstanceRequest(acct, error));
    });
  };
}

export function verifyInstanceRequest(acct) {
  return {
    type: VERIFY_INSTANCE_REQUEST,
    acct,
  };
}

export function verifyInstanceSuccess(verifiedInstance) {
  return {
    type: VERIFY_INSTANCE_SUCCESS,
    verifiedInstance,
  };
}

export function verifyInstanceFail(acct, error) {
  return {
    type: VERIFY_INSTANCE_FAIL,
    acct,
    error,
  };
}


export function authorizeAccount(instanceDomain, code) {
  return (dispatch, getState) => {
    dispatch(verifyInstanceRequest(instanceDomain, code));

    api(getState).get('/api/login/authorize_account').then((response) => {
      dispatch(verifyInstanceSuccess(response.data));
    }).catch((error) => {
      dispatch(verifyInstanceRequest(instanceDomain, code, error));
    });
  };
}

export function authorizeAccountRequest(instanceDomain, code) {
  return {
    type: AUTHORIZE_ACCOUNT_SUCCESS,
    instanceDomain,
    code,
  };
}

export function authorizeAccountSuccess(authorize) {
  return {
    type: AUTHORIZE_ACCOUNT_SUCCESS,
    authorize,
  };
}

export function authorizeAccountFail(instanceDomain, code, error) {
  return {
    type: AUTHORIZE_ACCOUNT_FAIL,
    instanceDomain,
    code,
    error,
  };
}
