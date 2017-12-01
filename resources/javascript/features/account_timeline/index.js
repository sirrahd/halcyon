import React from 'react';
import PropTypes from 'prop-types';
import Topbar from '../components/Topbar';

class Profile extends React.PureComponent {
  static propTypes = {
    params: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div className="app-container">
        <Topbar />
        <div>
          profile
        </div>
      </div>
    );
  }
}

export default Profile;
