import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../app/components/dashboard';
import RecommendedAccounts from '../../containers/recommended_accounts_container';

import AccountStatuses from './components/statuses';
import AccountGallery from './components/gallery';
import AccountStatusesWithReplies from './components/statuses_with_replies';
import AccountPinned from './components/pinned';

export default class AccountTimeline extends ImmutablePureComponent {

  render () {
    return (
      <div className='account-timeline'>
        <Switch>
          <Route exact path='/accounts/:accountId' component={AccountStatuses} />
          <Route exact path='/accounts/:accountId/with_replies' component={AccountStatusesWithReplies} />
          <Route exact path='/accounts/:accountId/media' component={AccountGallery} />
          <Route exact path='/accounts/:accountId/pinned' component={AccountPinned} />
        </Switch>

        <Dashboard position='right'>
          <RecommendedAccounts />
        </Dashboard>
      </div>
    );
  }

}
