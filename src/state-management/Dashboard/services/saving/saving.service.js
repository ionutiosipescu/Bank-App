import {
  generateObjWithdraw,
  setSavingArrActions,
  setSavingArr,
  setSavingData,
  setSavingArrDb,
  setSavingsId,
  setResetFormSaving,
} from "./saving.action";
import axios from "axios";
import { requests, savingComplete } from "../../../../utils/Requests/requests";
import { updateTransferArr } from "./saving.action";
import { SAVINGS_HELPER_TYPES } from "./saving.types";
import { createAction } from "../../../../utils/helpers/reducer/reducer.utils";

export const requestSavingStart = () =>
  createAction(SAVINGS_HELPER_TYPES.REQUEST_SAVING_START);

export const requestSavingSuccess = () =>
  createAction(SAVINGS_HELPER_TYPES.REQUEST_SAVING_SUCCESS);

export const requestSavingFailed = (error) =>
  createAction(SAVINGS_HELPER_TYPES.REQUEST_SAVING_FAILED, error);

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
export const fetchSavingTopUp = (savingObj, transfer, arr) => {
  return async (dispatch) => {
    const { account_id, id } = savingObj;
    try {
      const { data } = await axios.patch(
        `${requests.PATCH_TOP_UP}${id}${savingComplete.VALUE}${transfer}${savingComplete.ID_ACCOUNT}${account_id}`
      );
      await dispatch(updateTransferArr(data));
    } catch (error) {
      console.log(error);
    }
  };
};

// Async Saving Post
export const fetchSavingData = (obj, arr, currentUserData) => {
  return async (dispatch) => {
    const savingData = await setSavingData(obj);
    console.log(savingData);
    const id = await setSavingsId(currentUserData);
    try {
      await dispatch(requestSavingStart());
      const { data } = await axios.post(
        `${requests.POST_CREATE_SAVING}${id}`,
        savingData
      );

      await dispatch(requestSavingSuccess());
      await dispatch(setResetFormSaving());
      await dispatch(setSavingArr(data, arr));
    } catch (err) {
      if (!err) return;
      const errMsg = err?.response?.data?.message;
      const errServer =
        "Server is currently unavailable please try again later";
      if (errMsg) {
        dispatch(requestSavingFailed(errMsg));
      } else {
        dispatch(requestSavingFailed(errServer));
      }
    }
  };
};

// Get Arr
export const getSavingArr = (currentUserData) => {
  return async (dispatch) => {
    try {
      const id = await setSavingsId(currentUserData);
      const { data } = await axios.get(`${requests.GET_HISTORY_SAVING}${id}`);
      if (!data) return;
      await dispatch(setSavingArrDb(data));
    } catch (err) {
      console.log(err);
    }
  };
};
