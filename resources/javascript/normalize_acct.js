import initialState from './initial_state';

export default function normalizeAcct(acct, prefix=false) {
  const [ username, domain = initialState.meta.domain ] = acct.split('@');

  if ( prefix && username.charAt(0) !== '@' ) {
    return `@${username}@${domain}`;
  }

  return `${username}@${domain}`;
};
