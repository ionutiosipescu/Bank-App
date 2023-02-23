export const selectExchangeData = (state) => state.exchangeHelper.exchangeData;
export const selectExchangeArr = (state) => state.exchangeHelper.exchangeArr;
export const selectExchangeOption = (state) =>
  state.exchangeHelper.selectedOption;

export const selectShowMessage = (state) => state.exchangeHelper.showMessage;
export const selectError = (state) => state.exchangeHelper.errorMsg;
export const selectIsSubmiting = (state) => state.exchangeHelper.isSubmiting;
