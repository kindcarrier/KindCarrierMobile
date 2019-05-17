import { AsyncStorage, Platform } from 'react-native'
import { applyMiddleware, createStore, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const persistConfig = {
  key: 'store',
  storage: AsyncStorage,
  whitelist: ['user'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

let composeEnhancers = compose
// if (__DEV__) {
//   composeEnhancers = ((window || {}).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
//     require('remote-redux-devtools').composeWithDevTools)({
//     name: Platform.OS,
//     ...require('../package.json').remotedev,
//   })
// }

export default () => {
  const sagaMiddleware = createSagaMiddleware()
  let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
  let persistor = persistStore(store)
  sagaMiddleware.run(rootSaga)
  return { store, persistor }
}
