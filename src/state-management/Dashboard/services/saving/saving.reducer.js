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
    default:
      return state;
  }
};
