import { STORE_HYDRATE } from '../actions/store';
import { META_SETTING_CHANGE } from '../actions/meta';
import { Map as ImmutableMap } from 'immutable';

const initialState = ImmutableMap({
  streaming_api_base_url: null,
  access_token: null,
  unfollow_modal: false,
  boost_modal: false,
  delete_modal: true,
  auto_play_gif: true,
  reduce_motion: false,
});

export default function meta(state = initialState, action) {
  switch(action.type) {
  case STORE_HYDRATE:
    return state.merge(action.state.get('meta'));
  case META_SETTING_CHANGE:
    return state.setIn(action.key, action.value);
  default:
    return state;
  }
};
