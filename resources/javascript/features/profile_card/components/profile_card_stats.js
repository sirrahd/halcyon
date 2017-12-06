import React from 'react';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Link } from 'react-router-dom';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import normalizeAcct from '../../../normalize_acct';

@injectIntl
export default class ProfileCardStats extends ImmutablePureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map,
    intl: intlShape,
  }

  render() {
    const { account, intl } = this.props;

    return (
      <div className='profile-card-stats'>
        <ul className='profile-card-stats__list'>

          <li className='profile-card-stats__list-item' data-tip={intl.formatMessage({ id: 'account.followers.tip', defaultMessage: '{count} followers' }, { count: account.get('followers_count').toString() } )}>
            <Link to={`/${normalizeAcct(account.get('acct'), true)}/followers`}>
              <span className='profile-card-stats__item-label'>
                <FormattedMessage id='account.followers' defaultMessage='Followers' />
              </span>
              <span className='profile-card-stats__item-count'>
                { account.get('followers_count') }
              </span>
            </Link>
          </li>

          <li className='profile-card-stats__list-item' data-tip={intl.formatMessage({ id: 'account.following.tip', defaultMessage: '{count} following' }, { count: account.get('following_count').toString() } )}>
            <Link to={`/${normalizeAcct(account.get('acct'), true)}/following`}>
              <span className='profile-card-stats__item-label'>
                <FormattedMessage id='account.following' defaultMessage='Following' />
              </span>
              <span className='profile-card-stats__item-count'>
                { account.get('following_count') }
              </span>
            </Link>
          </li>

          <li className='profile-card-stats__list-item' data-tip={intl.formatMessage({ id: 'account.toots.tip', defaultMessage: '{count} toots' }, { count: account.get('statuses_count').toString() })}>
            <Link to={`/${normalizeAcct(account.get('acct'), true)}`}>
              <span className='profile-card-stats__item-label'>
                <FormattedMessage id='account.toots' defaultMessage='Toots' />
              </span>
              <span className='profile-card-stats__item-count'>
                { account.get('statuses_count') }
              </span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }

}
