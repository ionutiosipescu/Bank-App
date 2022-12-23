import { combineReducers } from "redux";

import { registerReducer } from "./registerUser/registerUser.reducer";
import { loginReducer } from "./loginUser/loginUser.reducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
});
