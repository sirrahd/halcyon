import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'react-tooltip';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import { HotKeys } from 'react-hotkeys';
import { isMobile } from '../../is_mobile';
import { openModal } from '../../actions/modal';

import Topbar from '../topbar';
import ModalContaienr from './containers/modal_contaienr';

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

const keyMap = {
  new: 'n',
  back: 'backspace',
};

const mapDispatchToProps = (dispatch) => ({
  onOpenModal(type, props) {
    dispatch(openModal(type, props));
  },
});

@connect(null, mapDispatchToProps)
@withRouter
export default class App extends React.Component {

  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    onOpenModal: PropTypes.func.isRequired,
  }

  handleHotkeyOpenComposeFormModal = () => {
    this.props.onOpenModal('COMPOSE_FORM', {});
  }

  render() {

    const handlers = {
      new: this.handleHotkeyOpenComposeFormModal,
    };

    return (
      <HotKeys keyMap={keyMap} handlers={handlers} >
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

          <ModalContaienr />
          <Tooltip effect='solid' disable={isMobile(window.innerWidth)} />
        </div>
      </HotKeys>
    );
  }

}
