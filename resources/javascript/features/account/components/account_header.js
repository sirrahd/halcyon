import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { autoPlayGif } from '../../../initial_state';

import AccountHeaderCounters from '../components/account_header_counters';
import AccountHeaderActionButton from '../components/account_header_action_button';

export default class AccountHeader extends ImmutablePureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map,
  }

  render () {
    const { account } = this.props;

    if ( !account ) {
      return <div />;
    }

    const src = autoPlayGif ? account.get('header') : account.get('header_static');

    return(
      <header className='account-header'>
        <div className='account-header__header' style={{ backgroundImage: `url(${src})` }} />

        <div className='account-header__banner'>
          <div className='account-header__banner-inner'>
            <AccountHeaderCounters account={account} />
            <AccountHeaderActionButton account={account} />
          </div>
        </div>
      </header>
    );
  }

}
