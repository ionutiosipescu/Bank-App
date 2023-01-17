import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const emailRules = /^[a-zA-Z0-9._%+-]+@(yahoo|gmail)\.com$/;

// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const advancedSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .matches(emailRules, { message: "Invalid email" })
    .required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Password does not match" })
    .required("Required"),
});
