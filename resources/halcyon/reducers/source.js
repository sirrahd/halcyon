import {
  CREDENTIALS_VERIFY_SUCCESS,
  CREDENTIALS_UPDATE_SUCCESS,
} from '../actions/credentials';
import { Map as ImmutableMap } from 'immutable';

const initialState = ImmutableMap();

export default function source(state = initialState, action) {
  switch(action.type) {
  case CREDENTIALS_VERIFY_SUCCESS:
  case CREDENTIALS_UPDATE_SUCCESS:
    return state.merge(action.account.source);
  default:
    return state;
  }
}
