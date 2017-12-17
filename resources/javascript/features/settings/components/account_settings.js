import React from 'react';
import PropTypes from 'prop-types';

export default class AccountSettings extends React.PureComponent {

  static propTypes = {
    visible: PropTypes.bool.isRequired,
  }

  render () {
    const { visible } = this.props;

    return(
      <p style={{ display: visible ? 'block' : 'none' }}>
        アカウントのせっていだお！
      </p>
    );
  }

}
