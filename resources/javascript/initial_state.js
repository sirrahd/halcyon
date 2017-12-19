import api from './api/mastodon';
import { fromJS } from 'immutable';
import { store } from './containers/halcyon';
import { hydrateStore } from './actions/store';

const storage = localStorage.getItem('initial_state');
const initialState = storage && JSON.parse(storage);
const getMeta = (prop) => initialState && initialState.meta && initialState.meta[prop];

export const reduceMotion  = getMeta('reduce_motion');
export const autoPlayGif   = getMeta('auto_play_gif');
export const unfollowModal = getMeta('unfollow_modal');
export const boostModal    = getMeta('boost_modal');
export const deleteModal   = getMeta('delete_modal');
export const me            = getMeta('me');

export default initialState;

api(() => (fromJS(initialState))).get('/api/v1/accounts/verify_credentials').then(response => {
  initialState.accounts[me] = response.data;
  store.dispatch(hydrateStore(initialState));
});

api(() => (fromJS(initialState))).get('/api/v1/custom_emojis').then(response => {
  initialState.custom_emojis = response.data;
  store.dispatch(hydrateStore(initialState));
}).catch(() => {
  initialState.custom_emojis = [];
  store.dispatch(hydrateStore(initialState));
});
