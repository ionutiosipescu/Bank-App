import * as yup from "yup";
import "yup-phone";

const phoneSchema = yup
  .string()
  .phone("RO", undefined, "Invalid Phone Number")
  .min(9, "Phone Number must be 10 characters")
  .max(11, "Invalid number")
  .required();

export const settingsSchema = yup.object().shape({
  first_name: yup
    .string()
    .min(2, "Username must be at least 2 characters long")
    .max(120, "Username is too long")
    .required("Required"),
  last_name: yup
    .string()
    .min(2, "Lastname must be at least 2 characters long")
    .max(120, "Lastname is too long")
    .required("Required"),
  address: yup
    .string()
    .min(10, "Street, number, etc ...")
    .max(50, "Address is too long")
    .matches(/\d/, { message: "Invalid Address" }) // /\d/ require at least 1 number
    .required("Required"),
  mobile: phoneSchema,
});
