import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import PropTypes from 'prop-types';

import AccountTimeline from '../account_timeline';
import AccountFollowers from '../account_followers';
import AccountFollowing from '../account_following';
import NotFound from '../not_found';

export default class Account extends React.Component {

  render () {
    return (
      <Switch>
        <Route exact path='/accounts/:accountId' component={AccountTimeline} />
        <Route exact path='/accounts/:accountId/followers' component={AccountFollowers} />
        <Route exact path='/accounts/:accountId/following' component={AccountFollowing} />
        <Route component={NotFound} />
      </Switch>
    );
  }

}
