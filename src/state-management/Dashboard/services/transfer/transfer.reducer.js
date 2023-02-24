import { TRANSFER_TYPES } from "./transfer.types";

const INITIAL_STATE = {
  transferObj: {},
  transferForm: {
    email: "",
    name: "",
    transfer: "",
    details: "",
    account: "ron",
  },
  transferArr: [],
  detailTransfer: {},
  selectedOption: {
    account: "ron",
  },
  isSubmiting: false,
  showMessage: false,
  errorMsg: "",
};

export const transferReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case TRANSFER_TYPES.SET_ADD_TRANSFER:
      return { ...state, transferObj: { ...payload } };
    case TRANSFER_TYPES.SET_TRANSFER_FORM:
      return { ...state, transferForm: { ...payload } };
    case TRANSFER_TYPES.SET_TRANSFER_ARR:
      return { ...state, transferArr: [...payload] };
    case TRANSFER_TYPES.SET_DETAIL_TRANSFER:
      return { ...state, detailTransfer: { ...payload } };
    case TRANSFER_TYPES.SET_TRANSFER_OPTION:
      return { ...state, selectedOption: { ...payload } };

    case TRANSFER_TYPES.REQUEST_TRANSFER_START:
      return { ...state, isSubmiting: true };
    case TRANSFER_TYPES.REQUEST_TRANSFER_SUCCESS:
      return { ...state, isSubmiting: false, showMessage: true, errorMsg: "" };
    case TRANSFER_TYPES.REQUEST_TRANSFER_FAILED:
      return {
        ...state,
        isSubmiting: false,
        showMessage: true,
        errorMsg: payload,
      };
    case TRANSFER_TYPES.RESET_SHOW_MSG:
      return {
        ...state,
        showMessage: false,
        errorMsg: "",
      };
    case TRANSFER_TYPES.RESET_TRANSFER:
      return INITIAL_STATE;
    default:
      return state;
  }
};
