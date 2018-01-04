import React from 'react';
import PropTypes from 'prop-types';
import ImmurablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import Avatar from '../containers/avatar_container';
import LoadingIndicator from './loading_indicator';

export default class RecommendedAccounts extends ImmutablePureComponent {

  static propTypes = {
    accounts: ImmurablePropTypes.list,
    is_fetching: PropTypes.bool.isRequired,
    limit: PropTypes.number,
    onFetch: PropTypes.func.isRequired,
  }

  static defaultProps = {
    limit: 3,
  }

  componentWillMount () {
    if ( !this.props.accounts.size ) {
      this.props.onFetch();
    }
  }

  renderItem (account) {
    return (
      <li className='recommended-account' key={account.get('acct')}>
        <Link to={`/${account.get('acct')}`}>
          <div className='recommended-account__avatar'>
            <Avatar account={account} size={48} />
          </div>

          <span className='recommended-account__meta'>
            <span className='recommended-account__display-name'>
              { account.get('display_name') }
            </span>

            <span className='recommended-account__display-acct'>
              { account.get('acct') }
            </span>
          </span>
        </Link>
      </li>
    );
  }

  render () {
    const { accounts, is_fetching, limit } = this.props;

    return (
      <div className='recommended-accounts'>
        <header className='recommended-accounts__header'>
          <h3 className='recommended-accounts__title'>
            <FormattedMessage id='recommended_users.title' defaultMessage='Who to follow' />
          </h3>

          <button
            className='recommended-accounts__refresh link-button'
            onClick={this.props.onFetch}
            disabled={is_fetching}
          >
            <FormattedMessage id='recommended_users.refresh' defaultMessage='Refresh' />
          </button>
        </header>

        {
          accounts.size || !is_fetching ? (
            <ul className='recommended-accounts__list'>
              { accounts.slice(0, limit).map(account => this.renderItem(account)) }
            </ul>
          ) : (
            <LoadingIndicator withLabel={false} />
          )
        }

        <footer className='recommended-accounts__footer'>
          <a href='http://vinayaka.distsn.org' target='_blank' rel='noopener'>
            Powered by Mastodon User Matching
          </a>
        </footer>
      </div>
    );

  }

}
