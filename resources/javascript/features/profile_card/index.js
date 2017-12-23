import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { injectIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import Avatar from '../../containers/avatar_container';
import ProfileCardCounters from './components/profile_card_counters';
import ProfileCardRelationship from './components/profile_card_relationship';
import normalizeAcct from '../../normalize_acct';

export default class ProfileCard extends ImmutablePureComponent {

  static propTypes = {
    intl: PropTypes.object.isRequired,
    account: ImmutablePropTypes.map,
    hideNote: PropTypes.bool,
    hideCounters: PropTypes.bool,
    hideRelationship: PropTypes.bool,
  }

  static defaultProps = {
    hideNote: false,
    hideCounters: false,
    hideRelationship: false,
  }

  render() {
    const { account, hideNote } = this.props;
    const header          = account.get('header');
    const id              = account.get('id');
    const displayNameHtml = { __html: account.get('display_name') };
    const noteHtml        = { __html: account.get('note') };
    const acct            = normalizeAcct(account.get('acct'), true);

    return (
      <div className='profile-card'>
        <div className='profile-card-header' style={{ backgroundImage: `url(${header})` }} />

        <div className='profile-card-account'>
          <Link to={`/accounts/${id}`}>
            <div className='profile-card-account__avatar'>
              <Avatar account={account} size={80} />
            </div>

            <div className='profile-card-account__meta'>
              <h4 className='profile-card-account__display-name' dangerouslySetInnerHTML={displayNameHtml} />
              <span className='profile-card-account__acct'>{ acct }</span>
            </div>
          </Link>

          <div className={`profile-card__note ${ hideNote ? 'invisible' : '' }`} dangerouslySetInnerHTML={noteHtml} />
        </div>

        <ProfileCardCounters account={account} />
        <ProfileCardRelationship account={account} />
      </div>
    );
  }

}
