import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { refreshHomeTimeline, expandHomeTimeline } from '../../actions/timelines';
import { me } from '../../initial_state';

import Page from '../app/components/page';
import Content from '../app/components/content';
import Dashborad from '../app/components/dashboard';
import ProfileCard from '../../containers/profile_card_container';

import Timeline from '../../components/timeline';
import TimelineHeaderCompose from '../../components/timeline_header_compose';
import StatusListContainer from '../../containers/status_list_container';

@connect()
export default class HomeTimeline extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  componentWillMount () {
    this.props.dispatch(refreshHomeTimeline());
  }

  render() {
    return (
      <Page>
        <Content>
          <Dashborad position='left'>
            <ProfileCard accountId={me} withCounters />
          </Dashborad>

          <Timeline>
            <TimelineHeaderCompose />
            <StatusListContainer timelineId='home' />
          </Timeline>

          <Dashborad position='right' />
        </Content>
      </Page>
    );
  }

}
