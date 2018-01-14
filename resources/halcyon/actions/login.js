import api from '../api/halcyon';

export const INSTANCE_VERIFY_REQUEST = 'INSTANCE_VERIFY_REQUEST';
export const INSTANCE_VERIFY_SUCCESS = 'INSTANCE_VERIFY_SUCCESS';
export const INSTANCE_VERIFY_FAIL    = 'INSTANCE_VERIFY_FAIL';

export const RESPONSE_VERIFY_REQUEST = 'RESPONSE_VERIFY_REQUEST';
export const RESPONSE_VERIFY_SUCCESS = 'RESPONSE_VERIFY_SUCCESS';
export const RESPONSE_VERIFY_FAIL    = 'RESPONSE_VERIFY_FAIL';

export function verifyInstance(instanceDomain) {
  return (dispatch, getState) => {
    const data = { instance_domain: instanceDomain };
    dispatch(verifyInstanceRequest(instanceDomain));

    api(getState).post('/api/login/verify_instance', { ...data }).then((response) => {
      dispatch(verifyInstanceSuccess(response.data));
    }).catch((error) => {
      dispatch(verifyInstanceFail(instanceDomain, error));
    });
  };
}

export function verifyInstanceRequest(instanceDomain) {
  return {
    type: INSTANCE_VERIFY_REQUEST,
    instanceDomain,
  };
}

export function verifyInstanceSuccess(authorize) {
  return {
    type: INSTANCE_VERIFY_SUCCESS,
    authorize,
  };
}

export function verifyInstanceFail(instanceDomain, error) {
  return {
    type: INSTANCE_VERIFY_FAIL,
    instanceDomain,
    error,
  };
}


export function verifyResponse(instanceDomain, code) {
  return (dispatch, getState) => {
    dispatch(verifyResponseRequest(instanceDomain, code));

    api(getState).post('/api/login/verify_response', {
      instance_domain: instanceDomain,
      code,
    }).then((response) => {
      dispatch(verifyResponseSuccess(response.data));
    }).catch((error) => {
      dispatch(verifyResponseFail(instanceDomain, code, error));
    });
  };
}

export function verifyResponseRequest(instanceDomain, code) {
  return {
    type: RESPONSE_VERIFY_REQUEST,
    instanceDomain,
    code,
  };
}

export function verifyResponseSuccess(authorize) {
  return {
    type: RESPONSE_VERIFY_SUCCESS,
    authorize,
  };
}

export function verifyResponseFail(instanceDomain, code, error) {
  return {
    type: RESPONSE_VERIFY_FAIL,
    instanceDomain,
    code,
    error,
  };
}
