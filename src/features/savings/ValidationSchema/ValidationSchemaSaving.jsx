import * as yup from "yup";

export const savingSchema = yup.object().shape({
  details: yup
    .string()
    .min(3, "Username minimum is 3 characters long")
    .required("Required"),
  transfer: yup
    .string()
    .min(2, "Invalid Transfer Amount, Min 10 Ron")
    .max(6, "Invalid Transfer Amount, Max 100.000 Ron")
    .required("Required"),
});
