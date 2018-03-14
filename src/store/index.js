/**
 * Create the store with dynamic reducers
 */

import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from 'reducers';
import rootSaga from 'sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  const middlewares = [sagaMiddleware];

  if (process.env.NODE_ENV !== 'production') {
    /* eslint-disable global-require */
    const {createLogger} = require('redux-logger');

    middlewares.push(createLogger({collapsed: true}));
  }

  const enhancers = [applyMiddleware(...middlewares)];

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // injecting reducers can result in unwanted behavior when set to true
          // https://github.com/zalmoxisus/redux-devtools-extension/issues/326
          shouldHotReload: false,
        })
      : compose;
  /* eslint-enable */

  const store = createStore(
    rootReducer(),
    initialState,
    composeEnhancers(...enhancers),
  );

  sagaMiddleware.run(rootSaga);

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  // Reducer hot reloading
  // https://stackoverflow.com/questions/34243684/make-redux-reducers-and-other-non-components-hot-loadable
  // https://github.com/facebook/create-react-app/issues/2317
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer(store.injectedReducers));
    });
  }

  return store;
}
