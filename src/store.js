import { createStore, applyMiddleware, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from './reducers';

const middleware = applyMiddleware(thunk, promise, logger);

const Store = createStore(
  RootReducer,
  compose(
    middleware,
    devTools({
      hostname: 'localhost',
      port: 5768,
    }),
  ),
);

export default Store;

// export default createStore(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
