import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import captchaReducer from "./captchaReducer";

const rootReducer=combineReducers({
  errors: errorReducer,
  users: captchaReducer,
  });
export default rootReducer
