export const selectLoansData = (state) => state.loansDataStorage.loansData;
export const selectLoansArr = (state) => state.loansDataStorage.loansArr;
export const selectHistoryLoans = (state) =>
  state.loansDataStorage.loansHistory;
export const selectCheckedData = (state) =>
  state.loansDataStorage.loanCheckData;
export const selectLoanStatus = (state) => state.loansDataStorage.loanStatus;

export const selectShowMessage = (state) => state.loansDataStorage.showMessage;
export const selectError = (state) => state.loansDataStorage.errorMsg;
export const selectIsSubmiting = (state) => state.loansDataStorage.isSubmiting;
