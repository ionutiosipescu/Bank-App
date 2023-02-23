import { SAVINGS_HELPER_TYPES } from "./saving.types";

const INITIAL_STATE = {
  savingAction: "",
  savingObj: {
    details: "",
    transfer: "",
  },
  savingArr: [],
  savingData: {},
  showModal: false,
  isSubmiting: false,
  showMessage: false,
  errorMsg: "",
};

export const savingHelperReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVINGS_HELPER_TYPES.SET_SAVINGS_ACTION:
      return { ...state, savingAction: payload };
    case SAVINGS_HELPER_TYPES.RESET_SAVING:
      return INITIAL_STATE;
    case SAVINGS_HELPER_TYPES.SET_SAVINGS_FORM:
      return { ...state, savingObj: { ...payload } };
    case SAVINGS_HELPER_TYPES.SET_SAVINGS_ARR:
      return { ...state, savingArr: [...payload] };
    case SAVINGS_HELPER_TYPES.SET_SAVINGS_DATA:
      return {
        ...state,
        savingData: { ...payload },
      };
    case SAVINGS_HELPER_TYPES.SET_MODAL_SAVING:
      return {
        ...state,
        showModal: payload,
      };
    case SAVINGS_HELPER_TYPES.REQUEST_SAVING_START:
      return { ...state, isSubmiting: true };
    case SAVINGS_HELPER_TYPES.REQUEST_SAVING_SUCCESS:
      return { ...state, isSubmiting: false, showMessage: true, errorMsg: "" };
    case SAVINGS_HELPER_TYPES.REQUEST_SAVING_FAILED:
      return {
        ...state,
        isSubmiting: false,
        showMessage: true,
        errorMsg: payload,
      };
    case SAVINGS_HELPER_TYPES.RESET_SHOW_MSG:
      return {
        ...state,
        showMessage: false,
        errorMsg: "",
      };
    default:
      return state;
  }
};
