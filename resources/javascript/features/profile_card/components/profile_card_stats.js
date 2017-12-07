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

          <li className='profile-card-stats__list-item' data-tip={intl.formatMessage(messages.followers_tip, { count: account.get('followers_count') })}>
            <Link to={`/accounts/${account.get('id')}/followers`}>

              <span className='profile-card-stats__item-label'>
                <FormattedMessage id='account.followers' defaultMessage='Followers' />
              </span>

              <span className='profile-card-stats__item-count'>
                { account.get('followers_count') }
              </span>

            </Link>
          </li>

          <li className='profile-card-stats__list-item' data-tip={intl.formatMessage(messages.following_tip, { count: account.get('following_count') } )}>
            <Link to={`/accounts/${account.get('id')}/following`}>

              <span className='profile-card-stats__item-label'>
                <FormattedMessage id='account.following' defaultMessage='Following' />
              </span>

              <span className='profile-card-stats__item-count'>
                { account.get('following_count') }
              </span>

            </Link>
          </li>

          <li className='profile-card-stats__list-item' data-tip={intl.formatMessage(messages.toots_tip, { count: account.get('statuses_count') })}>
            <Link to={`/accounts/${account.get('id')}`}>

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
