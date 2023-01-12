import axios from "axios";
// import { setCurrentUser } from "../Dashboard/userData/userData.action";
import { setCurrentUser } from "../../Dashboard/userData/userData.action";
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
      dispatch(setCurrentUser(data));
      dispatch(setIsSubmiting());
    } catch (error) {
      const errMsg = error.response.data.message;
      dispatch(setErrorMessage(errMsg));
      console.log(error.response.data.message);
    }
  };
};
