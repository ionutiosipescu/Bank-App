import { generateObjWithdraw } from "./saving.action";
import { setSavingArrActions } from "./saving.action";
import axios from "axios";

// Async Saving Post Withdraw
export const fetchSavingWithdraw = (savingData, savingObj) => {
  return async (dispatch) => {
    const { account_id } = savingObj;
    try {
      const dataRequest = await generateObjWithdraw(savingObj);
      await axios
        .post(
          `http://localhost:8080/savings/withdraw?id_account=${account_id}`,
          dataRequest
        )
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
          `http://localhost:8080/savings/add?id=${id}&value=${transfer}&id_account=${account_id}`
        )
        .then((res) => console.log(res));
      // await dispatch(setSavingArrActions(savingData, savingObj));
    } catch (error) {
      console.log(error);
    }
  };
};
