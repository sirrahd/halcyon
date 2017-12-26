export const META_CHANGE = 'META_CHANGE';

export function changeMeta(key, value) {
  return {
    type: META_CHANGE,
    key,
    value,
  };
};
