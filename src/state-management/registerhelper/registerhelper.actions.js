import { REGISTER_HELPER_TYPES } from "./registerhelper.types";
import { createAction } from "../../utils/helpers/reducer/reducer.utils";
import { getLocalStorage } from "../../utils/helpers/localStorage/getLocalStorage";

export const setStep = (step) => {
  return createAction(REGISTER_HELPER_TYPES.SET_STEP, step);
};

// nu il mai folosesc il pastrez ca ex

// export const fetchLocalStorageSuccess = (registerLocalStorage) =>
//   createAction(
//     REGISTER_HELPER_TYPES.FETCH_REGISTER_SUCCESS,
//     registerLocalStorage
//   );

// export const fetchLocalStorageFailed = (error) => {
//   createAction(REGISTER_HELPER_TYPES.FETCH_REGISTER_FAILED, error);
// };

// export const fetchRegisterLocalStorageAsync = () => {
//   return async (dispatch) => {
//     try {
//       const userProfileData = await getLocalStorage("persist:root");
//       dispatch(fetchLocalStorageSuccess(userProfileData));
//     } catch (error) {
//       dispatch(fetchLocalStorageFailed(error));
//     }
//   };
// };
