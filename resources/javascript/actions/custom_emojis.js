import { api } from '../api/mastodon';

export const CUSTOM_EMOJIS_FETCH_REQUEST = 'CUSTOM_EMOJIS_FETCH_REQUEST';
export const CUSTOM_EMOJIS_FETCH_SUCCESS = 'CUSTOM_EMOJIS_FETCH_SUCCESS';
export const CUSTOM_EMOJIS_FETCH_FAIL    = 'CUSTOM_EMOJIS_FETCH_FAIL';

export function fetchCustumEmojis() {
  return (dispatch, getState) => {
    dispatch(fetchCustumEmojisRequest());

    api(getState).get('/api/v1/custom_emojis').then(response => {
      dispatch(fetchCustumEmojisSuccess(response));
    }).catch(error => {
      dispatch(fetchCustumEmojisFail(error));
    });
  };
}

export function fetchCustumEmojisRequest() {
  return {
    type: CUSTOM_EMOJIS_FETCH_REQUEST,
  };
}

export function fetchCustumEmojisSuccess(emojis) {
  return {
    type: CUSTOM_EMOJIS_FETCH_SUCCESS,
    emojis,
  };
}

export function fetchCustumEmojisFail(error) {
  return {
    type: CUSTOM_EMOJIS_FETCH_FAIL,
    error,
  };
}
