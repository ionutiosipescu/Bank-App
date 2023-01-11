import { combineReducers } from "redux";

import { registerReducer } from "./registerUser/registerUser.reducer";
import { loginReducer } from "./loginUser/loginUser.reducer";
import { registerHelperReducer } from "./registerhelper/registerhelper.reducer";
import { userDataReducer } from "./Dashboard/userData/userData.reducer";
import { registerErrorReducer } from "./registerhelper/registererror.reducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  registerHelper: registerHelperReducer,
  currentUser: userDataReducer,
  registerErrors: registerErrorReducer,
});
