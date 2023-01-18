import * as yup from "yup";

export const depositSchema = yup.object().shape({
  card_name: yup
    .string()
    .min(3, "Username minimum is 3 characters long")
    .required("Required"),
  card_number: yup
    .string()
    .min(16, "Invalid Card Number")
    .max(16, "Invalid Card Number")
    .required("Required"),
  exp_date: yup.date().required("Required").nullable(),
  cvc: yup.string().min(3, "Invalid CVC").required("Required"),
  amount: yup
    .string()
    .min(2, "Minimum 10 Ron")
    .max(5, "Maximum 10000 Ron")
    .required("Required"),
});

// card_number, card_name, exp_date, cvc, amount
