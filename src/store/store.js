import { legacy_createStore, combineReducers, compose } from 'redux';
import { toyReducer } from './reducers/toy-reducer';

const rootReducer = combineReducers({
  toyModule: toyReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer, composeEnhancers());
