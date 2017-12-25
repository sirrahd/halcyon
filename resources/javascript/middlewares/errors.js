import { showMessage } from '../actions/indicators';

const defaultFailSuffix = 'FAIL';

export default function errorsMiddleware() {
  return ({ dispatch }) => next => action => {
    if (action.type && !action.skipAlert) {
      const isFail = new RegExp(`${defaultFailSuffix}$`, 'g');

      if (action.type.match(isFail)) {
        if (action.error.response) {
          const { data, statusText } = action.error.response;

          let message = statusText;

          if (data.error) {
            message = data.error;
          }

          dispatch(showMessage({ message }));
        } else {
          console.error(action.error);
          dispatch(showMessage({ message: 'An unexpected error occurred.' }));
        }
      }
    }

    return next(action);
  };
};
