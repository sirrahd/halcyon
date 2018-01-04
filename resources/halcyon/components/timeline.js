import React from 'react';
import PropTypes from 'prop-types';

export default class Timeline extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
  }

  render () {
    const { children } = this.props;

    return (
      <div className='timeline'>{ children }</div>
    );
  }

}
