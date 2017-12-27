export const SETTING_CHANGE = 'SETTING_CHANGE';

export function changeSetting(key, value) {
  return {
    type: SETTING_CHANGE,
    key,
    value,
  };
};
