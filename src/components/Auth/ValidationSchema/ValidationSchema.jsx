import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const AuthSchema = yup.object().shape({
  username: yup
    .string()
    .required("Required")
    .min(2, "Display name must be at least 2 characters long")
    .max(120, "Display name is too long"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
});
