import { RootState } from "../../store";
import { createSelector } from "reselect";
import { RegisterState } from "./register.reducer";

export const selectRegisterState = (state: RootState): RegisterState =>
  state.register;

export const selectStep = createSelector(
  selectRegisterState,
  (state) => state.step
);
export const selectPlan = createSelector(
  selectRegisterState,
  (state) => state.planData
);
export const selectPlanObject = createSelector(
  selectRegisterState,
  (state) => state.planData[0]
);
export const selectRegisterUser = createSelector(
  selectRegisterState,
  (state) => state.userProfile
);
export const selectRegisterFailed = createSelector(
  selectRegisterState,
  (state) => state.error
);
export const selectIsLoading = createSelector(
  selectRegisterState,
  (state) => state.isLoading
);
export const selectEmailCode = createSelector(
  selectRegisterState,
  (state) => state.emailCode
);
export const selectToken = createSelector(
  selectRegisterState,
  (state) => state.token
);
export const selectRegisterData = createSelector(
  selectRegisterState,
  (state) => state.registerData
);
export const selectRegisterPlan = createSelector(
  selectRegisterState,
  (state) => state.registerData.account
);
export const selectRegisterUserFinal = createSelector(
  selectRegisterState,
  (state) => state.registerData.userDetail
);
