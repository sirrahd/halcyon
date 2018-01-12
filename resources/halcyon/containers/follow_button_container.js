import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { makeGetAccount } from '../selectors';
import {
  followAccount,
  unfollowAccount,
  blockAccount,
  unblockAccount,
  muteAccount,
  unmuteAccount,
} from '../actions/accounts';
import {
  editCredentials,
  resetCredentials,
  updateCredentials,
} from '../actions/credentials';
import FollowButton from '../components/follow_button';

const makeMapStateToProps = () => {
  const getAccount = makeGetAccount();

  const mapStateToProps = (state, { accountId }) => ({
    account: getAccount(state, accountId),
    isEditing: state.getIn(['credentials', 'is_editing' ]),
  });

  return mapStateToProps;
};

const mapDispatchToProps = (dispatch, { intl }) => ({

  onFollow (account) {
    if (account.getIn(['relationship', 'following']) || account.getIn(['relationship', 'requested'])) {
      // if (unfollowModal) {
      //   dispatch(openModal('CONFIRM', {
      //     message: <FormattedMessage id='confirmations.unfollow.message' defaultMessage='Are you sure you want to unfollow {name}?' values={{ name: <strong>@{account.get('acct')}</strong> }} />,
      //     confirm: intl.formatMessage(messages.unfollowConfirm),
      //     onConfirm: () => dispatch(unfollowAccount(account.get('id'))),
      //   }));
      // } else {
      //   dispatch(unfollowAccount(account.get('id')));
      // }
    } else {
      dispatch(followAccount(account.get('id')));
    }
  },

  onBlock (account) {
    if (account.getIn(['relationship', 'blocking'])) {
      dispatch(unblockAccount(account.get('id')));
    } else {
      dispatch(blockAccount(account.get('id')));
    }
  },

  onMute (account) {
    if (account.getIn(['relationship', 'muting'])) {
      dispatch(unmuteAccount(account.get('id')));
    } else {
      // dispatch(initMuteModal(account));
    }
  },

  onMuteNotifications (account, notifications) {
    dispatch(muteAccount(account.get('id'), notifications));
  },

  onEdit () {
    dispatch(editCredentials());
  },

  onReset () {
    dispatch(resetCredentials());
  },

  onUpdate () {
    dispatch(updateCredentials());
  },
});

export default injectIntl(connect(
  makeMapStateToProps,
  mapDispatchToProps,
)(FollowButton));
