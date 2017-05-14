import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store'
import Routes from './routes'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

const store = configureStore()

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js')
  })
}

window.addEventListener('load', function() {
  console.log("adding event listeners")
  window.addEventListener('online',  function(event) {
    var condition = navigator.onLine ? "online" : "offline";
    console.log("Event: " + event.type + "; Status: " + condition);
  }, false);

  window.addEventListener('offline',  function(event) {
    var condition = navigator.onLine ? "online" : "offline";
    console.log("Event: " + event.type + "; Status: " + condition);
  }, false);
});

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
