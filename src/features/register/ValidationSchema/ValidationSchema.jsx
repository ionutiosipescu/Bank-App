import * as yup from "yup";
import "yup-phone";

// Personal Form
export const registerSchemaPersonal = yup.object().shape({
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
  date: yup
    .date()
    .required("Date of birth is required")
    .test("date", "You must be at least 18 years old", function (value) {
      let today = new Date();
      let birthDate = new Date(value);
      let age = today.getFullYear() - birthDate.getFullYear();
      let month = today.getMonth() - birthDate.getMonth();

      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      return age >= 18;
    }),
  gender: yup.string().required("Required"),
});

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const phoneSchema = yup
  .string()
  .phone("RO", undefined, "Invalid Phone Number")
  .min(9, "Phone Number must be 10 characters")
  .max(11, "Invalid number")
  .required();

const emailRules = /^[a-zA-Z0-9._%+-]+@(yahoo|gmail)\.com$/;
// only yahoo and gmail ex format: @yahoo.com or @gmail.com

// Account Form
export const registerSchemaAccount = yup.object().shape({
  displayName: yup
    .string()
    .min(2, "Display name must be at least 2 characters long")
    .max(120, "Display name is too long")
    .required("Required"),
  email: yup
    .string()
    .email()
    .matches(emailRules, { message: "Invalid email" })
    .required("Required"),
  mobile: phoneSchema,
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

// Confiramation Form
export const registerShemaConfirmation = yup.object().shape({
  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service")
    .required("Required"),
  acceptedPlan: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service")
    .required("Required"),
});
