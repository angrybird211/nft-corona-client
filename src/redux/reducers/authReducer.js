import { SET_CURRENT_USER } from "../action/types";

const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  isAdmin: {},
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(payload),
        isAdmin: payload.role === 'admin' ? true : false,
        avatar: payload.avatar,
        userName: payload.userName,
        id: payload.id
      };
    default:
      return state;
  }
}
