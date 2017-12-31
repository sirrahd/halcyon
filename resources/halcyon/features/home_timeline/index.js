import React from 'react';
// import ImmutablePropTypes from 'react-immutable-proptypes';
// import ImmutablePureComponent from 'react-immutable-pure-component';
import { me } from '../../initial_state';

import Page from '../app/components/page';
import Content from '../app/components/content';
import Dashborad from '../app/components/dashboard';
import ProfileCard from '../../containers/profile_card_container';
import Timeline from '../../components/timeline';
import TimelineHeaderCompose from '../../components/timeline_header_compose';

export default class HomeTimeline extends React.Component {

  render() {
    return (
      <Page>
        <Content>
          <Dashborad position='left'>
            <ProfileCard accountId={me} withCounters />
          </Dashborad>

          <Timeline>
            <TimelineHeaderCompose />
            <StatusListContainer />
          </Timeline>

          <Dashborad position='right' />
        </Content>
      </Page>
    );
  }

}
