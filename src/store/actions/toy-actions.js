import { store } from "../store";
import { SET_TOYS } from "../reducers/toy-reducer";

export function setToys(toys) {
  store.dispatch({ type: SET_TOYS, payload: { toys } });
}
