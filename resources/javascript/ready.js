/**
 * ready
 * @param {function} loaded - function that call after loading
 */
export default function ready(loaded) {
  if (['interactive', 'complete'].includes(document.readyState)) {
    loaded();
  } else {
    document.addEventListener('DOMContentLoaded', loaded);
  }
}
