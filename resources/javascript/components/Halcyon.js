import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import configureStore from '../store/configureStore';

import Home from '../pages/Home';
import Local from '../pages/Local';
import Federated from '../pages/Federated';
import Notifications from '../pages/Notifications';
import Search from '../pages/Search';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';

import en from 'react-intl/locale-data/en';
import ja from 'react-intl/locale-data/ja';

addLocaleData([...en, ...ja]);
const messages = require.context('../locales/', false, /\.json$/);
const messagesForLocale = locale => messages(`./${locale}.json`);

const store = configureStore();

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
              <Route exact path="/" component={Home} />
              <Route exact path="/local" component={Local} />
              <Route exact path="/federated" component={Federated} />
              <Route exact path="/notifications" component={Notifications} />
              <Route path="/:acct(@[a-zA-Z0-9_]{1,30}@.+?\..+?)" component={Profile} />
              <Route path="/search/:filter?" component={Search} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </IntlProvider>
    );
  }
}
