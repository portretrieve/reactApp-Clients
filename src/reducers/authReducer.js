import { SIGNED_IN, SIGNED_OUT } from "../actions/types";

const INITIAL_STATE = {
  signInStatus: null,
  userId: null
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNED_IN:
      return { ...state, signInStatus: true, userId: action.payload };
    case SIGNED_OUT:
      return { ...state, signInStatus: false, userId: null };
    default:
      return state;
  }
};
