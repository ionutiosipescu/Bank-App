import { combineReducers } from "redux";

import { registerReducer } from "./Auth/registerUser/registerUser.reducer";
import { loginReducer } from "./Auth/loginUser/loginUser.reducer";
import { registerHelperReducer } from "./Auth/registerhelper/registerhelper.reducer";
import { userDataReducer } from "./Dashboard/userData/userData.reducer";
import { loansDataReducer } from "./Dashboard/services/loans/loans.reducer";
import { transferHelperReducer } from "./Dashboard/services/transfersHelper/transferHelper.reducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  registerHelper: registerHelperReducer,
  currentUser: userDataReducer,
  loansDataStorage: loansDataReducer,
  transferHelper: transferHelperReducer,
});
