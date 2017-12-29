import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { fetchAccount } from '../../actions/accounts';
import { List as ImmutableList } from 'immutable';

import Page from '../app/components/page';
import Content from '../app/components/content';
import Dashborad from '../app/components/dashboard';
import AccountHeaderContainer from '../account/containers/account_header_container';
import AccountLetterheadContainer from '../account/containers/account_letterhead_container';

import Timeline from './components/timeline';
import Gallery from './components/gallery';
import WithReplies from './components/with_replies';
import Pinned from './components/pinned';

const mapStateToProps = (state, props) => ({
  statusIds: state.getIn(['timelines', `account:${props.params.accountId}`, 'items'], ImmutableList()),
  isLoading: state.getIn(['timelines', `account:${props.params.accountId}`, 'isLoading']),
  hasMore: !!state.getIn(['timelines', `account:${props.params.accountId}`, 'next']),
});

@connect(mapStateToProps)
export default class AccountTimeline extends ImmutablePureComponent {

  static propTypes = {
    params: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  componentWillMount () {
    this.props.dispatch(fetchAccount(this.props.params.accountId));
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.params.accountId !== this.props.params.accountId && nextProps.params.accountId) {
      this.props.dispatch(fetchAccount(nextProps.params.accountId));
    }
  }

  render() {
    return (
      <Page>
        <AccountHeaderContainer accountId={this.props.params.accountId} />

        <Content>
          <Dashborad position='left'>
            <AccountLetterheadContainer accountId={this.props.params.accountId} />
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
