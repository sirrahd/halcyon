import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { refreshPublicTimeline, expandPublicTimeline } from '../../actions/timelines';
import { me } from '../../initial_state';

import Page from '../app/components/page';
import Content from '../app/components/content';
import Dashborad from '../app/components/dashboard';
import ProfileCard from '../../containers/profile_card_container';
import RecommendedAccounts from '../../containers/recommended_accounts_container';

import Timeline from '../../components/timeline';
import StatusListContainer from '../../containers/status_list_container';

@connect()
export default class PublicTimeline extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  componentWillMount () {
    this.props.dispatch(refreshPublicTimeline());
  }

  render() {
    return (
      <Page>
        <Content>
          <Dashborad position='left'>
            <ProfileCard accountId={me} withCounters />
          </Dashborad>

          <Timeline>
            <StatusListContainer timelineId='public' />
          </Timeline>

          <Dashborad position='right'>
            <RecommendedAccounts />
          </Dashborad>
        </Content>
      </Page>
    );
  }

}
