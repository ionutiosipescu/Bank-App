export const selectDepositAction = (state) => state.depositHelper.depositAction;
export const selectDepositForm = (state) => state.depositHelper.depositObj;
export const selectDepositArr = (state) => state.depositHelper.depositArr;
export const selectDepositFilter = (state) => state.depositHelper.filterAccount;
export const selectDepositOption = (state) =>
  state.depositHelper.selectedOption;
