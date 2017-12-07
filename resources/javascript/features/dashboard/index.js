import React from 'react';
import PropTypes from 'prop-types';

export default class Dashboard extends React.Component {

  static propTypes = {
    direction: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  render() {
    const { direction, children } = this.props;
    const directionClassName = (direction === 'left') ? 'dashborad--left' : 'dashborad--right';

    return (
      <aside className={`dashborad ${directionClassName}`}>
        { children }
      </aside>
    );
  }

}

