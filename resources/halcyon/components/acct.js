import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';

export default class Acct extends ImmutablePureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map,
    acctDisplay: PropTypes.string.isRequired,
  }

  render () {
    const { account, acctDisplay } = this.props;
    let acct;

    switch(acctDisplay) {
    case 'always_full':
      acct = `@${account.get('full_acct')}`;
      break;
    case 'remote_only':
      acct = `@${account.get('acct')}`;
      break;
    case 'always_short':
      acct = `@${account.get('username')}`;
      break;
    default:
      acct = `@${account.get('acct')}`;
      break;
    }

    return (
      <span className='acct'>{ acct }</span>
    );
  }

}
