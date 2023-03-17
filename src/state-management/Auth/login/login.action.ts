import { LOGIN_ACTION_TYPES, LoginData, EventObj } from "./login.types";
import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../../utils/helpers/reducer/reducer.utils";
// need refactor
import { setResetSingUp } from "../register/register.actions";
import { resetPassword } from "../changePassword/password.action";
import { resetCards } from "../../Dashboard/cards/cards.action";
import { resetSettings } from "../../Dashboard/settings/settings.action";
import { resetUser } from "../../Dashboard/userData/userData.action";
import { resetDeposit } from "../../Dashboard/services/deposit/deposit.action";
import { resetExchange } from "../../Dashboard/services/exchange/exchange.action";
import { resetLoans } from "../../Dashboard/services/loan/loan.action";
import { resetSaving } from "../../Dashboard/services/saving/saving.action";
import { resetTransfer } from "../../Dashboard/services/transfer/transfer.action";
import { resetDashboard } from "../../Dashboard/dashboard/dashboard.action";
import { ThunkDispatch, ThunkAction } from "redux-thunk";
import { RootState } from "../../store";
import { AnyAction } from "redux";
import { Action as ActionRedux, ActionCreator, Dispatch } from "redux";

export type SetOtp = ActionWithPayload<LOGIN_ACTION_TYPES.SET_OTP, string>;

export type ResetLogIn = Action<LOGIN_ACTION_TYPES.RESET_SIGNIN>;

export type SetEmailValidate = ActionWithPayload<
  LOGIN_ACTION_TYPES.SET_EMAIL_VALIDATE,
  string
>;

export type SetOtpError = ActionWithPayload<
  LOGIN_ACTION_TYPES.SET_OTP_ERROR,
  string
>;
export type SetModalIsOpen = ActionWithPayload<
  LOGIN_ACTION_TYPES.SET_MODAL_IS_OPEN,
  Boolean
>;

export type Setlogin = ActionWithPayload<
  LOGIN_ACTION_TYPES.SET_LOGIN_USER,
  LoginData
>;
export type SetResetShowMsg = Action<LOGIN_ACTION_TYPES.RESET_SHOW_MSG>;

export type SetResetFormLogInOtp = ActionWithPayload<
  LOGIN_ACTION_TYPES.SET_OTP,
  string
>;

export type ControlModalOtp = SetModalIsOpen | SetOtp;

// ^ Login Update Form
const updatelogin = (loginData: LoginData, e: EventObj) => {
  const { name, value } = e;
  return { ...loginData, [name]: value };
};

export const setLoginDataForm = (loginData: LoginData, e: EventObj) => {
  const loginDataObj = updatelogin(loginData, e);
  return setlogin(loginDataObj);
};

export const setlogin = withMatcher((loginDataObj: LoginData): Setlogin => {
  return createAction(LOGIN_ACTION_TYPES.SET_LOGIN_USER, loginDataObj);
});

// ^ Otp Update
export const setOtp = withMatcher((otp: string): SetOtp => {
  return createAction(LOGIN_ACTION_TYPES.SET_OTP, otp);
});

// ^ Otp Error
export const setOtpError = withMatcher(
  (error: string): SetOtpError =>
    createAction(LOGIN_ACTION_TYPES.SET_OTP_ERROR, error)
);

// ^ ResetLogin Redux
export const resetLogIn = withMatcher((): ResetLogIn => {
  return createAction(LOGIN_ACTION_TYPES.RESET_SIGNIN);
});

// ^ Control Modal Open/Close
export const setModalIsOpen = withMatcher(
  (boolean: Boolean): SetModalIsOpen => {
    return createAction(LOGIN_ACTION_TYPES.SET_MODAL_IS_OPEN, boolean);
  }
);

export const controlMoldalAsync = (boolean: Boolean): any => {
  return async (dispatch: Dispatch) => {
    if (boolean === false) {
      await dispatch(setOtp(""));
    }
    await dispatch(setModalIsOpen(boolean));
  };
};

// ^ Set Email
export const setEmailValidate = withMatcher(
  (email: string): SetEmailValidate => {
    return createAction(LOGIN_ACTION_TYPES.SET_EMAIL_VALIDATE, email);
  }
);

// ^Reset Show Message
export const setResetShowMsg = withMatcher((): SetResetShowMsg => {
  return createAction(LOGIN_ACTION_TYPES.RESET_SHOW_MSG);
});

// ^Reset Log In Form
export const setResetFormLogInOtp = withMatcher(
  (newOTP = ""): SetResetFormLogInOtp => {
    return createAction(LOGIN_ACTION_TYPES.SET_OTP, newOTP);
  }
);

// TODO de gasit metoda alternativa de a reseta Redux
export const resetRedux = () => {
  return async (dispatch: Dispatch) => {
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
    await dispatch(resetDashboard());
  };
};
