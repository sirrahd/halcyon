import mergeLocalStorage from '../merge_local_storage';

export const SETTING_CHANGE = 'SETTING_CHANGE';

export function changeSetting(key, value) {
  return (dispatch, getState) => {
    dispatch({
      type: SETTING_CHANGE,
      key,
      value,
    });

    mergeLocalStorage('initial_state', { settings: getState().get('settings').toJS() });
  };
};
