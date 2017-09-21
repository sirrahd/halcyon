import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import reducer from './reducers';
import en from 'react-intl/locale-data/en';
import ja from 'react-intl/locale-data/ja';

// Locale Message File
addLocaleData([...en, ...ja]);
const lang = document.getElementById('root').dataset.lang;
const messages = require.context('./locales/', false, /\.json$/);
const messagesForLocale = locale => messages(`./${locale}.json`);

const store = createStore(
  combineReducers({
    reducer,
    routing: routerReducer,
  }),
);

/* Presentational Components */
import Home from './components/home';
import Local from './components/local';
import Federated from './components/federated';
import Notifications from './components/notifications';
import Search from './components/search';

// ナビゲーションイベントをstoreと同期させる拡張がされたhisyoryを作成
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={lang} messages={messagesForLocale(lang)}>
      <Router history={history}>
        <Route exact path="/" component={Home} />
        <Route path="/local" component={Local} />
        <Route path="/federated" component={Federated} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/search" component={Search} />
      </Router>
    </IntlProvider>
  </Provider>,
  document.getElementById('root'),
);
