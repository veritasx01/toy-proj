import { legacy_createStore, combineReducers, compose } from 'redux';

const SET_TOYS = 'SET_TOYS';

const toyReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_TOYS:
      return { ...state, toys: action.payload.toys };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  toyModule: toyReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer, composeEnhancers());

export function setToys(toys) {
  store.dispatch({ type: SET_TOYS, payload: { toys } });
}
