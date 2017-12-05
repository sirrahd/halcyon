import initialState from './initial_state';

export default function normalizeAcct(acct, prefix=false) {
  const [ username, { domain } = initialState.meta ] = acct.split('@');

  // Very old version of Mastodon has a posibility of
  // acct returns string started with @.
  if ( prefix && username.charAt(0) !== '@' ) {
    return `@${username}@${domain}`;
  }

  return `${username}@${domain}`;
};
