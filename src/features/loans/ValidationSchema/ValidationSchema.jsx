import * as yup from "yup";

export const loansSchema = yup.object().shape({
  serie: yup
    .string()
    .min(3, "Username minimum is 3 characters long")
    .required("Required"),
  loan_amount: yup.number().required("Required"),
  income: yup.number().required("Required"),
  cnp: yup.number().required("Required"),
  employee_status: yup
    .string()
    .oneOf(
      [
        "business",
        "self_employed",
        "government_job",
        "private_job",
        "student",
        "other",
      ],
      "Invalid Status"
    )
    .required("Required"),
  loan_purpose: yup
    .string()
    .oneOf(
      ["car", "house", "education", "travel", "investition", "business"],
      "Invalid Purpose"
    )
    .required("Required"),
  loan_years: yup
    .string()
    .oneOf(["3", "6", "10", "travel", "15", "25", "30"], "Invalid Period")
    .required("Required"),
  marital_status: yup
    .string()
    .oneOf(["single", "married", "divorced"], "Invalid Status")
    .required("Required"),
});
