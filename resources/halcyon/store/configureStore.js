import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import loadingMiddleware from '../middlewares/loading';
import errorsMiddleware from '../middlewares/errors';
import localStorageMiddleware from '../middlewares/local_storage';
import thunk from 'redux-thunk';

function configureStore() {
  return createStore(
    reducers,
    compose(applyMiddleware(
      thunk,
      loadingMiddleware({ promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAIL'] }),
      errorsMiddleware(),
      localStorageMiddleware(),
    ))
  );
}

export default configureStore;
