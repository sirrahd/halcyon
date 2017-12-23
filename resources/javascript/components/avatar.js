import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class Avatar extends React.PureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map.isRequired,
    round: PropTypes.bool.isRequired,
    size: PropTypes.number,
    style: PropTypes.object,
    animate: PropTypes.bool,
    inline: PropTypes.bool,
  };

  static defaultProps = {
    animate: false,
    size: 20,
    inline: false,
  };

  handleMouseEnter = () => {
    if (this.props.animate) return;
    this.setState({ hovering: true });
  }

  handleMouseLeave = () => {
    if (this.props.animate) return;
    this.setState({ hovering: false });
  }

  render () {
    const { account, size, animate, inline, round } = this.props;
    const src       = account.get('avatar');
    const staticSrc = account.get('avatar_static');
    const className = classNames('account__avatar', { 'account__avatar--inline': inline, 'account__avatar--round': round });

    const style = {
      ...this.props.style,
      width: `${size}px`,
      height: `${size}px`,
      backgroundSize: `${size}px`,
    };

    if (animate) {
      style.backgroundImage = `url(${src})`;
    } else {
      style.backgroundImage = `url(${staticSrc})`;
    }

    return (
      <div
        className={className}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={style}
      />
    );
  }

}
