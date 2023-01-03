import React, { useEffect } from "react";
import { RegisterFormPart } from "../../FormRegister/FormRegister.style";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectRegisterUser } from "../../../../state-management/registerUser/registerUser.selector";
import { setRegisterUser } from "../../../../state-management/registerUser/registerUser.action";
import CustomInput from "../../../../components/CustomInputs/CustomInput";
import { registerSchemaAccount } from "../../ValidationSchema/ValidationSchema";
import NextBtn from "../../../../components/StepButtons/NextBtn";
import PrevBtn from "../../../../components/StepButtons/PrevBtn";

function AccountForm() {
  const dispatch = useDispatch();
  const registerData = useSelector(selectRegisterUser);

  const setData = (e) => {
    dispatch(setRegisterUser(registerData, e));
  };

  const handleSubmit = (values) => {
    // console.log(values);
    // console.log(registerData);
  };
  useEffect(() => {
    // console.log(registerData);
  }, [registerData]);

  return (
    <>
      <Formik
        initialValues={{ ...registerData }}
        validationSchema={registerSchemaAccount}
        onSubmit={handleSubmit}
      >
        <Form className="personal-form">
          <CustomInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            setData={setData}
          />
          <RegisterFormPart>
            <CustomInput
              label="Display Name"
              name="displayName"
              type="text"
              small
              placeholder=""
              setData={setData}
            />
            <CustomInput
              label="Phone number"
              name="mobile"
              type="number"
              small
              placeholder="Enter your phone number"
              setData={setData}
            />
          </RegisterFormPart>
          <RegisterFormPart>
            <CustomInput
              label="Password"
              name="password"
              type="password"
              small
              placeholder="Enter your password"
              setData={setData}
            />
            <CustomInput
              label="ConfirmPassword"
              name="confirmPassword"
              type="password"
              small
              placeholder="Enter your password"
              setData={setData}
            />
          </RegisterFormPart>
          {/* <button type="submit">submit</button> */}
          <NextBtn type="submit" />
          <PrevBtn />
        </Form>
      </Formik>
    </>
  );
}

export default AccountForm;

//  <Input
//     type="email"
//     label="Email"
//     value={email || ""}
//     name="email"
//     onChange={handleChange}
//   />
//   <RegisterFormPart>
//     <Input
//       onChange={handleChange}
//       type="text"
//       label="Username"
//       small
//       value={displayName || ""}
//       name="displayName"
//     />
//     <Input
//       onChange={handleChange}
//       type="text"
//       label="Mobile Number"
//       small
//       value={mobile || ""}
//       name="mobile"
//     />
//   </RegisterFormPart>
//   <RegisterFormPart>
//     <Input
//       onChange={handleChange}
//       type="password"
//       label="Password"
//       small
//       value={password || ""}
//       name="password"
//     />
//     <Input
//       onChange={handleChange}
//       type="password"
//       label="Confirm Password"
//       small
//       value={confirmPassword || ""}
//       name="confirmPassword"
//     />
//   </RegisterFormPart>
