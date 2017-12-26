import React from 'react';
// import ImmutablePropTypes from 'react-immutable-proptypes';
// import ImmutablePureComponent from 'react-immutable-pure-component';

import Page from '../app/components/page';
import Content from '../app/components/content';
import Dashborad from '../app/components/dashboard';
import ProfileCard from '../../containers/profile_card_container';
import { me } from '../../initial_state';

export default class HomeTimeline extends React.Component {

  render() {
    return (
      <Page>
        <Content>

          <Dashborad position='left'>
            <ProfileCard accountId={me} withCounters />
          </Dashborad>

          <Dashborad position='right' />

        </Content>
      </Page>
    );
  }

}
