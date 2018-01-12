import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { defineMessages } from 'react-intl';
import classNames from 'classnames';
import { me } from '../initial_state';

const messages = defineMessages({
  follow: { id: 'account.follow', defaultMessage: 'Follow' },
  following: { id: 'account.following', defaultMessage: 'Following' },
  unfollow: { id: 'account.unfollow', defaultMessage: 'Unfollow' },
  requested: { id: 'account.requested', defaultMessage: 'Awaiting approval' },
  unblock: { id: 'account.unblock', defaultMessage: 'Unblock @{name}' },
  unmute: { id: 'account.unmute', defaultMessage: 'Unmute @{name}' },
  mute_notifications: { id: 'account.mute_notifications', defaultMessage: 'Mute notifications from @{name}' },
  unmute_notifications: { id: 'account.unmute_notifications', defaultMessage: 'Unmute notifications from @{name}' },
  edit_profile: { id: 'account.edit_profile', defaultMessage: 'Edit profile' },
  update_profile: { id: 'account.update_profile', defaultMessage: 'Save changes' },
  reset_edit_profile: { id: 'account.reset_edit_profile', defaultMessage: 'Cancel' },
});

export default class FollowButton extends React.PureComponent {

  static propTypes = {
    intl: PropTypes.object.isRequired,
    account: ImmutablePropTypes.map,
    onFollow: PropTypes.func.isRequired,
    onBlock: PropTypes.func.isRequired,
    onMute: PropTypes.func.isRequired,
    onMuteNotifications: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    isEditing: PropTypes.bool.isRequired,
  }

  handleFollow = () => {
    this.props.onFollow(this.props.account);
  }

  handleBlock = () => {
    this.props.onBlock(this.props.account);
  }

  handleMute = () => {
    this.props.onMute(this.props.account);
  }

  handleMuteNotifications = () => {
    this.props.onMuteNotifications(this.props.account, true);
  }

  handleUnmuteNotifications = () => {
    this.props.onMuteNotifications(this.props.account, false);
  }

  render () {
    const { intl, account, isEditing } = this.props;

    if ( account === null ) {
      return <div />;
    }

    if (account.get('id') !== me && account.get('relationship', null) !== null) {
      const following = account.getIn(['relationship', 'following']);
      const requested = account.getIn(['relationship', 'requested']);
      // const blocking  = account.getIn(['relationship', 'blocking']);
      // const muting  = account.getIn(['relationship', 'muting']);
      // const mutingNotificaitions = account.getIn(['relationship', 'muting_notifications']);
      // const moved = account.get('moved');

      if (requested) {
        return (
          <button className='follow-button follow-button--reuested'>
            <div className='follow-button__label'>
              { intl.formatMessage(messages.requested) }
            </div>
          </button>
        );
      }

      return (
        <button className={classNames('follow-button', { 'follow-button--following' : following })}>
          <div className='follow-button__label'>
            { following ? intl.formatMessage(messages.following) : intl.formatMessage(messages.follow)}
          </div>
        </button>
      );

    } else if ( account.get('id') === me ) {
      if ( isEditing ) {
        return (
          <Fragment>
            <button className='follow-button follow-button--reset-edit-profile' onClick={this.props.onReset}>
              <div className='follow-button__label'>
                { intl.formatMessage(messages.reset_edit_profile)}
              </div>
            </button>

            <button className='follow-button follow-button--update-profile' onClick={this.props.onUpdate}>
              <div className='follow-button__label'>
                { intl.formatMessage(messages.update_profile)}
              </div>
            </button>
          </Fragment>
        );
      }

      return (
        <button className='follow-button follow-button--edit-profile' onClick={this.props.onEdit}>
          <div className='follow-button__label'>
            { intl.formatMessage(messages.edit_profile)}
          </div>
        </button>
      );
    }

    return <div />;
  }

}
