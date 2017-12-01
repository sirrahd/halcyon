import { Map as ImmutableMap, List as ImmutableList, fromJS } from 'immutable';
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
  RECENT_SEARCHES_MAX_LENGTH,
} from '../constants';

const localRecentSearches = () => {
  const item = JSON.parse(localStorage.getItem(LS_RECENT_SEARCHES));
  if (item === null || typeof item !== 'object') {
    localStorage.setItem(LS_RECENT_SEARCHES, '[]');
    return ImmutableList([]);
  }
  return fromJS(item);
};

const localSavedSearches = () => {
  const item = JSON.parse(localStorage.getItem(LS_SAVED_SEARCHES));
  if (item === null || typeof item !== 'object') {
    localStorage.setItem(LS_SAVED_SEARCHES, '[]');
    return ImmutableList([]);
  }
  return fromJS(item);
};

const initialState = ImmutableMap({
  recentSearches: localRecentSearches(),
  savedSearches: localSavedSearches(),
});

export default function search(state = initialState, action) {
  switch (action.type) {
  case SEARCH_RECENT_PUSH:
    if (!state.get('recentSearches').includes(action.q)) {
      return state.withMutations((map) => {
        map.update('recentSearches', val => val.unshift(action.q));
        if (map.get('recentSearches').size > RECENT_SEARCHES_MAX_LENGTH) {
          map.update('recentSearches', val => val.setSize(RECENT_SEARCHES_MAX_LENGTH));
        }
      });
    }
    return state;
  case SEARCH_RECENT_DELETE:
    return state.update('recentSearches', val => val.delete(action.index));
  case SEARCH_RECENT_CLEAR:
    return state.update('recentSearches', val => val.clear());
  case SEARCH_SAVED_PUSH:
    if (!state.get('savedSearches').includes(action.q)) {
      return state.update('savedSearches', val => val.unshift(action.q));
    }
    return state;
  case SEARCH_SAVED_DELETE:
    return state.update('savedSearches', val => val.delete(action.index));
  case SEARCH_SAVED_CLEAR:
    return state.update('savedSearches', val => val.clear());
  default:
    return state;
  }
}
