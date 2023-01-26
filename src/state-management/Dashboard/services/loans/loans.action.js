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
export const setLoanData = (loanObject) => {
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
export const setExchangeId = async (currentUserData) => {
  const account = "ron";
  const stringCompare = "currency";
  const userAccountArr = currentUserData.account;
  const object = findObjectByString(account, userAccountArr, stringCompare);
  console.log(object.id);
  return object.id;
};

// Async Loan
export const fetchLoanData = (loanObject, arr, currentUserData) => {
  return async (dispatch) => {
    await dispatch(setLoansArr(loanObject, arr));
    try {
      const loandData = await dispatch(setLoanData(loanObject));
      const id = await dispatch(setExchangeId(currentUserData));
      // await axios
      //   .post(`http://localhost:8080/loans/loan${id}`, loandData)
      //   .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };
};
