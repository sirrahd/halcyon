export const MESSAGE_SHOW  = 'MESSAGE_SHOW';
export const MESSAGE_HIDE  = 'MESSAGE_HIDE';
export const SPINNER_SHOW  = 'SPINNER_SHOW';
export const SPINNER_HIDE  = 'SPINNER_HIDE';

export function showMessage(props) {
  return {
    type: MESSAGE_SHOW,
    messageProps: props,
  };
}

export function hideMessage() {
  return {
    type: MESSAGE_HIDE,
  };
}

export function showSpinner() {
  return {
    type: SPINNER_SHOW,
  };
}

export function hideSpinner() {
  return {
    type: SPINNER_HIDE,
  };
}
