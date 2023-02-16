import { CARD_TYPES } from "./cards.types";
import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import { setCardArr, setAddCardArr } from "./cards.action";
import axios from "axios";

// Get Card Account Arr
export const fetchGetCardAccountArr = (currentUserData) => {
  return async (dispatch) => {
    const { id } = currentUserData;
    const { data } = await axios.get(
      `http://localhost:8080/accounts/?id=${id}`
    );
    await dispatch(setCardArr(data));
  };
};

// & NEW PAGE

// format Data Add new Account
export const setDataAddNewAccount = (currentCardNew, currentUser) => {
  const { created_at, currency, typeOfPlan } = currentCardNew;
  const { email, name } = currentUser;
  console.log(currentCardNew, currentUser);
  const addNewAccountData = {
    type_of_plan: typeOfPlan,
    savings: 0,
    currency: currency,
    created_at: created_at,
    user: {
      email: email,
      username: name,
    },
  };
  console.log(addNewAccountData);
  return addNewAccountData;
};

// Add new Account
export const fetchAddNewAccount = (currentCardNew, currentUser, cardArr) => {
  return async (dispatch) => {
    const addNewData = await setDataAddNewAccount(currentCardNew, currentUser);
    const { data } = await axios.post(
      `http://localhost:8080/accounts/account`,
      addNewData
    );
    await dispatch(setAddCardArr(cardArr, data));
  };
};

// & EDIT PAGE

// Edit Arr Card Plan
export const updateEditArrCardPlan = async (arr, data) => {
  console.log(arr, data.account);
  const { account } = data;
  const updateArr = arr.map((item) => {
    if (item.id === account.id) {
      return { ...item, type_of_plan: account.type_of_plan };
    }
    return item;
  });
  return updateArr;
};

// Edit Card Plan
export const fetchEditCardPlan = (currentEditCard, cardArr) => {
  const { id, type_of_plan } = currentEditCard;
  return async (dispatch) => {
    const { data } = await axios.patch(
      `http://localhost:8080/accounts/edit?id=${id}&type=${type_of_plan}`
    );
    const newArr = await updateEditArrCardPlan(cardArr, data);
    await dispatch(setCardArr(newArr));
  };
};

// Remove Card

export const filterRemoveArr = async (currentEditCard, cardArr) => {
  return cardArr.filter((object) => object.id !== currentEditCard.id);
};

export const fetchRemoveCard = (currentEditCard, cardArr) => {
  const { id } = currentEditCard;
  return async (dispatch) => {
    console.log(id);
    await axios.delete(`http://localhost:8080/accounts/delete?id=${id}`);
    const newArr = await filterRemoveArr(currentEditCard, cardArr);
    await dispatch(setCardArr(newArr));
  };
};
