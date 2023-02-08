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
  currentCardInfo: {},
  currentCardEdit: {},
  currentCardNew: {},
  cardArr: [],
};

export const cardReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CARD_TYPES.SET_CARD:
      return { ...state, cardDetails: { ...payload } };
    case CARD_TYPES.SET_CARD_EDIT_ERROR:
      return { ...state, currentCardEdit: { ...payload } };
    case CARD_TYPES.SET_CARD_CURRENT:
      return { ...state, currentCardInfo: { ...payload } };
    case CARD_TYPES.SET_CARD_CURRENT_EDIT:
      return { ...state, currentCardEdit: { ...payload } };
    case CARD_TYPES.SET_CARD_NEW:
      return { ...state, currentCardNew: { ...payload } };
    case CARD_TYPES.SET_CARD_ARR:
      return { ...state, cardArr: [...payload] };
    default:
      return state;
  }
};
