import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'react-tooltip';
import Topbar from '../topbar';
import { isMobile } from '../../is_mobile';

export default class App extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const { children } = this.props;

    return (
      <div className='app-container'>
        <Topbar />

        {children}

        <Tooltip effect='solid' disable={isMobile(window.innerWidth)} />
      </div>
    );
  }

}
