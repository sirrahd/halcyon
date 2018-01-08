import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';

export default class Usernamme extends ImmutablePureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map,
    usernameDisplay: PropTypes.string.isRequired,
  }

  render () {
    const { account, usernameDisplay } = this.props;
    let username;

    switch(usernameDisplay) {
    case 'always_full':
      username = `@${account.get('full_username')}`;
      break;
    case 'remote_only':
      username = `@${account.get('acct')}`;
      break;
    case 'always_short':
      username = `@${account.get('username')}`;
      break;
    default:
      username = `@${account.get('acct')}`;
      break;
    }

    return (
      <span className='account__username'>{ username }</span>
    );
  }

}
