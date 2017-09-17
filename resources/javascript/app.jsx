import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import HomeComponent from './components/Home'

import reducers from './reducers/index' // 仮置き

// `routing`キー内のstoreにreducerを追加
const store = createStore(
  combineReducers({
    ...reducers,           // Array(reducers)の中にある連想配列を展開して
    routing: routerReducer // ルーターと合体
  })
)

// ナビゲーションイベントをstoreと同期させる拡張がされたhisyoryを作成
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Home} />
    </Router>
  </Provider>,
  document.getElementById('app')
)
