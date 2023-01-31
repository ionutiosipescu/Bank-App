import { combineReducers } from "redux";

import { registerReducer } from "./Auth/registerUser/registerUser.reducer";
import { loginReducer } from "./Auth/loginUser/loginUser.reducer";
import { registerHelperReducer } from "./Auth/registerhelper/registerhelper.reducer";
import { userDataReducer } from "./Dashboard/userData/userData.reducer";
import { loansDataReducer } from "./Dashboard/services/loans/loans.reducer";
import { transferHelperReducer } from "./Dashboard/services/helpers/transfersHelper/transferHelper.reducer";
import { depositHelperReducer } from "./Dashboard/services/helpers/depositsHelper/depositsHelper.reducer";
import { savingHelperReducer } from "./Dashboard/services/helpers/savingsHelper/savingsHelper.reducer";
import { exchangeHelperReducer } from "./Dashboard/services/helpers/exchangeHelper/exchangeHelper.reducer";
import { cardReducer } from "./Dashboard/cards/cards.reducer";

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
});
