import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ja from 'react-intl/locale-data/ja';
import configureStore from '../store/configureStore';
import { hydrateStore } from '../actions/store';
import initialState from '../initial_state';

// import CommunityTimeline from '../features/community_timeline';
// import PublicTimeline from '../features/public_timeline';
// import SearchHashtag from '../features/search_hashtag';
// import SearchAccounts from '../features/search_accounts';
// import AccountTimeline from '../features/account_timeline';
// import AccountFavourites from '../features/account_favourites';
// import AccountFollowers from '../features/account_followers';
// import AccountFollowing from '../features/account_following';
// import AccountGallery from '../features/account_gallery';
// import AccountReblogs from '../features/account_reblogs';
// import AccountWithReplies from '../features/account_with_replies';
// import Notifications from '../features/notifications';

import HomeTimeline from '../features/home_timeline';
import CommunityTimeline from '../features/community_timeline/index';

import Login from '../features/login';
import NotFound from '../features/not_found';

addLocaleData([...en, ...ja]);
const messages = require.context('../locales/', false, /\.json$/);
const messagesForLocale = locale => messages(`./${locale}.json`);

const store = configureStore();
const hydrateAction = hydrateStore(initialState);
store.dispatch(hydrateAction);

console.log(initialState);

export default class Halcyon extends React.PureComponent {

  static propTypes = {
    locale: PropTypes.string.isRequired,
  }

  render() {
    const { locale } = this.props;

    // <Route exact path='/local' component={CommunityTimeline} />
    // <Route exact path='/federated' component={PublicTimeline} />

    // <Route exact path='/notifications' component={Notifications} />
    // <Route exact path='/login' component={Login} />

    // <Route path='/:acct(@[a-zA-Z0-9_]{1,30}@.+?\..+?)' component={AccountTimeline} />
    // <Route path='/:acct(@[a-zA-Z0-9_]{1,30}@.+?\..+?)/favourites' component={AccountFavourites} />
    // <Route path='/:acct(@[a-zA-Z0-9_]{1,30}@.+?\..+?)/followers' component={AccountFollowers} />
    // <Route path='/:acct(@[a-zA-Z0-9_]{1,30}@.+?\..+?)/following' component={AccountFollowing} />
    // <Route path='/:acct(@[a-zA-Z0-9_]{1,30}@.+?\..+?)/gallery' component={AccountGallery} />
    // <Route path='/:acct(@[a-zA-Z0-9_]{1,30}@.+?\..+?)/reblogs' component={AccountReblogs} />
    // <Route path='/:acct(@[a-zA-Z0-9_]{1,30}@.+?\..+?)/with_replies' component={AccountWithReplies} />

    // <Route exact path='/search/hashtag' component={SearchHashtag} />
    // <Route exact path='/search/accounts' component={SearchAccounts} />

    return (
      <IntlProvider locale={locale} messages={messagesForLocale(locale)}>
        <Provider store={store} >
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={HomeTimeline} />
              <Route exact path='/local' component={CommunityTimeline} />
              <Route path='/login' component={Login} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </IntlProvider>
    );
  }

}
