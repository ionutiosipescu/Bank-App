import { createAction } from "../../../../utils/helpers/reducer/reducer.utils";
import { LOANS_DATA_TYPES } from "./loan.types";
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

// Set Arr from DB

export const setLoansArrDb = (loansArr) => {
  return createAction(LOANS_DATA_TYPES.SET_LOANS_ARR, loansArr);
};

// Save Check data
export const setCheckData = (data) => {
  return createAction(LOANS_DATA_TYPES.SET_LOANS_CHECK_DATA, data);
};

// Create Object For Asycn Pay Loan
export const setPayLoan = async (data) => {
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
  const updateArr = arr.map((item) => {
    if (item.id === data.id) {
      item.total_paid = item.total_paid + item.rate;
    }
    return item;
  });
  console.log(updateArr);
  return createAction(LOANS_DATA_TYPES.SET_LOANS_ARR, updateArr);
};

export const resetLoans = () => {
  return createAction(LOANS_DATA_TYPES.RESET_LOANS);
};
