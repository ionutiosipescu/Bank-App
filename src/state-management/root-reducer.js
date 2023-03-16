import { combineReducers } from "redux";

import { loginReducer } from "./Auth/login/login.reducer";
import { registerReducer } from "./Auth/register/register.reducer";
import { userDataReducer } from "./Dashboard/userData/userData.reducer";
import { loansDataReducer } from "./Dashboard/services/loan/loan.reducer";
import { transferReducer } from "./Dashboard/services/transfer/transfer.reducer";
import { depositReducer } from "./Dashboard/services/deposit/deposit.reducer";
import { savingReducer } from "./Dashboard/services/saving/saving.reducer";
import { exchangeReducer } from "./Dashboard/services/exchange/exchange.reducer";
import { cardReducer } from "./Dashboard/cards/cards.reducer";
import { changePasswordReducer } from "./Auth/changePassword/password.reducer";
import { settingsReducer } from "./Dashboard/settings/settings.reducer";
import { dashboardReducer } from "./Dashboard/dashboard/dashboard.reducer";

export const rootReducer = combineReducers({
  // login: loginReducer,
  // register: registerReducer,
  // loansDataStorage: loansDataReducer,
  // transferStorage: transferReducer,
  // depositStorage: depositReducer,
  // savingStorage: savingReducer,
  // exchangeStorage: exchangeReducer,
  // cardState: cardReducer,
  // settingsState: settingsReducer,
  // dashboardStorage: dashboardReducer,
  currentUser: userDataReducer,
  registerChangePassword: changePasswordReducer,
});
