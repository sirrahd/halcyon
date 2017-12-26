import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import requestsMiddleware from '../middlewares/requests';
import errorsMiddleware from '../middlewares/errors';
import localStorageMiddleware from '../middlewares/local_storage';
import thunk from 'redux-thunk';

function configureStore() {
  return createStore(
    reducers,
    compose(applyMiddleware(
      thunk,
      requestsMiddleware({ promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAIL'] }),
      errorsMiddleware(),
      localStorageMiddleware(),
    ))
  );
}

export default configureStore;
