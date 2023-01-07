import React, { useEffect } from "react";
import { RegisterFormPart } from "../../FormRegister/FormRegister.style";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectRegisterUser } from "../../../../state-management/registerhelper/registerhelper.selector";
import { setRegisterUser } from "../../../../state-management/registerhelper/registerhelper.actions";
// import { selectRegisterUser } from "../../../../state-management/registerUser/registerUser.selector";
// import { setRegisterUser } from "../../../../state-management/registerUser/registerUser.action";
import CustomInput from "../../../../components/CustomInputs/CustomInput";
import { registerSchemaAccount } from "../../ValidationSchema/ValidationSchema";
import NextBtn from "../../../../components/StepButtons/NextBtn";
import PrevBtn from "../../../../components/StepButtons/PrevBtn";
import FooterControl from "../../FooterControl/FooterControl";
import { handleSubmit } from "../../../../utils/helpers/register/HandleSubmit";
import { selectStep } from "../../../../state-management/registerhelper/registerhelper.selector";
import { setStep } from "../../../../state-management/registerhelper/registerhelper.actions";
import "../../../../components/UI/Input/Input.css";

function AccountForm() {
  const step = useSelector(selectStep);
  const dispatch = useDispatch();
  const registerData = useSelector(selectRegisterUser);

  const setData = (e) => {
    dispatch(setRegisterUser(registerData, e));
  };

  return (
    <>
      <Formik
        initialValues={{ ...registerData }}
        validationSchema={registerSchemaAccount}
        onSubmit={() => handleSubmit(dispatch, setStep, step)}
      >
        <Form className="personal-form">
          <RegisterFormPart>
            <CustomInput
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              setData={setData}
            />
          </RegisterFormPart>

          <RegisterFormPart>
            <CustomInput
              label="Display Name"
              name="displayName"
              type="text"
              small
              placeholder="Enter your display name"
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
          <FooterControl />
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
