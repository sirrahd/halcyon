import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import { HotKeys } from 'react-hotkeys';
import { isMobile } from '../../is_mobile';
import { openModal } from '../../actions/modal';
import { verifyCredentials } from '../../actions/credentials';
import { fetchCustomEmojis } from '../../actions/custom_emojis';

import Topbar from '../topbar';

import {
  HomeTimeline,
  CommunityTimeline,
  PublicTimeline,
  HashtagTimeline,
  ListTimeline,
  AccountTimeline,
  AccountFollowers,
  AccountFollowing,
  NotFound,
} from './util/async-components';

import MobileTootButton from './components/mobile_toot_button';
import MessageContainer from '../../containers/message_container';
import ModalContaienr from '../app/containers/modal_contaienr';
import Tooltip from 'react-tooltip';

const keyMap = {
  new: 'n',
  back: 'backspace',
};

const mapDispatchToProps = dispatch => ({
  onUpdateState() {
    dispatch(verifyCredentials());
    dispatch(fetchCustomEmojis());
  },

  onOpenModal(type, props) {
    dispatch(openModal(type, props));
  },
});

@connect(null, mapDispatchToProps)
@withRouter
export default class App extends React.Component {

  static propTypes = {
    z: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    onOpenModal: PropTypes.func.isRequired,
    onUpdateState: PropTypes.func.isRequired,
    isModalOpened: PropTypes.bool,
  }

  static defaultProps = {
    isModalOpened: false,
  }

  componentWillMount () {
    this.props.onUpdateState();
  }

  handleHotkeyOpenComposeFormModal = e => {
    e.preventDefault();
    this.props.onOpenModal('COMPOSE_FORM', {});
  }

  render() {

    const handlers = {
      new: this.handleHotkeyOpenComposeFormModal,
    };

    return (
      <HotKeys keyMap={keyMap} handlers={handlers} >
        <div className='app'>
          <Topbar />
          <MessageContainer />

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

            {/*
            <Route exact path='/search/statuses' component={SearchStatuses} />
            <Route exact path='/search/accounts' component={SearchAccounts} />
            <Route exact path='/search/hashtags' component={SearchHashtags} />
            <Route exact path='/notifications' component={Notificaitons} />
            <Route exact path='/follow_requests' component={FollowRequests} />
            */}

            {/* <Route path='/:acct(@[a-zA-Z0-9_]{1,30}@.+?\..+?)/:page?' component={AcctToAccount} /> */}

            <Route component={NotFound} />
          </Switch>

          <MobileTootButton />
          <ModalContaienr />
          <Tooltip effect='solid' disable={isMobile(window.innerWidth)} />
        </div>
      </HotKeys>
    );
  }

}
