import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, IndexRoute, Route } from 'react-router-dom'

import configureStore from './store'

const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState)

import App from './components/app/App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path='' component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);