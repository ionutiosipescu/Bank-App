import { createAction } from "../../../../utils/helpers/reducer/reducer.utils";
import { TRANSFER_HELPER_TYPES } from "./transferHelper.types";

export const setAddTransferAccount = (account) => {
  return createAction(TRANSFER_HELPER_TYPES.SET_ADD_TRANSFER, account);
};
