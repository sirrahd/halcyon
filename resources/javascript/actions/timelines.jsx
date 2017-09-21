export const TIMELINE_UPDATE = 'TIMELINE_UPDATE';
export const TIMELINE_DELETE = 'TIMELINE_DELETE';
export const TIMELINE_REFRESH = 'TIMELINE_REFRESH';

export function insertStatusIntoTimeline(status) {
  return {
    type: TIMELINE_UPDATE,
    status: status,
  }
};

export function removeStatusFromTimeline(sid) {
  return {
    type: TIMELINE_DELETE,
    sid: sid,
  }
};

export function refreshTimeline() {
  return {
    type: TIMELINE_REFRESH,
  }
};
