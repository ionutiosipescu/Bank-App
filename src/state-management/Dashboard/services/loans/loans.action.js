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
  console.log(object.id);
  return object.id;
};

// Get Arr from Db
export const getLoansArrDb = (currentUserData) => {
  return async (dispatch) => {
    const id = await setLoansId(currentUserData);
    const { data } = await axios.get(`http://localhost:8080/loans/?id=${id}`);
    dispatch(setLoansArrDb(data));
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
      await axios
        .post(`http://localhost:8080/loans/loan/?id=${id}`, loandData)
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

//Update HistoryArrLoans
export const updateHistoryLoans = (history) => {
  const historyArr = history.data;
  return createAction(LOANS_DATA_TYPES.SET_LOANS_ARR_HISTORY, historyArr);
};

// Update Loans totalPay
export const setLoansTotalPay = (data, arr) => {
  const newArr = arr.map((loan) => {
    if (loan.id === data.id) {
      return { ...data, total_paid: data.total_paid + data.rate };
    }
    return data;
  });
  return createAction(LOANS_DATA_TYPES.SET_LOANS_ARR, newArr);
};

// Async Pay Loan
export const fetchPayLoanAsync = (data, arr) => {
  return async (dispatch) => {
    const { account_id, id } = data;
    try {
      const dataPayLoan = await setPayLoan(data);
      const history = await axios.post(
        `http://localhost:8080/loans/pay?id=${id}&account_id=${account_id}`,
        dataPayLoan
      );
      await dispatch(updateHistoryLoans(history));
      await dispatch(setLoansTotalPay(data, arr));
    } catch (error) {
      console.log(error);
    }
  };
};
