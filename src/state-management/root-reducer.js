import { combineReducers } from "redux";

import { registerReducer } from "./registerUser/registerUser.reducer";
import { loginReducer } from "./loginUser/loginUser.reducer";
import { stepReducer } from "./registerUser/step/stepredux";

export const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  step: stepReducer,
});
