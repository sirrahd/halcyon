import React from 'react';
import Tooltip from 'react-tooltip';
import { Route, Switch, Redirect } from 'react-router';
import { isMobile } from '../../is_mobile';
import Topbar from '../topbar';
import ModalRoot from './components/modal_root';

import HomeTimeline from '../home_timeline';
import CommunityTimeline from '../community_timeline';
import PublicTimeline from '../public_timeline';
import HashtagTimeline from '../hashtag_timeline';
import ListTimeline from '../list_timeline';

import AccountTimeline from '../account_timeline';
import AccountFollowers from '../account_followers';
import AccountFollowing from '../account_following';
import AccountGallery from '../account_gallery';
import AccountWithReplies from '../account_with_replies';
import AccountFavourites from '../account_favourites';
import AccountPinned from '../account_pinned';
import AccountSearch from '../account_search';

import Notifications from '../notifications';
import NotFound from '../not_found';

export default class App extends React.Component {

  render() {
    return (
      <div className='app-container'>
        <Topbar />

        <Switch>
          <Redirect exact from='/' to='/timelines/home' />
          <Route exact path='/timelines/home' component={HomeTimeline} />
          <Route exact path='/timelines/public' component={PublicTimeline} />
          <Route exact path='/timelines/public/local' component={CommunityTimeline} />
          <Route exact path='/timelines/tag/:id' component={HashtagTimeline} />
          <Route exact path='/timelines/list/:id' component={ListTimeline} />

          <Route exact path='/accounts/:accountId' component={AccountTimeline} />
          <Route exact path='/accounts/:accountId/followers' component={AccountFollowers} />
          <Route exact path='/accounts/:accountId/following' component={AccountFollowing} />
          <Route exact path='/accounts/:accountId/media' component={AccountGallery} />
          <Route exact path='/accounts/:accountId/with_replies' component={AccountWithReplies} />
          <Route exact path='/accounts/:accountId/pinned' component={AccountPinned} />
          <Route exact path='/accounts/search/:query' component={AccountSearch} />

          <Route exact path='/notifications' component={AccountFavourites} />
          <Route exact path='/follow_requests' component={Notifications} />
          <Route component={NotFound} />
        </Switch>

        <Tooltip effect='solid' disable={!!isMobile(window.innerWidth)} />
        <ModalRoot />
      </div>
    );
  }

}
