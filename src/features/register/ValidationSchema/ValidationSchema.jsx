import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstname: yup
    .string()
    .min(2, "Username must be at least 2 characters long")
    .required("Required"),
  lastname: yup
    .string()
    .min(2, "Username must be at least 2 characters long")
    .required("Required"),
  country: yup
    .string()
    .oneOf(["romania", "italia", "spania", "germania"], "Invalid Country")
    .required("Required"),
  address: yup.string().min(20, "Street, number, etc ...").required("Required"),
  age: yup
    .number()
    .positive()
    .integer()
    .min(18, "You are not old enough")
    .required("Required"),
  gender: yup.string().required("Required"),

  // date: yup.string().required("Required"),
});
