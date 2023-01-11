import axios from "axios";
import { setCurrentUser } from "../Dashboard/userData/userData.action";
import { setIsSubmiting } from "./loginUser.action";
import { setErrorMessage } from "./loginUser.action";

// Async User Login
export const fetchLoginData = (url, registerData) => {
  return async (dispatch) => {
    try {
      // First request: login
      const {
        data: { tokenType, accessToken, id },
      } = await axios.post(url, registerData);
      console.log(tokenType, accessToken, id);

      // Use the token type and access token in the second request
      const { data } = await axios.post(
        `http://localhost:8080/user/${id}`,
        {},
        {
          headers: {
            Authorization: `${tokenType} ${accessToken}`,
          },
        }
      );
      if (!data) return;
      if (data === "ceva") {
        dispatch(setErrorMessage(data));
      }
      dispatch(setCurrentUser(data));
      dispatch(setIsSubmiting());
    } catch (error) {
      console.log(error);
    }
  };
};
