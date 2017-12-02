import { createStore, applyMiddleware } from 'redux';
import appReducer from '../reducers';
import thunk from 'redux-thunk';
import logger from '../middlewares/logger';
import searchMiddleware from '../middlewares/searchMiddleware';

function configureStore() {
  return createStore(appReducer, applyMiddleware(
    thunk,
    logger,
    searchMiddleware,
  ));
}

export default configureStore;
