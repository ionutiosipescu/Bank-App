export const requestGeneral = {
  //   general
  LOCAL: "http://localhost:8080",
};

export const loanComplete = {
  ACCOUNT_ID: `&account_id=`,
};

export const savingComplete = {
  VALUE: `&value=`,
  ID_ACCOUNT: `&id_account=`,
};

export const transferComplete = {
  EMAIL: `&email=`,
};

export const loginComplete = {
  EMAIL: `&email=`,
};

export const cardsComplete = {
  TYPE: `&type=`,
};

export const requests = {
  // AUTH

  // login
  POST_AUTHENTICATE_USER: `${requestGeneral.LOCAL}/bank/auth/signin`,
  POST_USER_DATA: `${requestGeneral.LOCAL}/user/`,
  POST_VERIFY_OTP: `${requestGeneral.LOCAL}/bank/auth/validate?otpnum=`,
  POST_RESEND_OTP: `${requestGeneral.LOCAL}/bank/auth/resend/otp?email=`,
  GET_GENERATE_CSRF: `${requestGeneral.LOCAL}/bank/auth/csrf`,
  // register
  POST_SEND_OTP_REGISTER: `${requestGeneral.LOCAL}/bank/auth/otp`,
  // password
  PUT_CHANGE_PASSWORD: `${requestGeneral.LOCAL}/user/edit/credentials`,

  // DASHBOARD

  // DASHBOARD_SERVICES
  // loans
  GET_HISTORY_LOAN: `${requestGeneral.LOCAL}/loans/?id=`,
  POST_CREATE_NEW_LOAN: `${requestGeneral.LOCAL}/loans/loan/?id=`,
  POST_CHECK_NEW_LOAN: `${requestGeneral.LOCAL}/loans/check?id=`,
  POST_PAY_LOAN: `${requestGeneral.LOCAL}/loans/pay?id=`,
  //   exchange
  GET_HISTORY_EXCHANGE: `${requestGeneral.LOCAL}/exchanges/?id=`,
  POST_EXCHANGE: `${requestGeneral.LOCAL}/exchanges/exchange?id=`,
  //   deposit
  GET_HISTORY_DEPOSIT: `${requestGeneral.LOCAL}/balance/?id=`,
  POST_DEPOSIT: `${requestGeneral.LOCAL}/balance/add/?id=`,
  //   saving
  GET_HISTORY_SAVING: `${requestGeneral.LOCAL}/savings/?id=`,
  POST_CREATE_SAVING: `${requestGeneral.LOCAL}/savings/new/?id=`,
  PATCH_TOP_UP: `${requestGeneral.LOCAL}/savings/add?id=`,
  POST_WITHDRAW: `${requestGeneral.LOCAL}/savings/withdraw?id_account=`,
  //   transfer
  GET_HISTORY_TRANSFER: `${requestGeneral.LOCAL}/transfers/?id=`,
  POST_CREATE_TRANSFER: `${requestGeneral.LOCAL}/transfers/transfer/?id=`,

  // DASHBOARD_SETTINGS
  PATCH_EDIT_PROFILE: `${requestGeneral.LOCAL}/user/edit?id=`,

  // DASHBOARD_CARDS
  GET_ACCOUNTS: `${requestGeneral.LOCAL}/accounts/?id=`,
  POST_NEW_ACCOUNT: `${requestGeneral.LOCAL}/accounts/account`,
  PATCH_EDIT_ACCOUNT_PLAN: `${requestGeneral.LOCAL}/accounts/edit?id=`,
  DELETE_ACCOUNT: `${requestGeneral.LOCAL}/accounts/delete?id=`,
};
