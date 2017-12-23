import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import api from '../../api/mastodon';

import AccountTimeline from '../account_timeline';
import AccountFollowers from '../account_followers';
import AccountFollowing from '../account_following';
import AccountGallery from '../account_gallery';
import AccountWithReplies from '../account_with_replies';
import AccountFavourites from '../account_favourites';
import AccountPinned from '../account_pinned';

const mapStateToProps = ( state, { match } ) => ({
  accountId: () => (api(() => state).get(`/api/v1/accounts/search?q=${match.params.acct.substr(1)}`).then(response => {
    return response.data[0].id;
  }).catch(() => {
    return null;
  })),
});

@connect(mapStateToProps)
export default class AcctToAccount extends React.PureComponent {

  static propTypes = {
    accountId: PropTypes.string,
    match: PropTypes.object,
  }

  render() {
    const { accountId } = this.props;

    if ( typeof accountId !== 'string' ) {
      return null;
    }

    const match = { params: { accountId: accountId } };

    switch(this.props.match.params.page) {
    case 'followers':
      return <AccountFollowers match={match} />;
    case 'following':
      return <AccountFollowing match={match} />;
    case 'media':
      return <AccountGallery match={match} />;
    case 'with_replies':
      return <AccountWithReplies match={match} />;
    case 'favourites':
      return <AccountFavourites match={match} />;
    case 'pinned':
      return <AccountPinned match={match} />;
    default:
      return <AccountTimeline match={match} />;
    }
  }

}
