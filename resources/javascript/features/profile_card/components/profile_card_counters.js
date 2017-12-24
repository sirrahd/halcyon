import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { Link } from 'react-router-dom';
import { FormattedMessage, injectIntl, intlShape, defineMessages } from 'react-intl';

const messages = defineMessages({
  followers_tip: { id: 'account.followers.tip', defaultMessage: '{count} followers' },
  following_tip: { id: 'account.following.tip', defaultMessage: '{count} following' },
  toots_tip:     { id: 'account.toots.tip',     defaultMessage: '{count} toots' },
});

@injectIntl
export default class ProfileCardCounters extends ImmutablePureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map,
    intl: intlShape,
  }

  render() {
    const { account, intl } = this.props;
    const id = account.get('id');
    const followers_count = account.get('followers_count');
    const following_count = account.get('following_count');
    const statuses_count  = account.get('statuses_count');

    return (
      <div className='profile-card-counters'>
        <ul className='profile-card-counters__list'>
          <li className='profile-card-counters__list-item'>
            <Link to={`/accounts/${id}`} data-tip={intl.formatMessage(messages.toots_tip, { count: statuses_count })}>
              <span className='profile-card-counters__item-label'>
                <FormattedMessage id='account.toots' defaultMessage='Toots' />
              </span>

              <span className='profile-card-counters__item-count'>
                { statuses_count }
              </span>
            </Link>
          </li>

          <li className='profile-card-counters__list-item'>
            <Link to={`/accounts/${id}/following`} data-tip={intl.formatMessage(messages.following_tip, { count: following_count } )}>
              <span className='profile-card-counters__item-label'>
                <FormattedMessage id='account.following' defaultMessage='Following' />
              </span>

              <span className='profile-card-counters__item-count'>
                { following_count }
              </span>
            </Link>
          </li>

          <li className='profile-card-counters__list-item'>
            <Link to={`/accounts/${id}/followers`} data-tip={intl.formatMessage(messages.followers_tip, { count: followers_count })}>
              <span className='profile-card-counters__item-label'>
                <FormattedMessage id='account.followers' defaultMessage='Followers' />
              </span>

              <span className='profile-card-counters__item-count'>
                { followers_count }
              </span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }

}
