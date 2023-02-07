import { getLocalDate } from "./date";

const currencies = [
  {
    currency: "ron",
    balance: 0,
    created_at: getLocalDate(),
    typeOfPlan: "",
  },
  {
    currency: "euro",
    balance: 0,
    created_at: getLocalDate(),
    typeOfPlan: "",
  },
];

export const filterCards = (cards) => {
  const usedCurrencies = cards.map((card) => card.currency);
  return currencies.filter(
    (currency) => !usedCurrencies.includes(currency.currency)
  );
};
export default filterCards;
