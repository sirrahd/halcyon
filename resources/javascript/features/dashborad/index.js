import React from 'react';
import PropTypes from 'prop-types';

class Dashborad extends React.PureComponent {
  static propTypes = {
    direction: PropTypes.string.isRequired,
  };

  render() {
    const { direction } = this.props;
    const directionClass = (direction === 'left') ? 'dashborad--left' : 'dashborad--right';

    return (
      <aside className={`dashborad ${directionClass}`}>
        <p>ダッシュボード</p>
      </aside>
    );
  }
}

export default Dashborad;
