export enum REGISTER_TYPES {
  SET_STEP = "SET_STEP",
  SET_PLAN_DATA = "SET_PLAN_DATA",
  SET_USER_DATA = "SET_USER_DATA",
  POST_REGISTER_START = "POST_REGISTER_START",
  POST_REGISTER_SUCCESS = "POST_REGISTER_SUCCESS",
  POST_REGISTER_FAILED = "POST_REGISTER_FAILED",
  RESET_SIGNUP = "RESET_SIGNUP",
  SET_TOKEN = "SET_TOKEN",
  SET_REGISTER_USER = "SET_REGISTER_USER",
  SET_REGISTER_PLAN_ADD = "SET_REGISTER_PLAN_ADD",
  SET_REGISTER_ADITIONALS = "SET_REGISTER_ADITIONALS",
}

export type UserProfile = {
  firstname: string;
  lastname: string;
  country: string;
  address: string;
  date: string;
  gender: string;
  email: string;
  displayName: string;
  mobile: string;
  password: string;
  confirmPassword: string;
};
export type ClearUserProfile = {
  first_name: string;
  last_name: string;
  birthday: string;
  country: string;
  address: string;
  gender: string;
  mobile: string;
  confirmPassword: string;
  created_at: string;
};
export type PlanDataObj = {
  typeOfPlan: string;
  currency: string;
  namePlan: string;
  currentBallance: string;
};

export type PlanDataArr = PlanDataObj[];

export type RegisterData = {
  userDetail: {};
  account: RegisterPlanArr;
};

export type RegisterPlanObj = {
  type_of_plan: string;
  currency: string;
  created_at: string;
};

export type RegisterAditionals = {
  username: string;
  password: string;
  email: string;
};

export type RegisterPlanArr = RegisterPlanObj[] | [];

// token: "",
// userProfile: {
//   firstname: "",
//   lastname: "",
//   country: "",
//   address: "",
//   date: "",
//   gender: "",
//   email: "",
//   displayName: "",
//   mobile: "",
//   password: "",
//   confirmPassword: "",
// },
// planData: [
//   {
//     typeOfPlan: "",
//     currency: "ron",
//     namePlan: "Ron",
//     currentBallance: "",
//   },
// ],
// step: 0,
// isLoading: false,
// error: "",
// emailCode: "",
// registerData: {
//   userDetail: {},
//   account: [],
// },
