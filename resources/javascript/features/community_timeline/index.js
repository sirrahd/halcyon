import React from 'react';
import { me } from '../../initial_state';
import AppContainer from '../app';

export default class CommunityTimeline extends React.PureComponent {

  componentDidMount() {
    console.log(me);
  }

  render() {
    return (
      <AppContainer>
        <main className='page-container' />
      </AppContainer>
    );
  }

}
