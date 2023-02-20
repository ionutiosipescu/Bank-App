import { combineReducers } from "redux";

import { registerReducer } from "./Auth/registerUser/registerUser.reducer";
import { loginReducer } from "./Auth/loginUser/loginUser.reducer";
import { registerHelperReducer } from "./Auth/registerhelper/registerhelper.reducer";
import { userDataReducer } from "./Dashboard/userData/userData.reducer";
import { loansDataReducer } from "./Dashboard/services/loan/loan.reducer";
import { transferHelperReducer } from "./Dashboard/services/transfer/transfer.reducer";
import { depositHelperReducer } from "./Dashboard/services/deposit/deposit.reducer";
import { savingHelperReducer } from "./Dashboard/services/saving/saving.reducer";
import { exchangeHelperReducer } from "./Dashboard/services/exchange/exchange.reducer";
import { cardReducer } from "./Dashboard/cards/cards.reducer";
import { changePasswordReducer } from "./Auth/changePassword/password.reducer";
import { settingsReducer } from "./Dashboard/settings/settings.reducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  registerHelper: registerHelperReducer,
  currentUser: userDataReducer,
  loansDataStorage: loansDataReducer,
  transferHelper: transferHelperReducer,
  depositHelper: depositHelperReducer,
  savingHelper: savingHelperReducer,
  exchangeHelper: exchangeHelperReducer,
  cardState: cardReducer,
  registerChangePassword: changePasswordReducer,
  settingsState: settingsReducer,
});
