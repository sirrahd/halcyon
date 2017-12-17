import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { injectIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import Avatar from '../../containers/avatar_container';
import ProfileCardStats from './components/profile_card_stats';
import ProfileCardRelationship from './components/profile_card_relationship';
import normalizeAcct from '../../normalize_acct';
// import {
//   followAccount,
//   unfollowAccount,
//   blockAccount,
//   unblockAccount,
//   unmuteAccount,
// } from '../../actions/accounts';

// const mapDispatchToProps = (dispatch, {intl}) => ({
//   onFollow (account) {
//     if (account.getIn(['relationship', 'following']) || account.getIn(['relationship', 'requested'])) {
//       if (unfollowModal) {
//         dispatch(openModal('CONFIRM', {
//           message: <FormattedMessage id='confirmations.unfollow.message' defaultMessage='Are you sure you want to unfollow {name}?' values={{ name: <strong>@{account.get('acct')}</strong> }} />,
//           confirm: intl.formatMessage(messages.unfollowConfirm),
//           onConfirm: () => dispatch(unfollowAccount(account.get('id'))),
//         }));
//       } else {
//         dispatch(unfollowAccount(account.get('id')));
//       }
//     } else {
//       dispatch(followAccount(account.get('id')));
//     }
//   },

//   onBlock (account) {
//     if (account.getIn(['relationship', 'blocking'])) {
//       dispatch(unblockAccount(account.get('id')));
//     } else {
//       dispatch(blockAccount(account.get('id')));
//     }
//   },

//   onMute (account) {
//     if (account.getIn(['relationship', 'muting'])) {
//       dispatch(unmuteAccount(account.get('id')));
//     } else {
//       dispatch(initMuteModal(account));
//     }
//   },
// });

@injectIntl
export default class ProfileCard extends ImmutablePureComponent {

  static propTypes = {
    intl: PropTypes.object.isRequired,
    account: ImmutablePropTypes.map,
    // onFollow: PropTypes.func.isRequired,
    // onBlock: PropTypes.func.isRequired,
    // onMute: PropTypes.func.isRequired,
    hideStats: PropTypes.bool,
    hideNote: PropTypes.bool,
    hideRelationship: PropTypes.bool,
  }

  static defaultProps = {
    hideStats: false,
    hideNote: false,
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

        <ProfileCardStats account={account} />
        <ProfileCardRelationship account={account} />
      </div>
    );
  }

}
