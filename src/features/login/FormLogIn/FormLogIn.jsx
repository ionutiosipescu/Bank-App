import React, { useEffect, useState } from "react";
import Input from "../../../components/UI/Input/Input";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import { advancedSchema } from "../ValidationSchema/ValidationSchema";
import CustomInput from "../CustomInputsLogIn/CustomInput";
import CustomCheckbox from "../CustomInputsLogIn/CustomCheckbox";
import CustomPassword from "../CustomInputsLogIn/CustomPassword";
import { useSelector, useDispatch } from "react-redux";
import { selectLoginUser } from "../../../state-management/loginUser/loginUser.selector";
import { setLogInUser } from "../../../state-management/loginUser/loginUser.action";
import { debounce } from "debounce";

function FormLogIn() {
  const loginData = useSelector(selectLoginUser);
  const dispatch = useDispatch();

  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const navigate = useNavigate();

  const onSubmit = (values, actions) => {
    // setIsSubmitting(true);
    console.log(loginData);
  };

  const setData = debounce((e) => {
    dispatch(setLogInUser(loginData, e));
  }, 500);
  // useEffect(() => {
  //   if (isSubmitting) {
  //     navigate("/dashboard");
  //   } else {
  //     return;
  //   }
  // }, [isSubmitting]);

  const initialObject = {
    username: "",
    password: "",
    acceptedTos: false,
  };

  return (
    <Formik
      initialValues={{ ...initialObject }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      <Form className="form">
        <CustomInput
          label="Username"
          name="username"
          type="text"
          placeholder="Enter your username"
          setData={setData}
        />
        <CustomPassword
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          setData={setData}
        />
        <CustomCheckbox type="checkbox" name="acceptedTos" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default FormLogIn;
