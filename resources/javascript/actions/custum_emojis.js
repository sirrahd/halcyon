import { api } from '../api/mastodon';

export const CUSTUM_EMOJIS_FETCH_REQUEST = 'CUSTUM_EMOJIS_FETCH_REQUEST';
export const CUSTUM_EMOJIS_FETCH_SUCCESS = 'CUSTUM_EMOJIS_FETCH_SUCCESS';
export const CUSTUM_EMOJIS_FETCH_FAIL    = 'CUSTUM_EMOJIS_FETCH_FAIL';

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
    type: CUSTUM_EMOJIS_FETCH_REQUEST,
  };
}

export function fetchCustumEmojisSuccess(emojis) {
  return {
    type: CUSTUM_EMOJIS_FETCH_SUCCESS,
    emojis,
  };
}

export function fetchCustumEmojisFail(error) {
  return {
    type: CUSTUM_EMOJIS_FETCH_FAIL,
    error,
  };
}
