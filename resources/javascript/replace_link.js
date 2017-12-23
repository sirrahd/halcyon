import initialState from './initial_state';

export default function replaceLink(text) {
  if (!text) {
    return null;
  }

  const { domain } = initialState.meta;
  const baseURL = `${location.href.split('/')[0]}//${location.href.split('/')[2]}`;

  return text
    .replace(RegExp('https?:\/\/([-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)\/(@[a-zA-Z0-9_]{1,30})', 'g'), `${baseURL}/$2@$1`)
    .replace(RegExp(`https?:\/\/${domain}`, 'g'), baseURL)
  ;
}
