import React from 'react';
import PropTypes from 'prop-types';

export default class ComposeSettings extends React.PureComponent {

  static propTypes = {
    visible: PropTypes.bool.isRequired,
  }

  render () {
    const { visible } = this.props;

    return(
      <p style={{ display: visible ? 'block' : 'none' }}>
        投稿の設定だお☆
      </p>
    );
  }

}
