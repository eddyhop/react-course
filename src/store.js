import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import persistState from 'redux-localstorage'
import { fromJS, Map } from 'immutable'

import rootReducer from './reducers'
import rootSaga from './sagas'

import { windowReload } from './actions/window'
import { clientOnline, clientOffline } from './actions/client'

const immutableStoreConfig = {
  slicer: paths => state => (paths ? state.filter((v, k) => paths.indexOf(k) > -1) : state),
  serialize: subset => JSON.stringify(subset.toJS()),
  deserialize: serializedData => fromJS(JSON.parse(serializedData)),
  merge: (initialState, persistedState) => new Map(initialState).mergeDeep(persistedState)
}

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const createStoreWithMiddleware = applyMiddleware(thunk, sagaMiddleware)(createStore)

  const createPersistentStore = compose(
    persistState(['auth'], immutableStoreConfig)
  )(createStoreWithMiddleware)

  const store = createPersistentStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  sagaMiddleware.run(rootSaga)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  /**
   * Creates an action on every window reload to reset 'loading' variables etc.
   */
  window.onbeforeunload = function (e) {
    store.dispatch(windowReload())
  }

  /**
   * Creates an action when the local fetch failes aka. user is offline/online
   */
  window.asdf = setInterval(() => {
    fetch('index.html') // name could be actuallyy anything, it doesn't fail if the resource doesn't exist eh
    .then(res => {
      if (store.getState().getIn(['client', 'online']) === false) {
        store.dispatch(clientOnline())
      }
    })
    .catch(err => {
      if (store.getState().getIn(['client', 'online']) === true) {
        store.dispatch(clientOffline())
      }
    })
  }, 5000)

  return store
}

export default configureStore