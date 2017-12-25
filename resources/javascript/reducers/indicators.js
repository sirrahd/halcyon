import {
  ALERT_SHOW,
  ALERT_DISMISS,
  SPINNER_SHOW,
  SPINNER_HIDE,
} from '../actions/indicators';

import { Map as ImmutableMap } from 'immutable';

const initialState = ImmutableMap({
  alert: ImmutableMap({
    show: false,
    message: '',
  }),

  spinner: false,
});

export default function indicators(state = initialState, action) {
  switch(action.type) {
  case ALERT_SHOW:
    return state
      .setIn(['alert', 'show'], true)
      .setIn(['alert', 'message'], action.message);
  case ALERT_DISMISS:
    return state.clear();
  case SPINNER_SHOW:
    return state.set('spinner', true);
  case SPINNER_HIDE:
    return state.set('spinner', false);
  default:
    return state;
  }
}
