import React from 'react';
import PropTypes from 'prop-types';

export default class Dashboard extends React.Component {

  static propTypes = {
    position: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  render() {
    const { position, children } = this.props;
    const positionClassName = (position === 'left') ? 'dashborad--left' : 'dashborad--right';

    return (
      <aside className={`dashborad ${positionClassName}`}>
        { children }
      </aside>
    );
  }

}

