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

export const requests = {
  // loans
  GET_HISTORY_LOAN: `${requestGeneral.LOCAL}/loans/?id=`,
  POST_CREATE_NEW_LOAN: `${requestGeneral.LOCAL}/loans/loan/?id=`,
  POST_CHECK_NEW_LOAN: `${requestGeneral.LOCAL}/loans/check?id=`,
  POST_PAY_LOAN: `${requestGeneral.LOCAL}/loans/pay?id=`,
  //   exchange
  GET_HISTORY_EXCHANGE: `${requestGeneral.LOCAL}/exchanges/?id=`,
  POST_EXCHANGE: `${requestGeneral.LOCAL}/exchanges/exchange?id=`,
  //   deposit
  GET_HISTORY_DEPOSIT: `${requestGeneral.LOCAL}/accounts/deposit/balance/?id=`,
  POST_DEPOSIT: `${requestGeneral.LOCAL}/accounts/deposit/balance/?id=`,
  //   saving
  GET_HISTORY_SAVING: `${requestGeneral.LOCAL}/savings/?id=`,
  POST_CREATE_SAVING: `${requestGeneral.LOCAL}/savings/new/?id=`,
  PATCH_TOP_UP: `${requestGeneral.LOCAL}/savings/add?id=`,
  POST_WITHDRAW: `${requestGeneral.LOCAL}/savings/withdraw?id_account=`,
  //   transfer
  GET_HISTORY_TRANSFER: `${requestGeneral.LOCAL}/transfers/?id=`,
  POST_CREATE_TRANSFER: `${requestGeneral.LOCAL}/transfers/transfer/?id=`,
};
