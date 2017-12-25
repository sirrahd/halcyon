import {
  showSpinner,
  hideSpinner,
} from '../actions/indicators';

const defaultTypeSuffixes = ['PENDING', 'FULFILLED', 'REJECTED'];

export default function requestsMiddleware(config = {}) {
  const promiseTypeSuffixes = config.promiseTypeSuffixes || defaultTypeSuffixes;

  return ({ dispatch }) => next => action => {
    if (action.type && !action.skipLoading) {
      const [PENDING, FULFILLED, REJECTED] = promiseTypeSuffixes;

      const isPending = new RegExp(`${PENDING}$`, 'g');
      const isFulfilled = new RegExp(`${FULFILLED}$`, 'g');
      const isRejected = new RegExp(`${REJECTED}$`, 'g');

      if (action.type.match(isPending)) {
        dispatch(showSpinner());
      } else if (action.type.match(isFulfilled) || action.type.match(isRejected)) {
        dispatch(hideSpinner());
      }
    }

    return next(action);
  };
};
