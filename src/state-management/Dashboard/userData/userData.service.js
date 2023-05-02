import axios from "axios";
import { requests } from "../../../utils/requests/requests";
import { setCurrentUser } from "./userData.action";

export const fetchUserData = (id, token) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `${requests.POST_USER_DATA}${id}`,
        {},
        {
          headers: {
            Authorization: `${type} ${token}`,
          },
        }
      );
      await dispatch(setCurrentUser(data));
      console.log(data);
    } catch (err) {}
  };
};
