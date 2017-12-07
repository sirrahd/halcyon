import React from 'react';
import { me } from '../../initial_state';

export default class CommunityTimeline extends React.PureComponent {

  componentDidMount() {
    console.log(me);
  }

  render() {
    return (
      <main className='page-container' />
    );
  }

}
