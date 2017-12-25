import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import requestsMiddleware from '../middlewares/requests';
import thunk from 'redux-thunk';

function configureStore() {
  return createStore(
    reducers,
    compose(applyMiddleware(
      thunk,
      requestsMiddleware({ promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAIL'] }),
    ))
  );
}

export default configureStore;
