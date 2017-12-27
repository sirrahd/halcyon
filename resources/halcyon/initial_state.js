import { INITIAL_STATE_KEY } from './constants';

const storage = localStorage.getItem(INITIAL_STATE_KEY);
const initialState = storage && JSON.parse(storage);
const getMeta = (prop) => initialState && initialState.meta && initialState.meta[prop];

export const reduceMotion  = getMeta('reduce_motion');
export const autoPlayGif   = getMeta('auto_play_gif');
export const unfollowModal = getMeta('unfollow_modal');
export const boostModal    = getMeta('boost_modal');
export const deleteModal   = getMeta('delete_modal');
export const me            = getMeta('me');

export default initialState;
