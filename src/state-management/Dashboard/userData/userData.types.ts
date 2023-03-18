import {
  ClearUserProfile,
  RegisterPlanArr,
} from "../../Auth/register/register.types";

export enum USER_DATA_TYPES {
  SET_CURRENT_USER = "SET_CURRENT_USER",
  RESET_USER = "RESET_USER",
}

export type UserData = {
  username: string;
  password: string;
  email: string;
  userDetail: ClearUserProfile;
  account: RegisterPlanArr;
};
