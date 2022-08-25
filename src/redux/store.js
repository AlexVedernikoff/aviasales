import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import loaderReducer from './reducers/loader/loaderReducer';
import errorReducer from './reducers/error/errorReducer';
import ticketsReducer from './reducers/tickets/ticketsReducer';

const reducers = combineReducers({
    loaderReducer,
    errorReducer,
    ticketsReducer,
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
      : compose;


const store = createStore(reducers, 
    composeEnhancers(applyMiddleware(
        thunk
    )));


export default store;