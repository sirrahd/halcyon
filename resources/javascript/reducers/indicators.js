import {
  MESSAGE_SHOW,
  MESSAGE_HIDE,
  SPINNER_SHOW,
  SPINNER_HIDE,
} from '../actions/indicators';

import { Map as ImmutableMap, fromJS } from 'immutable';

const initialState = ImmutableMap({
  message: ImmutableMap({
    show: false,
    props: ImmutableMap(),
  }),

  spinner: false,
});

export default function indicators(state = initialState, action) {
  switch(action.type) {
  case MESSAGE_SHOW:
    return state
      .setIn(['message', 'show'], true)
      .setIn(['message', 'props'], fromJS(action.messageProps));
  case MESSAGE_HIDE:
    return state.setIn(['message', 'show'], false);
  case SPINNER_SHOW:
    return state.set('spinner', true);
  case SPINNER_HIDE:
    return state.set('spinner', false);
  default:
    return state;
  }
}
