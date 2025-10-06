import { isAction } from 'redux';
import { SET_USER, CLEAR_USER } from '../reducers/user-reducer';
import { store } from '../store';

export function setGlobalUser(user) {
  user._id = user?.username;
  store.dispatch({ type: SET_USER, payload: { user } });
}

export function clearGlobalUser() {
  store.dispatch({ type: CLEAR_USER });
}
