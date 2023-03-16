export enum CHANGE_PASSWORD_TYPES {
  SET_PASSWORD = "SET_PASSWORD",
  RESET_PASSWORD = "RESET_PASSWORD",
  REQUEST_PASSWORD_START = "REQUEST_PASSWORD_START",
  REQUEST_PASSWORD_SUCCESS = "REQUEST_PASSWORD_SUCCESS",
  REQUEST_PASSWORD_FAILED = "REQUEST_PASSWORD_FAILED",
  RESET_SHOW_MSG = "RESET_SHOW_MSG",
  SET_AUTH = "SET_AUTH",
}

export type DataObjProps = {
  password: string;
  confirmPassword: string;
};
export type AuthObjProps = {
  username: string;
  password: string;
};

export type EventObj = {
  name: string;
  value: string;
};

export type SetPasswordProps = {
  dataObj: DataObjProps;
  authData: AuthObjProps;
};

export type PasswordProps = {
  password: DataObjProps;
  e: EventObj;
};

export type UpdateAuthProps = {
  authData: AuthObjProps;
  e: EventObj;
};
