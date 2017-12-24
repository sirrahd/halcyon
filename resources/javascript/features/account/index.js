import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import AccountTimeline from '../account_timeline';
import AccountFollowers from '../account_followers';
import AccountFollowing from '../account_following';
import AccountGallery from '../account_gallery';
import AccountWithReplies from '../account_with_replies';
import AccountPinned from '../account_pinned';
import NotFound from '../not_found';

import Page from '../app/components/page';
import Content from '../app/components/content';
import Dashborad from '../app/components/dashboard';
import AccountHeaderContainer from './containers/account_header_container';
import AccountLetterheadContainer from './containers/account_letterhead_container';

@withRouter
export default class Account extends React.Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  }

  shouldComponentUpdate (nextProps) {
    if ( this.props.location !== nextProps.location) {
      return true;
    }

    return false;
  }

  render () {
    return (
      <Page>
        <AccountHeaderContainer accountId={this.props.match.params.accountId} />

        <Content>
          <Dashborad position='left'>
            <AccountLetterheadContainer accountId={this.props.match.params.accountId} />
          </Dashborad>

          <Switch>
            <Route exact path='/accounts/:accountId' component={AccountTimeline} />
            <Route exact path='/accounts/:accountId/followers' component={AccountFollowers} />
            <Route exact path='/accounts/:accountId/following' component={AccountFollowing} />
            <Route exact path='/accounts/:accountId/media' component={AccountGallery} />
            <Route exact path='/accounts/:accountId/with_replies' component={AccountWithReplies} />
            <Route exact path='/accounts/:accountId/pinned' component={AccountPinned} />
            <Route component={NotFound} />
          </Switch>
        </Content>
      </Page>
    );
  }

}
