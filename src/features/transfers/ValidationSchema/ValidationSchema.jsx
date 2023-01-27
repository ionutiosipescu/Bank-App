import * as yup from "yup";

const emailRules = /^[a-zA-Z0-9._%+-]+@(yahoo|gmail)\.com$/;
// only yahoo and gmail ex format: @yahoo.com or @gmail.com

export const transferSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Display name must be at least 2 characters long")
    .max(120, "Display name is too long")
    .required("Required"),
  details: yup
    .string()
    .min(2, "Details must be at least 2 characters long")
    .max(120, "Details is too long")
    .required("Required"),
  email: yup
    .string()
    .email()
    .matches(emailRules, { message: "Invalid email" })
    .required("Required"),
  transfer: yup.number().required("Required"),
});
