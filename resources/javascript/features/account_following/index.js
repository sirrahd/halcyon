import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAccount } from '../../actions/accounts';
import { refreshAccountTimeline } from '../../actions/timelines';
import { List as ImmutableList } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Page from '../app/components/page';
import Content from '../app/components/content';
import Dashborad from '../app/components/dashboard';
import AccountHeaderContainer from '../account/containers/account_header_container';
import AccountLetterheadContainer from '../account/containers/account_letterhead_container';

const mapStateToProps = (state, props) => ({
  statusIds: state.getIn(['timelines', `account:${props.match.params.accountId}`, 'items'], ImmutableList()),
  isLoading: state.getIn(['timelines', `account:${props.match.params.accountId}`, 'isLoading']),
  hasMore: !!state.getIn(['timelines', `account:${props.match.params.accountId}`, 'next']),
});

@connect(mapStateToProps)
export default class AccountFollowing extends React.PureComponent {

  static propTypes = {
    match: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    statusIds: ImmutablePropTypes.list,
    isLoading: PropTypes.bool,
    hasMore: PropTypes.bool,
  };

  componentWillMount () {
    this.props.dispatch(fetchAccount(this.props.match.params.accountId));
    this.props.dispatch(refreshAccountTimeline(this.props.match.params.accountId));
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.match.params.accountId !== this.props.match.params.accountId && nextProps.match.params.accountId) {
      this.props.dispatch(fetchAccount(nextProps.match.params.accountId));
      this.props.dispatch(refreshAccountTimeline(nextProps.match.params.accountId));
    }
  }

  render() {
    return (
      <Page>
        <AccountHeaderContainer accountId={this.props.match.params.accountId} />

        <Content>
          <Dashborad position='left'>
            <AccountLetterheadContainer accountId={this.props.match.params.accountId} />
          </Dashborad>

          <Dashborad position='right' />
        </Content>
      </Page>
    );
  }

}
