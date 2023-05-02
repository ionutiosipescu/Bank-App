import { CARD_TYPES } from "./cards.types";
import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import { setCardArr, setAddCardArr } from "./cards.action";
import { requests, cardsComplete } from "../../../utils/requests/requests";
import { resetCardForm } from "./cards.action";
import axios from "axios";

// Get Card Account Arr
export const fetchGetCardAccountArr = (currentUserData, csrf) => {
  return async (dispatch) => {
    const { id } = currentUserData;
    const { data } = await axios.get(`${requests.GET_ACCOUNTS}${id}`, {
      headers: {
        "X-XSRF-TOKEN": csrf,
      },
    });
    console.log(data);
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
export const fetchAddNewAccount = (
  currentCardNew,
  currentUser,
  cardArr,
  csrf
) => {
  return async (dispatch) => {
    console.log(currentCardNew, currentUser, cardArr);
    const addNewData = await setDataAddNewAccount(currentCardNew, currentUser);
    const { data } = await axios.post(
      `${requests.POST_NEW_ACCOUNT}`,
      addNewData,
      {
        headers: {
          "X-XSRF-TOKEN": csrf,
        },
      }
    );
    console.log(data);
    await dispatch(setAddCardArr(cardArr, data));
    await dispatch(resetCardForm());
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
export const fetchEditCardPlan = (currentEditCard, cardArr, csrf) => {
  const { id, type_of_plan } = currentEditCard;
  return async (dispatch) => {
    const { data } = await axios.patch(
      `${requests.PATCH_EDIT_ACCOUNT_PLAN}${id}${cardsComplete.TYPE}${type_of_plan}`,
      {
        headers: {
          "X-XSRF-TOKEN": csrf,
        },
      }
    );
    const newArr = await updateEditArrCardPlan(cardArr, data);
    await dispatch(setCardArr(newArr));
  };
};

// Remove Card

export const filterRemoveArr = async (currentEditCard, cardArr) => {
  return cardArr.filter((object) => object.id !== currentEditCard.id);
};

export const fetchRemoveCard = (currentEditCard, cardArr, csrf) => {
  const { id } = currentEditCard;
  return async (dispatch) => {
    console.log(id);
    await axios.delete(`${requests.DELETE_ACCOUNT}${id}`, {
      headers: {
        "X-XSRF-TOKEN": csrf,
      },
    });
    const newArr = await filterRemoveArr(currentEditCard, cardArr);
    await dispatch(setCardArr(newArr));
  };
};
