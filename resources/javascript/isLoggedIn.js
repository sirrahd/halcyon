import { LS_API_ACCESS_TOKEN } from './constants';

let theResult;

export default function isLoggedIn() {
  const r = theResult || (theResult = localStorage.getItem(LS_API_ACCESS_TOKEN), theResult);
  return r;
}
