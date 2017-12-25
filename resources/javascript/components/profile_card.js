import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { FormattedMessage, FormattedNumber, injectIntl, intlShape, defineMessages } from 'react-intl';
import classNames from 'classnames';

import { makeGetAccount } from '../selectors';
import { autoPlayGif } from '../initial_state';
import normalizeAcct from '../normalize_acct';

import Avatar from '../containers/avatar_container';

const messages = defineMessages({
  followers_tip: { id: 'account.followers.tip', defaultMessage: '{count} followers' },
  following_tip: { id: 'account.following.tip', defaultMessage: '{count} following' },
  toots_tip:     { id: 'account.toots.tip',     defaultMessage: '{count} toots' },
});

const makeMapStateToProps = () => {
  const getAccount = makeGetAccount();

  const mapStateToProps = (state, { accountId }) => ({
    account: getAccount(state, accountId),
  });

  return mapStateToProps;
};

@connect(makeMapStateToProps)
export default class ProfileCard extends ImmutablePureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map,
    withNote: PropTypes.bool,
    withCounters: PropTypes.bool,
    withRelationship: PropTypes.bool,
  }

  static defaultProps = {
    withNote: false,
    withCounters: false,
    withFollowButton: false,
    withRelationship: false,
  }

  render() {
    const { account, withNote, withCounters, withFollowButton, withRelationship } = this.props;

    if (account === null) {
      return <div />;
    }

    const header          = autoPlayGif ? account.get('header') : account.get('header_static');
    const id              = account.get('id');
    const displayNameHtml = { __html: account.get('display_name_html') };
    const noteHtml        = { __html: account.get('note_emojified') };
    const acct            = normalizeAcct(account.get('acct'), true);

    return (
      <div className={classNames('profile-card', { 'profile-card--with-follow-button' : withFollowButton })}>
        <div className='profile-card-header' style={{ backgroundImage: `url(${header})` }} />

        <div className='profile-card-account'>
          <Link to={`/accounts/${id}`} className='profile-card-account__link'>
            <div className='profile-card-account__avatar'>
              <Avatar account={account} size={80} />
            </div>

            <div className='profile-card-account__meta'>
              <h4 className='profile-card-account__display-name' dangerouslySetInnerHTML={displayNameHtml} />
              <span className='profile-card-account__acct'>{ acct }</span>
            </div>
          </Link>

          { withNote ? <div className='profile-card__note' dangerouslySetInnerHTML={noteHtml} /> : <div /> }
          { withCounters ? <ProfileCardCounters account={account} /> : <div /> }
          { withRelationship ?  <ProfileCardRelationship account={account} /> : <div /> }
        </div>
      </div>
    );
  }

}

@injectIntl
class ProfileCardCounters extends ImmutablePureComponent {

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
                <FormattedNumber value={followers_count} />
              </span>
            </Link>
          </li>

          <li className='profile-card-counters__list-item'>
            <Link to={`/accounts/${id}/following`} data-tip={intl.formatMessage(messages.following_tip, { count: following_count } )}>
              <span className='profile-card-counters__item-label'>
                <FormattedMessage id='account.following' defaultMessage='Following' />
              </span>

              <span className='profile-card-counters__item-count'>
                <FormattedNumber value={following_count} />
              </span>
            </Link>
          </li>

          <li className='profile-card-counters__list-item'>
            <Link to={`/accounts/${id}/followers`} data-tip={intl.formatMessage(messages.followers_tip, { count: followers_count })}>
              <span className='profile-card-counters__item-label'>
                <FormattedMessage id='account.followers' defaultMessage='Followers' />
              </span>

              <span className='profile-card-counters__item-count'>
                <FormattedNumber value={statuses_count} />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }

}
