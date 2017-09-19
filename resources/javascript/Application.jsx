import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

/* Presentational Components */
import Home from './containers/Home';
import Local from './containers/Local';
import Federated from './containers/Federated';
import Notifications from './containers/Notifications';
import Search from './containers/Search';

// import reducers from './reducers/index' // 仮置き

// `routing`キー内のstoreにreducerを追加
const store = createStore(
  combineReducers({
    // ...reducers,           // Array(reducers)の中にある連想配列を展開して
    routing: routerReducer, // ルーターと合体
  }),
);

// ナビゲーションイベントをstoreと同期させる拡張がされたhisyoryを作成
const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Home} />
      <Route path="/local" component={Local} />
      <Route path="/federated" component={Federated} />
      <Route path="/notifications" component={Notifications} />
      <Route path="/search" component={Search} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
