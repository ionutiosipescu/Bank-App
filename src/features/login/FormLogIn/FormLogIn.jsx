import React, { useEffect, useState } from "react";
import Input from "../../../components/UI/Input/Input";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import { advancedSchema } from "../ValidationSchema/ValidationSchema";
import CustomInput from "../../../components/CustomInputs/CustomInput";
import CustomCheckbox from "../../../components/CustomInputs/CustomCheckbox";
import CustomPassword from "../../../components/CustomInputs/CustomPassword";
import { useSelector, useDispatch } from "react-redux";
import { selectLoginUser } from "../../../state-management/loginUser/loginUser.selector";
import { setLogInUser } from "../../../state-management/loginUser/loginUser.action";
import { debounce } from "debounce";
import { selectStep } from "../../../state-management/registerhelper/registerhelper.selector";
import { setStep } from "../../../state-management/registerhelper/registerhelper.actions";
import axios from "axios";

function FormLogIn() {
  const dispatch = useDispatch();
  const loginData = useSelector(selectLoginUser);

  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const navigate = useNavigate();

  const onSubmit = (values, actions) => {
    // setIsSubmitting(true);
    console.log(loginData);
    // axios
    //   .post("http://localhost:8080/bank/auth/signup", loginData)
    //   .then((res) => console.log(res.data));
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
    email: "",
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
        <CustomInput
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
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
