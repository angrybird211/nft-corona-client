import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { authReducer } from "./authReducer";
import { errorReducer } from "./errorReducer";

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  error: errorReducer
});

export default rootReducer;