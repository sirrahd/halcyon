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
import RecommendedAccounts from '../../containers/recommended_accounts_container';

import Timeline from '../../components/timeline';
import StatusListContainer from '../../containers/status_list_container';

const mapStateToProps = state => ({
  hasUnread: state.getIn(['timelines', 'home', 'unread']) > 0,
});

@connect(mapStateToProps)
export default class HomeTimeline extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  componentWillMount () {
    window.addEventListener('scroll', this.handleScroll);
    this.props.dispatch(refreshHomeTimeline());
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight) {
      this.props.dispatch(expandHomeTimeline());
    }
  }

  render() {
    return (
      <Page>
        <Content>
          <Dashborad position='left'>
            <ProfileCard accountId={me} withCounters />
          </Dashborad>

          <Timeline>
            <StatusListContainer timelineId='home' />
          </Timeline>

          <Dashborad position='right'>
            <RecommendedAccounts />
          </Dashborad>
        </Content>
      </Page>
    );
  }

}
