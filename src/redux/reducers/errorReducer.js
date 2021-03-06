import { GET_ERRORS } from "../action/types";

const initialState = {};

export const errorReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ERRORS:
      return payload;
    default:
      return state;
  }
}