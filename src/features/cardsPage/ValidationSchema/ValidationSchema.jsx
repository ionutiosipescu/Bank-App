import * as yup from "yup";
import "yup-phone";

const phoneSchema = yup
  .string()
  .phone("RO", undefined, "Invalid Phone Number")
  .min(9, "Phone Number must be 10 characters")
  .max(11, "Invalid number")
  .required();

export const cardSchema = yup.object().shape({
  street: yup
    .string()
    .min(10, "Street, number, etc ...")
    .max(50, "Address is too long")
    .matches(/\d/, { message: "Invalid Address" }) // /\d/ require at least 1 number
    .required("Required"),
  postal: yup
    .string()
    .min(7, "Invalid Postal Code")
    .max(7, "Invalid Postal Code")
    .required("Required"),
  city: yup
    .string()
    .min(2, "Invalid City")
    .max(120, "Invalid City")
    .required("Required"),
  phone: phoneSchema,
  acceptAddress: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service")
    .required("Required"),
});
