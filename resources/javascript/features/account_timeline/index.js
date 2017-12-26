import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router';

import Page from '../app/components/page';
import Content from '../app/components/content';
import Dashborad from '../app/components/dashboard';
import AccountHeaderContainer from '../account/containers/account_header_container';
import AccountLetterheadContainer from '../account/containers/account_letterhead_container';

import Timeline from './components/timeline';
import Gallery from './components/gallery';
import WithReplies from './components/with_replies';
import Pinned from './components/pinned';

export default class AccountTimeline extends React.Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Page>
        <AccountHeaderContainer accountId={this.props.match.params.accountId} />

        <Content>
          <Dashborad position='left'>
            <AccountLetterheadContainer accountId={this.props.match.params.accountId} />
          </Dashborad>

          <Switch>
            <Route exact path='/accounts/:accountId' component={Timeline} />
            <Route exact path='/accounts/:accountId/media' component={Gallery} />
            <Route exact path='/accounts/:accountId/with_replies' component={WithReplies} />
            <Route exact path='/accounts/:accountId/pinned' component={Pinned} />
          </Switch>

          <Dashborad position='right' />
        </Content>
      </Page>
    );
  }

}
