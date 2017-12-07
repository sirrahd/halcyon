import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class Avatar extends React.PureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map.isRequired,
    size: PropTypes.number.isRequired,
    style: PropTypes.object,
    animate: PropTypes.bool,
    inline: PropTypes.bool,
    round: PropTypes.bool,
  };

  static defaultProps = {
    animate: false,
    size: 20,
    inline: false,
    round: false,
  };

  render () {
    const { account, size, animate, inline, round } = this.props;
    const src = account.get('avatar');
    const staticSrc = account.get('avatar_static');

    const className = classnames({
      'account__avatar': true,
      'account__avatar--inline': inline,
      'account__avatar--round': round,
    });

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
        style={style}
      />
    );
  }

}
