export const SETTING_CHANGE = 'SETTING_CHANGE';
export const SETTING_SAVE   = 'SETTING_SAVE';

export function changeSetting(key, value) {
  return dispatch => {
    dispatch({
      type: SETTING_CHANGE,
      key,
      value,
    });

    dispatch(saveSettings());
  };
};

export function saveSettings() {
  return (dispatch, getState) => {
    if (getState().getIn(['settings', 'saved'])) {
      return;
    }

    const initialState    = JSON.parse(localStorage.getItem('initial_state'));
    initialState.settings = getState().get('settings').filter((_, key) => key !== 'saved').toJS();
    localStorage.setItem('initial_state', JSON.stringify(initialState));

    dispatch({ type: SETTING_SAVE });
  };
};
