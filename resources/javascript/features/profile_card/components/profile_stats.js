import React from 'react';
import { defineMessages, FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Link } from 'react-router-dom';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import normalizeAcct from '../../../normalize_acct';
import Tooltip from 'react-tooltip';

@injectIntl
export default class ProfileStats extends ImmutablePureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map,
    intl: intlShape,
  }

  render() {
    const { account, intl } = this.props;

    return (
      <div className='profile-card-stats'>
        <ul className='profile-card-stats__list'>

          <li className='profile-card-stats__list-item' data-tip={intl.formatMessage({ id: 'profile_card.profile_stats.followers_tip', defaultMessage: '{count} followers' }, { count: account.get('followers_count').toString() } )}>
            <Link to={`/${normalizeAcct(account.get('acct'), true)}/followers`}>
              <span className='profile-card-stats__item-label'>
                <FormattedMessage id='profile_card.profile_stats.followers' defaultMessage='Followers' />
              </span>
              <span className='profile-card-stats__item-count'>
                { account.get('followers_count') }
              </span>
            </Link>
          </li>

          <li className='profile-card-stats__list-item' data-tip={intl.formatMessage({ id: 'profile_card.profile_stats.following_tip', defaultMessage: '{count} following' }, { count: account.get('following_count').toString() } )}>
            <Link to={`/${normalizeAcct(account.get('acct'), true)}/following`}>
              <span className='profile-card-stats__item-label'>
                <FormattedMessage id='profile_card.profile_stats.following' defaultMessage='Following' />
              </span>
              <span className='profile-card-stats__item-count'>
                { account.get('following_count') }
              </span>
            </Link>
          </li>

          <li className='profile-card-stats__list-item' data-tip={intl.formatMessage({ id: 'profile_card.profile_stats.toots_tip', defaultMessage: '{count} toots' }, { count: account.get('statuses_count').toString() })}>
            <Link to={`/${normalizeAcct(account.get('acct'), true)}`}>
              <span className='profile-card-stats__item-label'>
                <FormattedMessage id='profile_card.profile_stats.toots' defaultMessage='Toots' />
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
