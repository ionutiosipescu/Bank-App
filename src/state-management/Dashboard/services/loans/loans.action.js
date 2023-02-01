import { createAction } from "../../../../utils/helpers/reducer/reducer.utils";
import { LOANS_DATA_TYPES } from "./loans.types";
import { getLocalDate } from "../../../../utils/helpers/helperFunctions/date";
import { findObjectByString } from "../../../../utils/helpers/helperFunctions/findObject";
import axios from "axios";

// Update Loans Form Data
const updateLoansData = (loansData, e) => {
  const { name, value } = e.target;
  return { ...loansData, [name]: value };
};

export const setLoansData = (loansData, e) => {
  const loansDataUpdated = updateLoansData(loansData, e);
  return createAction(LOANS_DATA_TYPES.SET_LOANS, loansDataUpdated);
};

// Update Loans Arr
export const setLoansArr = (loanObject, arr) => {
  const newLoansArr = [...arr, { ...loanObject }];
  return createAction(LOANS_DATA_TYPES.SET_LOANS_ARR, newLoansArr);
};

// update object request
export const setLoanData = async (loanObject) => {
  const { income, loan_amount, loan_purpose, loan_years } = loanObject;
  const loanDataRequest = {
    date: getLocalDate(),
    loan: loan_amount,
    details: loan_purpose,
    salary: income,
    years: loan_years,
  };
  console.log(loanDataRequest);
  return loanDataRequest;
};

// find id account ron
export const setLoansId = async (currentUserData) => {
  const account = "ron";
  const stringCompare = "currency";
  const userAccountArr = currentUserData.account;
  const object = findObjectByString(account, userAccountArr, stringCompare);
  return object.id;
};

// Get Arr from Db
export const getLoansArrDb = (currentUserData) => {
  return async (dispatch) => {
    const id = await setLoansId(currentUserData);
    const { data } = await axios.get(`http://localhost:8080/loans/?id=${id}`);
    await dispatch(setLoansArrDb(data.listAllLoans));
    await dispatch(updateHistoryLoans(data.listAllPays));
  };
};

// Set Arr from DB

export const setLoansArrDb = (loansArr) => {
  return createAction(LOANS_DATA_TYPES.SET_LOANS_ARR, loansArr);
};

// Async Loan
export const fetchLoanData = (loanObject, arr, currentUserData) => {
  return async (dispatch) => {
    await dispatch(setLoansArr(loanObject, arr));
    try {
      const loandData = await setLoanData(loanObject);
      const id = await setLoansId(currentUserData);
      console.log(loandData, id);
      const { data } = await axios.post(
        `http://localhost:8080/loans/check?id=${id}`,
        loandData
      );
      console.log(loandData, id, data);
      await dispatch(setCheckData(data));
    } catch (error) {
      console.log(error);
    }
  };
};

// Save Check data
export const setCheckData = (data) => {
  return createAction(LOANS_DATA_TYPES.SET_LOANS_CHECK_DATA, data);
};

export const fetchLoanCreate = (currentUserData, data) => {
  return async (dispatch) => {
    try {
      const id = await setLoansId(currentUserData);
      await axios
        .post(`http://localhost:8080/loans/loan/?id=${id}`, data)
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };
};

// Create Object For Asycn Pay Loan
const setPayLoan = async (data) => {
  const { date } = data;

  const dataUpdated = {
    date: date,
  };
  return dataUpdated;
};

// Update HistoryArrLoans
export const updateHistoryLoans = (history) => {
  return createAction(LOANS_DATA_TYPES.SET_LOANS_ARR_HISTORY, history);
};

// Update HistoryArrLoans when pay
export const updateHistoryLoansPay = (dataHistory, historyLoansArr) => {
  const history = dataHistory.data;
  console.log(history, historyLoansArr);
  return createAction(LOANS_DATA_TYPES.SET_LOANS_ARR_HISTORY, history);
};

// Update Loans totalPay
export const setLoansTotalPay = (data, arr) => {
  // const newArr = arr.filter((loan) => loan.id !== data.id);
  // const updateArr = [
  //   ...newArr,
  //   { ...data, total_paid: data.total_paid + data.rate },
  // ];
  console.log(data, arr);
  const updateArr = arr.map((item) => {
    if (item.id === data.id) {
      item.total_paid = item.total_paid + item.rate;
    }
    return item;
  });
  console.log(updateArr);
  return createAction(LOANS_DATA_TYPES.SET_LOANS_ARR, updateArr);
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
        `http://localhost:8080/loans/pay?id=${id}&account_id=${account_id}`,
        dataPayLoan
      );
      await dispatch(updateHistoryLoansPay(dataHistory, historyLoansArr));
    } catch (error) {
      console.log(error);
    }
  };
};
