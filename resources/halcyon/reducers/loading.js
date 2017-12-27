import {
  LOADING_SHOW,
  LOADING_HIDE,
} from '../actions/loading';

import { Map as ImmutableMap } from 'immutable';

const initialState = ImmutableMap({
  show: false,
});

export default function loading(state = initialState, action) {
  switch(action.type) {
  case LOADING_SHOW:
    return state.set('show', true);
  case LOADING_HIDE:
    return state.set('show', false);
  default:
    return state;
  }
}
