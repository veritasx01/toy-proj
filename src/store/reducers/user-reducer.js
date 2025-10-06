export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';

const initialState = {
  user: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload.user };
    case CLEAR_USER:
      return { ...state, user: {} };
    default:
      return state;
  }
};
