import { isAction } from 'redux';
import { SET_USER, CLEAR_USER } from '../reducers/user-reducer';
import { store } from '../store';

export function setGlobalUser(user) {
  store.dispatch({ action: SET_USER, payload: { user } });
}

export function clearGlobalUser() {
  store.dispatch({ action: CLEAR_USER });
}
