import {
  CREDENTIALS_EDIT,
  CREDENTIALS_RESET,
  CHANGE_DISPLAY_NAME,
  CHANGE_NOTE,
  CHANGE_AVATAR,
  CHANGE_HEADER,
} from '../actions/credentials';
import { Map as ImmutableMap } from 'immutable';

const initialState = ImmutableMap({
  display_name: '',
  note: '',
  avatar: '',
  header: '',
  is_editing: false,
});

export default function credentials( state = initialState, action) {
  switch(action.type) {
  case CREDENTIALS_EDIT:
    return state.set('is_editing', true);
  case CREDENTIALS_RESET:
    return state.set('is_editing', false);
  case CHANGE_DISPLAY_NAME:
    return state.set('display_name', action.text);
  case CHANGE_NOTE:
    return state.set('note', action.text);
  case CHANGE_AVATAR:
    return state.set('avatar', action.image);
  case CHANGE_HEADER:
    return state.set('header', action.image);
  default:
    return state;
  }
}
