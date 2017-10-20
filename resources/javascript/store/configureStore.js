import { createStore, applyMiddleware } from 'redux';
import appReducer from '../reducers';
import logger from '../middlewares/logger';
import searchMiddleware from '../middlewares/searchMiddleware';

function configureStore() {
  return createStore(appReducer, applyMiddleware(
    logger,
    searchMiddleware,
  ));
}

export default configureStore;
