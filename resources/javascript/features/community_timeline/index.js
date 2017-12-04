import React from 'react';
import Topbar from '../topbar';
import { me } from '../../initial_state';

export default class CommunityTimeline extends React.PureComponent {

  componentDidMount() {
    console.log(me);
  }

  render() {
    return (
      <div className='app-container'>
        <Topbar />
      </div>
    );
  }

}
