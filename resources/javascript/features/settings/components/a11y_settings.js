import React from 'react';
import PropTypes from 'prop-types';

export default class A11ySettings extends React.PureComponent {

  static propTypes = {
    visible: PropTypes.bool.isRequired,
  }

  render () {
    const { visible } = this.props;

    return(
      <p style={{ display: visible ? 'block' : 'none' }}>
        アクセシビリティのせっていだお！！
      </p>
    );
  }

}
