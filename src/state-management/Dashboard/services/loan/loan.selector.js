export const selectLoansData = (state) => state.loansDataStorage.loansData;
export const selectLoansArr = (state) => state.loansDataStorage.loansArr;
export const selectHistoryLoans = (state) =>
  state.loansDataStorage.loansHistory;
export const selectCheckedData = (state) =>
  state.loansDataStorage.loanCheckData;
