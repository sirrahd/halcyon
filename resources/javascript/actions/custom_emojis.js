import api from '../api/mastodon';

export const CUSTOM_EMOJIS_FETCH_REQUEST = 'CUSTOM_EMOJIS_FETCH_REQUEST';
export const CUSTOM_EMOJIS_FETCH_SUCCESS = 'CUSTOM_EMOJIS_FETCH_SUCCESS';
export const CUSTOM_EMOJIS_FETCH_FAIL    = 'CUSTOM_EMOJIS_FETCH_FAIL';

export function fetchCustomEmojis() {
  return (dispatch, getState) => {
    dispatch(fetchCustomEmojisRequest());

    api(getState).get('/api/v1/custom_emojis').then(response => {
      dispatch(fetchCustomEmojisSuccess(response));
    }).catch(error => {
      dispatch(fetchCustumEmojisFail(error));
    });
  };
}

export function fetchCustomEmojisRequest() {
  return {
    type: CUSTOM_EMOJIS_FETCH_REQUEST,
  };
}

export function fetchCustomEmojisSuccess(emojis) {
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
