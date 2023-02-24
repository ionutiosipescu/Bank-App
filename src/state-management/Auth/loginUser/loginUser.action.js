import { LOGIN_ACTION_TYPES } from "./loginUser.types";
import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
// need refactor
import { setResetSingUp } from "../registerhelper/registerhelper.actions";
import { resetPassword } from "../changePassword/password.action";
import { resetCards } from "../../Dashboard/cards/cards.action";
import { resetSettings } from "../../Dashboard/settings/settings.action";
import { resetUser } from "../../Dashboard/userData/userData.action";
import { resetDeposit } from "../../Dashboard/services/deposit/deposit.action";
import { resetExchange } from "../../Dashboard/services/exchange/exchange.action";
import { resetLoans } from "../../Dashboard/services/loan/loan.action";
import { resetSaving } from "../../Dashboard/services/saving/saving.action";
import { resetTransfer } from "../../Dashboard/services/transfer/transfer.action";

const updateLoginUser = (loginData, e) => {
  const { name, value } = e.target;
  return { ...loginData, [name]: value };
};

export const setLogInUser = (loginData, e) => {
  const loginUserData = updateLoginUser(loginData, e);
  return createAction(LOGIN_ACTION_TYPES.SET_LOGIN_USER, loginUserData);
};

export const setOtp = (otp) => {
  return createAction(LOGIN_ACTION_TYPES.SET_OTP, otp);
};

export const setOtpError = (error) =>
  createAction(LOGIN_ACTION_TYPES.SET_OTP_ERROR, error);

export const resetLogIn = () => {
  return createAction(LOGIN_ACTION_TYPES.RESET_SIGNIN);
};

export const setModalIsOpen = (boolean) => {
  return createAction(LOGIN_ACTION_TYPES.SET_MODAL_IS_OPEN, boolean);
};

export const controlMoldalAsync = (boolean) => {
  return async (dispatch) => {
    if (boolean === false) {
      await dispatch(setOtp(""));
    }
    await dispatch(setModalIsOpen(boolean));
  };
};

export const setEmailValidate = (email) => {
  return createAction(LOGIN_ACTION_TYPES.SET_EMAIL_VALIDATE, email);
};

// TODO de gasit metoda alternativa de a reseta Redux
export const resetRedux = () => {
  return async (dispatch) => {
    await dispatch(resetLogIn());
    await dispatch(setResetSingUp());
    await dispatch(resetPassword());
    await dispatch(resetCards());
    await dispatch(resetSettings());
    await dispatch(resetUser());
    await dispatch(resetDeposit());
    await dispatch(resetExchange());
    await dispatch(resetLoans());
    await dispatch(resetSaving());
    await dispatch(resetTransfer());
  };
};
