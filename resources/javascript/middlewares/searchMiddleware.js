import {
  SEARCH_RECENT_PUSH,
  SEARCH_RECENT_DELETE,
  SEARCH_RECENT_CLEAR,
  SEARCH_SAVED_PUSH,
  SEARCH_SAVED_DELETE,
  SEARCH_SAVED_CLEAR,
} from '../actions/search';
import {
  LS_RECENT_SEARCHES,
  LS_SAVED_SEARCHES,
} from '../constants';

const searchMiddleware = store => next => (action) => {
  next(action);

  switch (action.type) {
    case SEARCH_RECENT_PUSH:
    case SEARCH_RECENT_DELETE:
    case SEARCH_RECENT_CLEAR: {
      const recentSearches = store.getState().getIn(['search', 'recentSearches']);
      localStorage.setItem(LS_RECENT_SEARCHES, JSON.stringify(recentSearches));
      break;
    }
    case SEARCH_SAVED_PUSH:
    case SEARCH_SAVED_DELETE:
    case SEARCH_SAVED_CLEAR: {
      const savedSearches = store.getState().getIn(['search', 'savedSearches']);
      localStorage.setItem(LS_SAVED_SEARCHES, JSON.stringify(savedSearches));
      break;
    }
    default:
      break;
  }
};

export default searchMiddleware;
