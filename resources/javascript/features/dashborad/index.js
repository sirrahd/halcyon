import React from 'react';
import PropTypes from 'prop-types';

class Dashborad extends React.PureComponent {

  static propTypes = {
    direction: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  render() {
    const { direction, children } = this.props;
    const directionClass = (direction === 'left') ? 'dashborad--left' : 'dashborad--right';

    return (
      <aside className={`dashborad ${directionClass}`}>
        { children }
      </aside>
    );
  }

}

export default Dashborad;
