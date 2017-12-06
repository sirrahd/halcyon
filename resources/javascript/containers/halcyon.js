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
import App from '../features/app';


// import CommunityTimeline from '../community_timeline';
// import PublicTimeline from '../public_timeline';
// import SearchHashtag from '../search_hashtag';
// import SearchAccounts from '../search_accounts';
// import AccountTimeline from '../account_timeline';
// import AccountFavourites from '../account_favourites';
// import AccountFollowers from '../account_followers';
// import AccountFollowing from '../account_following';
// import AccountGallery from '../account_gallery';
// import AccountReblogs from '../account_reblogs';
// import AccountWithReplies from '../account_with_replies';
// import Notifications from '../notifications';

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

export default class Halcyon extends React.PureComponent {

  static propTypes = {
    locale: PropTypes.string.isRequired,
  }

  render() {
    const { locale } = this.props;

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
