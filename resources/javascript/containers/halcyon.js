import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import configureStore from '../store/configureStore';
import { hydrateStore } from '../actions/store';
import initialState from '../initial_state';
import AppContainer from '../features/app';
import Login from '../features/login';

import en from 'react-intl/locale-data/en';
import ja from 'react-intl/locale-data/ja';

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
              <Route path='/login' component={Login} />
              <Route path='/' component={AppContainer} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </IntlProvider>
    );
  }

}
