import React, { useEffect, useState } from "react";
import Input from "../../../components/UI/Input/Input";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import { advancedSchema } from "../ValidationSchema/ValidationSchema";
import CustomInput from "../CustomInputsLogIn/CustomInput";
import CustomCheckbox from "../CustomInputsLogIn/CustomCheckbox";
import CustomPassword from "../CustomInputsLogIn/CustomPassword";
import { useSelector } from "react-redux";
import { selectRegisterUser } from "../../../state-management/registerUser/registerUser.selector";
import { useNavigate } from "react-router-dom";

function FormLogIn() {
  // const register = useSelector(selectRegisterUser);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (isSubmitting) {
      navigate("/dashboard");
    } else {
      return;
    }
  }, [isSubmitting]);

  return (
    <Formik
      initialValues={{ username: "", password: "", acceptedTos: false }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      <Form className="form">
        <CustomInput
          label="Username"
          name="username"
          type="text"
          placeholder="Enter your username"
        />
        <CustomPassword
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <CustomCheckbox type="checkbox" name="acceptedTos" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default FormLogIn;
