import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstname: yup
    .string()
    .min(2, "Username must be at least 2 characters long")
    .max(120, "Username is too long")
    .required("Required"),
  lastname: yup
    .string()
    .min(2, "Lastname must be at least 2 characters long")
    .max(120, "Lastname is too long")
    .required("Required"),
  country: yup
    .string()
    .oneOf(["romania", "italia", "spania", "germania"], "Invalid Country")
    .required("Required"),
  address: yup
    .string()
    .min(10, "Street, number, etc ...")
    .max(50, "Address is too long")
    .matches(/\d/, { message: "Invalid Address" }) // /\d/ require at least 1 number
    .required("Required"),
  age: yup
    .number()
    .positive()
    .integer()
    .min(18, "You are not old enough")
    .max(100, "Invalid age")
    .required("Required"),
  gender: yup.string().required("Required"),

  // date: yup.string().required("Required"),
});
