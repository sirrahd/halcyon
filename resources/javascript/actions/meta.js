import mergeLocalStorage from '../merge_local_storage';

export const META_SETTING_CHANGE = 'META_SETTING_CHANGE';

export function changeMetaSetting(key, value) {
  return (dispatch, getState) => {
    dispatch({
      type: META_SETTING_CHANGE,
      key,
      value,
    });

    mergeLocalStorage('initial_state', { meta: getState().get('meta').toJS() });
  };
};
