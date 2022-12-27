import React, { useEffect } from "react";
import { RegisterFormPart } from "../../FormRegister/FormRegister.style";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setRegisterUser } from "../../../../state-management/registerUser/registerUser.action";
import { selectRegisterUser } from "../../../../state-management/registerUser/registerUser.selector";
import { registerSchema } from "../../ValidationSchema/ValidationSchema";
import CustomInput from "../../CustomInputsRegister/CustomInput";
import CustomSelect from "../../CustomInputsRegister/CustomSelect";
import FormikControl from "../../CustomInputsRegister/FormikControl";
import { options } from "../../CustomInputsRegister/CustomRadioInputGroup";
import RadioButtons from "../../CustomInputsRegister/CustomRadioInputGroup";

function PersonalForm() {
  const dispatch = useDispatch();
  const registerData = useSelector(selectRegisterUser);
  // const { firstname, lastname, country, address, age, gender } = registerData; // keep data after next and back button

  const setData = (e) => {
    dispatch(setRegisterUser(registerData, e));
  };

  const handleSubmit = (values) => {
    console.log(values);
    console.log(registerData);
  };
  useEffect(() => {
    console.log(registerData);
  }, [registerData]);

  const initialObject = {
    firstname: "",
    lastname: "",
    country: "",
    address: "",
    age: "",
    gender: "",
  };
  return (
    <>
      <Formik
        initialValues={{ ...initialObject }}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        <Form className="personal-form">
          <RegisterFormPart>
            <CustomInput
              label="Firstname"
              name="firstname"
              type="text"
              small
              placeholder="Enter your firstname"
              setData={setData}
              // value={firstname || ""}
            />
            <CustomInput
              label="Lastname"
              name="lastname"
              type="text"
              small
              placeholder="Enter your lastname"
              setData={setData}
            />
          </RegisterFormPart>
          <RegisterFormPart>
            <CustomSelect
              label="Country"
              name="country"
              placeholder="Select a country"
              small
              setData={setData}
            >
              <option value="">Select a country</option>
              <option value="romania">Romania</option>
              <option value="italia">Italia</option>
              <option value="spania">Spania</option>
              <option value="germania">Germania</option>
            </CustomSelect>
            <CustomInput
              label="Address"
              name="address"
              type="text"
              small
              placeholder="Enter your address"
              setData={setData}
            />
          </RegisterFormPart>
          <RegisterFormPart>
            <RadioButtons
              type="radio"
              // control="radio"
              label="Gender"
              name="gender"
              options={options}
              setData={setData}
            />
            <CustomInput
              label="Age"
              name="age"
              type="number"
              small
              placeholder="Enter your age"
              setData={setData}
            />
          </RegisterFormPart>

          <button type="submit">submit</button>
        </Form>
      </Formik>
    </>
  );
}

export default PersonalForm;

// const { userData, setUserData } = values;
// const { lastName, firstName, city, number, birthDate, gender } =
//   userData.userDataObj.userProfile;

// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setUserData({
//     ...userData,
//     userDataObj: {
//       ...userData.userDataObj,
//       userProfile: {
//         ...userData.userDataObj.userProfile,
//         [name]: value,
//       },
//     },
//   });
// };
// console.log(userData);

{
  /* <RegisterFormPart>
        <Input
          onChange={handleChange}
          type="text"
          label="First Name"
          small
          name="firstName"
          value={firstName || ""}
        />
        <Input
          onChange={handleChange}
          type="text"
          label="Last Name"
          small
          name="lastName"
          value={lastName || ""}
        />
      </RegisterFormPart>
      <RegisterFormPart>
        <Input
          onChange={handleChange}
          type="text"
          label="Address"
          small
          placeholder="City"
          value={city || ""}
          name="city"
        />
        <Input
          onChange={handleChange}
          type="text"
          small
          placeholder="Number, Suite, etc"
          value={number || ""}
          name="number"
        />
      </RegisterFormPart>
      <RegisterFormPart>
        <Input
          onChange={handleChange}
          type="text"
          label="Gender"
          small
          value={gender || ""}
          name="gender"
        />
        <Input
          onChange={handleChange}
          type="date"
          label="Birth Date"
          small
          value={birthDate || ""}
          name="birthDate"
        />
      </RegisterFormPart> */
}
