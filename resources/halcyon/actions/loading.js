export const LOADING_SHOW  = 'LOADING_SHOW';
export const LOADING_HIDE  = 'LOADING_HIDE';

export function showLoading() {
  return {
    type: LOADING_SHOW,
  };
}

export function hideLoading() {
  return {
    type: LOADING_HIDE,
  };
}
