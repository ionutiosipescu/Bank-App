import * as yup from "yup";

export const loansSchema = yup.object().shape({
  serie: yup
    .string()
    .min(3, "Username minimum is 3 characters long")
    .required("Required"),
});
