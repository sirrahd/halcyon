import { Iterable, fromJS } from 'immutable';
import mergeLocalStorage from '../merge_local_storage';

export const STORE_HYDRATE = 'STORE_HYDRATE';
export const STORE_HYDRATE_LAZY = 'STORE_HYDRATE_LAZY';

const convertState = rawState =>
  fromJS(rawState, (k, v) =>
    Iterable.isIndexed(v) ? v.toList() : v.toMap());

export function hydrateStore(rawState) {
  return (dispatch) => {
    const state = convertState(rawState);

    dispatch({
      type: STORE_HYDRATE,
      state,
    });

    mergeLocalStorage('initial_state', {
      meta:              state.meta,
      compose:           state.compose,
      accounts:          state.accounts,
      media_attachments: state.media_attachments,
      settings:          state.settings,
      push_subscription: state.push_subscription,
      custom_emojis:     state.custom_emojis,
    });
  };
};
