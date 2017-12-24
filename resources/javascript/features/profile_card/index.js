import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { Link } from 'react-router-dom';
import normalizeAcct from '../../normalize_acct';
import { makeGetAccount } from '../../selectors';
import classNames from 'classnames';
import { autoPlayGif } from '../../initial_state';

import Avatar from '../../containers/avatar_container';
import ProfileCardCounters from './components/profile_card_counters';
import ProfileCardRelationship from './components/profile_card_relationship';

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
      return null;
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
