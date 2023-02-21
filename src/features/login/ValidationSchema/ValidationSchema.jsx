import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username minimum is 3 characters long")
    .required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Password does not match" })
    .required("Required"),
});
