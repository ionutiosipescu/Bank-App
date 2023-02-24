export const selectTransfer = (state) => state.transferHelper;
export const selectTransferHelper = (state) => state.transferHelper.transferObj;
export const selectTransferForm = (state) => state.transferHelper.transferForm;
export const selectTransferArr = (state) => state.transferHelper.transferArr;
export const selectDetailTransfer = (state) =>
  state.transferHelper.detailTransfer;
export const selectOptionTransfer = (state) =>
  state.transferHelper.selectedOption;

export const selectShowMessage = (state) => state.transferHelper.showMessage;
export const selectError = (state) => state.transferHelper.errorMsg;
export const selectIsSubmiting = (state) => state.transferHelper.isSubmiting;
