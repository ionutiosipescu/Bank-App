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
};

export const cardReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CARD_TYPES.SET_CARD:
      return { ...state, cardDetails: { ...payload } };
    default:
      return state;
  }
};
