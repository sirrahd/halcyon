import React from 'react';
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
});

export default class FollowButton extends React.PureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map,
    onFollow: PropTypes.func.isRequired,
    onBlock: PropTypes.func.isRequired,
    onMute: PropTypes.func.isRequired,
    onMuteNotifications: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
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
    const { account, intl } = this.props;

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
    }

    return <div>else</div>;
  }

}
