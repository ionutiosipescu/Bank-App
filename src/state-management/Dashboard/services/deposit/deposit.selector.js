export const selectDeposit = (state) => state.depositHelper;
export const selectDepositAction = (state) => state.depositHelper.depositAction;
export const selectDepositForm = (state) => state.depositHelper.depositObj;
export const selectDepositArr = (state) => state.depositHelper.depositArr;
export const selectDepositOption = (state) =>
  state.depositHelper.selectedOption;

export const selectShowMessage = (state) => state.depositHelper.showMessage;
export const selectError = (state) => state.depositHelper.errorMsg;
export const selectIsSubmiting = (state) => state.depositHelper.isSubmiting;
