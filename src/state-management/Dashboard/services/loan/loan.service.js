import axios from "axios";
import {
  setLoansArrDb,
  updateHistoryLoans,
  setLoansArr,
  setLoanData,
  setLoansTotalPay,
  setLoansId,
  setCheckData,
  setPayLoan,
  updateHistoryLoansPay,
  setLoanStatus,
  setResetFormSaving,
} from "./loan.action";
import { loanComplete, requests } from "../../../../utils/requests/requests";
import { createAction } from "../../../../utils/helpers/reducer/reducer.utils";
import { LOANS_DATA_TYPES } from "./loan.types";

export const requestLoansStart = () =>
  createAction(LOANS_DATA_TYPES.REQUEST_LOANS_START);

export const requestLoansSuccess = () =>
  createAction(LOANS_DATA_TYPES.REQUEST_LOANS_SUCCESS);

export const requestLoansFailed = (error) =>
  createAction(LOANS_DATA_TYPES.REQUEST_LOANS_FAILED, error);

// Get Arr from Db
export const getLoansArrDb = (currentUserData) => {
  return async (dispatch) => {
    const id = await setLoansId(currentUserData);
    const { data } = await axios.get(`${requests.GET_HISTORY_LOAN}${id}`);
    await dispatch(setLoansArrDb(data.listAllLoans));
    await dispatch(updateHistoryLoans(data.listAllPays));
  };
};

// Async Loan Check
export const fetchLoanData = (loanObject, arr, currentUserData) => {
  return async (dispatch) => {
    try {
      await dispatch(requestLoansStart());
      const loandData = await setLoanData(loanObject);
      const id = await setLoansId(currentUserData);
      const { data } = await axios.post(
        `${requests.POST_CHECK_NEW_LOAN}${id}`,
        loandData
      );
      console.log(data);
      await dispatch(setCheckData(data));
      await dispatch(requestLoansSuccess());
      await dispatch(setLoanStatus("approved"));
      await dispatch(setResetFormSaving());
    } catch (err) {
      if (!err) return;
      const errMsg = err?.response?.data?.message;
      console.log(err);
      console.log(errMsg);
      const errServer =
        "Server is currently unavailable please try again later";
      switch (errMsg) {
        case "salary":
          await dispatch(setLoanStatus("salary"));
          break;
        case "limit":
          await dispatch(setLoanStatus("limit"));
          break;
        default:
          dispatch(requestLoansFailed(errServer));
          break;
      }
    }
  };
};

// Create Loan
export const fetchLoanCreate = (currentUserData, data) => {
  return async (dispatch) => {
    try {
      const id = await setLoansId(currentUserData);
      await axios
        .post(`${requests.POST_CREATE_NEW_LOAN}${id}`, data)
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };
};

// Async Pay Loan
export const fetchPayLoanAsync = (data, arr, historyLoansArr) => {
  return async (dispatch) => {
    const { account_id, id } = data;
    await dispatch(setLoansTotalPay(data, arr));
    try {
      const dataPayLoan = await setPayLoan(data);
      console.log(dataPayLoan, account_id, id);
      const dataHistory = await axios.post(
        `${requests.POST_PAY_LOAN}${id}${loanComplete.ACCOUNT_ID}${account_id}`,
        dataPayLoan
      );
      await dispatch(updateHistoryLoansPay(dataHistory, historyLoansArr));
    } catch (error) {
      console.log(error);
    }
  };
};
