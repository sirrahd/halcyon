import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { injectIntl, defineMessages } from 'react-intl';
import { me } from '../initial_state';

const messages = defineMessages({
  mention: { id: 'account.mention', defaultMessage: 'Mention @{name}' },
  edit_profile: { id: 'account.edit_profile', defaultMessage: 'Edit profile' },
  unblock: { id: 'account.unblock', defaultMessage: 'Unblock @{name}' },
  unfollow: { id: 'account.unfollow', defaultMessage: 'Unfollow' },
  unmute: { id: 'account.unmute', defaultMessage: 'Unmute @{name}' },
  block: { id: 'account.block', defaultMessage: 'Block @{name}' },
  mute: { id: 'account.mute', defaultMessage: 'Mute @{name}' },
  follow: { id: 'account.follow', defaultMessage: 'Follow' },
  report: { id: 'account.report', defaultMessage: 'Report @{name}' },
  share: { id: 'account.share', defaultMessage: 'Share @{name}\'s profile' },
  media: { id: 'account.media', defaultMessage: 'Media' },
  blockDomain: { id: 'account.block_domain', defaultMessage: 'Hide everything from {domain}' },
  unblockDomain: { id: 'account.unblock_domain', defaultMessage: 'Unhide {domain}' },
  hideReblogs: { id: 'account.hide_reblogs', defaultMessage: 'Hide boosts from @{name}' },
  showReblogs: { id: 'account.show_reblogs', defaultMessage: 'Show boosts from @{name}' },
});

@injectIntl
export default class FollowButton extends React.PureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map.isRequired,
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
    const { account, intl } = this.porps;
    let button;

    if (account.get('id') !== me && account.get('relationship', null) !== null) {
      const following = account.getIn(['relationship', 'following']);
      const requested = account.getIn(['relationship', 'requested']);
      const blocking  = account.getIn(['relationship', 'blocking']);
      const muting  = account.getIn(['relationship', 'muting']);

      if (requested) {
        button = <button disabled icon='hourglass' title={intl.formatMessage(messages.requested)} />;
      } else if (blocking) {
        button = <button active icon='unlock-alt' title={intl.formatMessage(messages.unblock, { name: account.get('username') })} onClick={this.handleBlock} />;
      } else if (muting) {
        let hidingNotificationsButton;
        if (account.getIn(['relationship', 'muting_notifications'])) {
          hidingNotificationsButton = <IconButton active icon='bell' title={intl.formatMessage(messages.unmute_notifications, { name: account.get('username') })} onClick={this.handleUnmuteNotifications} />;
        } else {
          hidingNotificationsButton = <IconButton active icon='bell-slash' title={intl.formatMessage(messages.mute_notifications, { name: account.get('username')  })} onClick={this.handleMuteNotifications} />;
        }
        buttons = (
          <Fragment>
            <IconButton active icon='volume-up' title={intl.formatMessage(messages.unmute, { name: account.get('username') })} onClick={this.handleMute} />
            {hidingNotificationsButton}
          </Fragment>
        );
      } else if (!account.get('moved')) {
        buttons = <IconButton icon={following ? 'user-times' : 'user-plus'} title={intl.formatMessage(following ? messages.unfollow : messages.follow)} onClick={this.handleFollow} active={following} />;
      }
    }
  }

}
