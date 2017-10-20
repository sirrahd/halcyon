export const SEARCH_RECENT_PUSH   = 'SEARCH_RECENT_PUSH';
export const SEARCH_RECENT_DELETE = 'SEARCH_RECENT_DELETE';
export const SEARCH_RECENT_CLEAR  = 'SEARCH_RECENT_CLEAR';
export const SEARCH_SAVED_PUSH    = 'SEARCH_SAVED_PUSH';
export const SEARCH_SAVED_DELETE  = 'SEARCH_SAVED_DELETE';
export const SEARCH_SAVED_CLEAR   = 'SEARCH_SAVED_CLEAR';

export function pushRecentSearches(q) {
  return {
    type: SEARCH_RECENT_PUSH,
    q,
  };
}

export function deleteRecentSearches(index) {
  return {
    type: SEARCH_RECENT_DELETE,
    index,
  };
}

export function clearRecentSearches() {
  return {
    type: SEARCH_RECENT_CLEAR,
  };
}

export function pushSavedSearches(q) {
  return {
    type: SEARCH_SAVED_PUSH,
    q,
  };
}

export function deleteSavedSearches(index) {
  return {
    type: SEARCH_SAVED_DELETE,
    index,
  };
}

export function clearSavedSearches() {
  return {
    type: SEARCH_SAVED_CLEAR,
  };
}
