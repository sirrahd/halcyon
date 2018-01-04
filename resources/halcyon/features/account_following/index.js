import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ImmutablePureComponent from 'react-immutable-pure-component';
import ImmutablePropTypes from 'react-immutable-proptypes';
// import { ScrollContainer } from 'react-router-scroll-4';
import {
  fetchAccount,
  fetchFollowing,
  expandFollowing,
} from '../../actions/accounts';

import ProfileCard from '../../containers/profile_card_container';
import LoadingIndicator from '../../components/loading_indicator';

const mapStateToProps = (state, props) => ({
  accountIds: state.getIn(['user_lists', 'following', props.match.params.accountId, 'items']),
  hasMore: !!state.getIn(['user_lists', 'following', props.match.params.accountId, 'next']),
});

@connect(mapStateToProps)
export default class AccountFollowing extends ImmutablePureComponent {

  static propTypes = {
    match: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
    accountIds: ImmutablePropTypes.list,
    hasMore: PropTypes.bool,
  };

  componentWillMount () {
    this.props.dispatch(fetchAccount(this.props.match.params.accountId));
    this.props.dispatch(fetchFollowing(this.props.match.params.accountId));
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.match.params.accountId !== this.props.match.params.accountId && nextProps.match.params.accountId) {
      this.props.dispatch(fetchAccount(nextProps.match.params.accountId));
      this.props.dispatch(fetchFollowing(nextProps.match.params.accountId));
    }
  }

  handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;

    if (scrollTop === scrollHeight - clientHeight && this.props.hasMore) {
      this.props.dispatch(expandFollowing(this.props.match.params.accountId));
    }
  }

  handleLoadMore = (e) => {
    e.preventDefault();
    this.props.dispatch(expandFollowing(this.props.match.params.accountId));
  }

  render() {
    const { accountIds, hasMore = true } = this.props;

    return (
      <div className='scrollable' onScroll={this.handleScroll}>
        <div className='accounts-list'>
          { accountIds && accountIds.map(id => <ProfileCard key={id} accountId={id} withNote withFollowButton />)}
          { (!accountIds || hasMore) && <LoadingIndicator /> }
        </div>
      </div>
    );
  }

}
