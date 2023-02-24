export const selectExchangeData = (state) => state.exchangeStorage.exchangeData;
export const selectExchangeArr = (state) => state.exchangeStorage.exchangeArr;
export const selectExchangeOption = (state) =>
  state.exchangeStorage.selectedOption;

export const selectShowMessage = (state) => state.exchangeStorage.showMessage;
export const selectError = (state) => state.exchangeStorage.errorMsg;
export const selectIsSubmiting = (state) => state.exchangeStorage.isSubmiting;
