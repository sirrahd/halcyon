import { createStore, applyMiddleware } from 'redux';
import appReducer from '../reducers';
import thunk from 'redux-thunk';

function configureStore() {
  return createStore(
    appReducer,
    applyMiddleware(
      thunk,
    )
  );
}

export default configureStore;
