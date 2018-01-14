import { Map as ImmutableMap } from 'immutable';
import {
  INSTANCE_VERIFY_REQUEST,
  INSTANCE_VERIFY_SUCCESS,
  INSTANCE_VERIFY_FAIL,
  RESPONSE_VERIFY_REQUEST,
  RESPONSE_VERIFY_SUCCESS,
  RESPONSE_VERIFY_FAIL,
} from '../actions/login';

const initialState = ImmutableMap({
  authorization_uri: '',
  is_verifying_instance: false,
  is_verifying_response: false,
});

export default function login(state = initialState, action) {
  switch (action.type) {
  case INSTANCE_VERIFY_REQUEST:
    return state.set('is_verifying_instance', true);
  case INSTANCE_VERIFY_SUCCESS:
    return state
      .set('is_verifying_instance', false)
      .set('authorization_uri', action.authorize.authorization_uri);
  case INSTANCE_VERIFY_FAIL:
    return state.set('is_verifying_instance', false);
  case RESPONSE_VERIFY_REQUEST:
    return state.set('is_verifying_response', true);
  case RESPONSE_VERIFY_SUCCESS:
    return state
      .set('is_verifying_response', false)
      .set('credentials', action.credentials);
  case RESPONSE_VERIFY_FAIL:
    return state.set('is_verifying_response', false);
  default:
    return state;
  }
}
