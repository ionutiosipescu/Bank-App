export const selectDeposit = (state) => state.depositStorage;
export const selectDepositAction = (state) =>
  state.depositStorage.depositAction;
export const selectDepositForm = (state) => state.depositStorage.depositObj;
export const selectDepositArr = (state) => state.depositStorage.depositArr;
export const selectDepositOption = (state) =>
  state.depositStorage.selectedOption;

export const selectShowMessage = (state) => state.depositStorage.showMessage;
export const selectError = (state) => state.depositStorage.errorMsg;
export const selectIsSubmiting = (state) => state.depositStorage.isSubmiting;
