import React from "react";
import "./ConfirmForm.css";
import { Fragment } from "react";
import { selectRegisterPlan } from "../../../../state-management/registerUser/registerUser.selector";
// import { selectRegisterUser } from "../../../../state-management/registerUser/registerUser.selector";
import { selectRegisterUser } from "../../../../state-management/registerhelper/registerhelper.selector";
import FooterControl from "../../FooterControl/FooterControl";
import { Form, Formik } from "formik";
// import { handleSubmit } from "../../../../utils/helpers/register/HandleSubmit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectStep } from "../../../../state-management/registerhelper/registerhelper.selector";
import { setStep } from "../../../../state-management/registerhelper/registerhelper.actions";
import CustomCheckbox from "../../../../components/CustomInputs/CustomCheckbox";
import { registerShemaConfirmation } from "../../ValidationSchema/ValidationSchema";
import { selectRegisterData } from "../../../../state-management/registerUser/registerUser.selector";
import { fetchRegisterData } from "../../../../state-management/registerUser/registerUser.action";
import { RegisterFormPart } from "../../FormRegister/FormRegister.style";
import { ConfirmFormPart } from "./Confirm.style";

function ConfirmForm() {
  const dispatch = useDispatch();
  const step = useSelector(selectStep);
  const RegisterUser = useSelector(selectRegisterUser);
  const RegisterPlan = useSelector(selectRegisterPlan);
  const RegisterData = useSelector(selectRegisterData);
  const array = RegisterData.account;
  const mappedArray = array.map(({ currency, type_of_plan }) => ({
    currency,
    type_of_plan,
  }));
  console.log(mappedArray);
  const { email, username } = RegisterData;
  const {
    address,
    birthday,
    country,
    created_at,
    first_name,
    gender,
    last_name,
    mobile,
  } = RegisterData.userDetail;

  const upperCaseFirstInitial = (string) => {
    string = string.replace(/_/g, " ");
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const initialObject = {
    acceptedTos: false,
    acceptedPlan: false,
  };

  const handleSubmit = () => {
    console.log(RegisterData);
    dispatch(
      fetchRegisterData("http://localhost:8080/bank/auth/signup", RegisterData)
    );
  };
  return (
    <>
      <Formik
        initialValues={{ ...initialObject }}
        validationSchema={registerShemaConfirmation}
        onSubmit={handleSubmit}
      >
        <Form className="confirm-form">
          <h1>Confirmation</h1>
          <div className="confirm-details">
            <div className="confirm-box confirm-profile">
              <h3>Account Details: </h3>
              <ul>
                <li>Address: {address}</li>
                <li>Country: {upperCaseFirstInitial(country)}</li>
                <li>First Name: {upperCaseFirstInitial(first_name)}</li>
                <li>Second Name: {upperCaseFirstInitial(last_name)}</li>
                <li>Gender: {upperCaseFirstInitial(gender)}</li>
                <li>Email: {email}</li>
                <li>Mobile Number: {mobile}</li>
                <li>Account Name: {upperCaseFirstInitial(username)}</li>
                <li>Birthdaty: {birthday}</li>
              </ul>
            </div>
            <div className="confirm-box confirm-account">
              <h3>Plan Details: </h3>
              <ul>
                {Object.entries(mappedArray).map((key) => {
                  const randomKey = Math.random().toString(36).slice(2);
                  return (
                    <Fragment key={randomKey}>
                      {Object.entries(key[1]).map((newKey) => {
                        const randomKeyNew = Math.random()
                          .toString(36)
                          .slice(2);
                        return (
                          <li key={randomKeyNew}>
                            {upperCaseFirstInitial(newKey[0])}:{" "}
                            {upperCaseFirstInitial(newKey[1])}
                          </li>
                        );
                      })}
                    </Fragment>
                  );
                })}
              </ul>
            </div>
          </div>
          <ConfirmFormPart>
            <CustomCheckbox
              label="I accept the terms and conditions"
              type="checkbox"
              name="acceptedTos"
            />
            <CustomCheckbox
              label="I confirm the presented details"
              type="checkbox"
              name="acceptedPlan"
            />
          </ConfirmFormPart>
          <FooterControl />
        </Form>
      </Formik>
    </>
  );
}

export default ConfirmForm;

// import React from "react";
// import "./ConfirmForm.css";
// import { Fragment } from "react";
// import { selectRegisterPlan } from "../../../../state-management/registerUser/registerUser.selector";
// // import { selectRegisterUser } from "../../../../state-management/registerUser/registerUser.selector";
// import { selectRegisterUser } from "../../../../state-management/registerhelper/registerhelper.selector";
// import FooterControl from "../../FooterControl/FooterControl";
// import { Form, Formik } from "formik";
// // import { handleSubmit } from "../../../../utils/helpers/register/HandleSubmit";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { selectStep } from "../../../../state-management/registerhelper/registerhelper.selector";
// import { setStep } from "../../../../state-management/registerhelper/registerhelper.actions";
// import CustomCheckbox from "../../../../components/CustomInputs/CustomCheckbox";
// import { registerShemaConfirmation } from "../../ValidationSchema/ValidationSchema";
// import { selectRegisterData } from "../../../../state-management/registerUser/registerUser.selector";
// import { fetchRegisterData } from "../../../../state-management/registerUser/registerUser.action";

// function ConfirmForm() {
//   const dispatch = useDispatch();
//   const step = useSelector(selectStep);
//   const RegisterUser = useSelector(selectRegisterUser);
//   const RegisterPlan = useSelector(selectRegisterPlan);
//   const RegisterData = useSelector(selectRegisterData);
//   const initialObject = {
//     acceptedTos: false,
//   };

//   const handleSubmit = () => {
//     dispatch(
//       fetchRegisterData(
//         "http://localhost:8080/bank/auth/signup",
//         RegisterData,
//         step
//       )
//     );
//   };
//   return (
//     <>
//       <Formik
//         initialValues={{ ...initialObject }}
//         validationSchema={registerShemaConfirmation}
//         onSubmit={handleSubmit}
//       >
//         <Form className="personal-form">
//           <h1>Confirm Form</h1>
//           <div className="box">
//             {/* user */}
//             <div>
//               <h3>User Details:</h3>
//               <ul>
//                 {Object.entries(RegisterUser).map((key) => {
//                   const randomKey = Math.random().toString(36).slice(2);
//                   return (
//                     <li key={randomKey}>
//                       {key[0]}: --- {key[1]}
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//             {/* plan */}
//             <div>
//               <h3>Plan Details:</h3>
//               <ul>
//                 {Object.entries(RegisterPlan).map((key) => {
//                   const randomKey = Math.random().toString(36).slice(2);
//                   return (
//                     <Fragment key={randomKey}>
//                       {Object.entries(key[1]).map((newKey) => {
//                         const randomKeyNew = Math.random()
//                           .toString(36)
//                           .slice(2);
//                         return (
//                           <li key={randomKeyNew}>
//                             {newKey[0]}: --- {newKey[1]}
//                           </li>
//                         );
//                       })}
//                     </Fragment>
//                   );
//                 })}
//               </ul>
//             </div>
//           </div>
//           <CustomCheckbox type="checkbox" name="acceptedTos" />
//           <FooterControl />
//         </Form>
//       </Formik>
//     </>
//   );
// }

// export default ConfirmForm;
