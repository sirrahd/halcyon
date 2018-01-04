import React from 'react';
import PropTypes from 'prop-types';
import ImmurablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { FormattedMessage } from 'react-intl';

import Avatar from '../containers/avatar_container';

export default class RecommendedAccounts extends ImmutablePureComponent {

  static propTypes = {
    accounts: ImmurablePropTypes.list,
    is_fetching: PropTypes.bool.isRequired,
    onFetch: PropTypes.func.isRequired,
  }

  renderItem (account) {
    return (
      <li className='recommended-account' key={account.get('acct')}>
        <div className='recommended-account__avatar'>
          <Avatar account={account} />
        </div>

        <div className='recommended-account__meta'>
          <span className='recommended-account__display-name'>
            { account.get('display_name') }
          </span>

          <span className='recommended-account__display-acct'>
            { account.get('acct') }
          </span>
        </div>
      </li>
    );
  }

  render () {
    const { accounts, is_fetching } = this.props;

    if ( !accounts.size ) {
      return (
        <div className='recommended-accounts'>
          <h3 className='recommended-accounts__title'>
            <FormattedMessage id='recommended_users.title' defaultMessage='Who to follow' />
          </h3>

          {
            !is_fetching ? (
              <button onClick={this.props.onFetch} className='recommended-accounts__refresh generic-button'>
                <FormattedMessage id='recommended_users.refresh' defaultMessage='Refresh' />
              </button>
            ) : (
              <button onClick={this.props.onFetch} className='recommended-accounts__refresh generic-button' disabled>
                <FormattedMessage id='recommended_users.refreshing' defaultMessage='Refreshing' />
              </button>
            )
          }
        </div>
      );
    }

    return (
      <div className='recommended-accounts'>
        <h3 className='recommended-accounts__title'>
          <FormattedMessage id='recommended_users.title' defaultMessage='Who to follow' />
        </h3>

        <ul className='recommended-accounts__list'>
          { accounts.slice(0, 2).map(account => this.renderItem(account)) }
        </ul>
      </div>
    );
  }

}
