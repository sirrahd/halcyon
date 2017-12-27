import { META_CHANGE } from '../actions/meta';
import { SETTING_CHANGE } from '../actions/settings';
import {
  CREDENTIALS_VERIFY_SUCCESS,
  CREDENTIALS_UPDATE_SUCCESS,
} from '../actions/credentials';
import { CUSTOM_EMOJIS_FETCH_SUCCESS } from '../actions/custom_emojis';
import { makeGetAccount } from '../selectors';
import { me } from '../initial_state';
import { INITIAL_STATE_KEY } from '../constants';

function mergeLocalStorage(key, value) {
  const prevData = JSON.parse(localStorage.getItem(key));
  const nextData = Object.assign(prevData, value);
  localStorage.setItem(key, JSON.stringify(nextData));
  return nextData;
}

export default function localStorageMiddleware() {
  const getAccount = makeGetAccount();

  return ({ getState }) => next => action => {
    next(action);

    if (action.type && !action.skipLocalStorage) {
      switch(action.type) {
      case META_CHANGE:
        return mergeLocalStorage(INITIAL_STATE_KEY, { meta: getState().get('meta').toJS() });
      case SETTING_CHANGE:
        return mergeLocalStorage(INITIAL_STATE_KEY, { settings: getState().get('settings').toJS() });
      case CREDENTIALS_VERIFY_SUCCESS:
      case CREDENTIALS_UPDATE_SUCCESS:
        return mergeLocalStorage(INITIAL_STATE_KEY, { accounts: { [me] : getAccount(getState(), me).toJS() } });
      case CUSTOM_EMOJIS_FETCH_SUCCESS:
        return mergeLocalStorage(INITIAL_STATE_KEY, { custom_emojis: getState().get('custom_emojis').toJS() });
      }
    }
  };
};
