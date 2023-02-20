import { TRANSFER_HELPER_TYPES } from "./transfer.types";

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
};

export const transferHelperReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case TRANSFER_HELPER_TYPES.SET_ADD_TRANSFER:
      return { ...state, transferObj: { ...payload } };
    case TRANSFER_HELPER_TYPES.SET_TRANSFER_FORM:
      return { ...state, transferForm: { ...payload } };
    case TRANSFER_HELPER_TYPES.SET_TRANSFER_ARR:
      return { ...state, transferArr: [...payload] };
    case TRANSFER_HELPER_TYPES.SET_DETAIL_TRANSFER:
      return { ...state, detailTransfer: { ...payload } };
    case TRANSFER_HELPER_TYPES.SET_TRANSFER_OPTION:
      return { ...state, selectedOption: { ...payload } };
    default:
      return state;
  }
};
