import { CARD_TYPES } from "./cards.types";

const INITIAL_STATE = {
  cardDetails: {
    street: "",
    postal: "",
    city: "",
    phone: "",
    acceptAddress: false,
    typeOfPlan: null,
  },
  cardEdit: {
    typeOfPlan: null,
    errorMsg: "",
  },
};

export const cardReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CARD_TYPES.SET_CARD:
      return { ...state, cardDetails: { ...payload } };
    case CARD_TYPES.SET_CARD_EDIT:
      return { ...state, cardEdit: { ...payload } };
    case CARD_TYPES.SET_CARD_EDIT_ERROR:
      return { ...state, cardEdit: { ...payload } };
    default:
      return state;
  }
};
