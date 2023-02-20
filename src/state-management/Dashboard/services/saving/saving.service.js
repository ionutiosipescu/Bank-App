import {
  generateObjWithdraw,
  setSavingArrActions,
  setSavingArr,
  setSavingData,
  setSavingArrDb,
  setSavingsId,
} from "./saving.action";
import axios from "axios";
import { requests, savingComplete } from "../../../../utils/Requests/requests";

// Async Saving Post Withdraw
export const fetchSavingWithdraw = (savingData, savingObj) => {
  return async (dispatch) => {
    const { account_id } = savingObj;
    try {
      const dataRequest = await generateObjWithdraw(savingObj);
      await axios
        .post(`${requests.POST_WITHDRAW}${account_id}`, dataRequest)
        .then((res) => console.log(res));
      await dispatch(setSavingArrActions(savingData, savingObj));
    } catch (error) {
      console.log(error);
    }
  };
};

// Async Saving Post Top-Up
export const fetchSavingTopUp = (savingData, savingObj) => {
  return async (dispatch) => {
    const { account_id, id, transfer } = savingObj;
    try {
      await axios
        .patch(
          `${requests.PATCH_TOP_UP}${id}${savingComplete.VALUE}${transfer}${savingComplete.ID_ACCOUNT}${account_id}`
        )
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };
};

// Async Saving Post
export const fetchSavingData = (obj, arr, currentUserData) => {
  return async (dispatch) => {
    await dispatch(setSavingArr(obj, arr));
    const savingData = await setSavingData(obj);
    const id = await setSavingsId(currentUserData);
    console.log(savingData);
    try {
      await axios
        .post(`${requests.POST_CREATE_SAVING}${id}`, savingData)
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };
};

// Get Arr
export const getSavingArr = (currentUserData) => {
  return async (dispatch) => {
    const id = await setSavingsId(currentUserData);
    console.log(id);
    const { data } = await axios.get(`${requests.GET_HISTORY_SAVING}${id}`);
    await dispatch(setSavingArrDb(data));
  };
};
