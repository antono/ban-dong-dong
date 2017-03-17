import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { routerReducer as routing, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

import currentUser from './reducers/current-user-reducer';
import ui from './reducers/ui';

const reducer = combineReducers({
  ui,
  currentUser,
  routing,
});

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const middleware = [
  routerMiddleware(browserHistory),
];

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(...middleware)
));

export default store;
