import { combineReducers } from "redux";

import { registerReducer } from "./registerUser/registerUser.reducer";

export const rootReducer = combineReducers({
  user: registerReducer,
});
