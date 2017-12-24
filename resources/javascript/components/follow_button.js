import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class FollowButton extends React.PureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map.isRequired,
    onFollow: PropTypes.func.isRequired,
    onBlock: PropTypes.func.isRequired,
    onMute: PropTypes.func.isRequired,
    onMuteNotifications: PropTypes.func.isRequired,
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
    return (
      <button className='follow-button'>
        { this.props.name }
      </button>
    );
  }

}
