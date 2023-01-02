import React, { useEffect, useState } from "react";
import { RegisterFormPart } from "../../FormRegister/FormRegister.style";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { registerSchemaPlan } from "../../ValidationSchema/ValidationSchema";
import CustomInput from "../../../../components/CustomInputs/CustomInput";
import { selectPlan } from "../../../../state-management/registerhelper/registerhelper.selector";
import { setObjectPlan } from "../../../../state-management/registerhelper/registerhelper.actions";
import { selectRegisterPlan } from "../../../../state-management/registerUser/registerUser.selector";
import { setRegisterPlanAdd } from "../../../../state-management/registerUser/registerUser.action";
import { selectCheckedRon } from "../../../../state-management/registerhelper/registerhelper.selector";
import { setToggleRon } from "../../../../state-management/registerhelper/registerhelper.actions";
import CustomChecboxplan from "../../../../components/CustomInputs/CustomChecboxPlan";
import { setRegisterPlanRemove } from "../../../../state-management/registerUser/registerUser.action";
import { updateRegisterPlanAsync } from "../../../../state-management/registerUser/registerUser.action";

function PlanForm() {
  const dispatch = useDispatch();
  const planUpdate = useSelector(selectPlan);
  const plan = useSelector(selectRegisterPlan);

  // const setData = (e) => {
  //   dispatch(setToggleRon(checkedRon));
  //   dispatch(setRegisterPlan(plan, planRon));
  // };

  const setPlan = (e) => {
    const { name, value, checked } = e.target;
    console.log(name, value, checked);
    dispatch(updateRegisterPlanAsync(planUpdate, e, plan));
  };
  const handleSubmit = (value) => {
    // console.log(value);
    // console.log(planUpdate);
    // console.log(plan);
  };
  // useEffect(() => {
  //   console.log(checkedRon);
  // }, [checkedRon]);
  return (
    <>
      <Formik
        initialValues={{ ...planUpdate }}
        // validationSchema={registerSchemaPlan}
        onSubmit={handleSubmit}
      >
        <Form className="personal-form">
          <CustomChecboxplan
            type="checkbox"
            name="currency"
            value="ron"
            small
            label="Ron"
            setPlan={setPlan}
          />
          <CustomChecboxplan
            type="checkbox"
            name="currency"
            value="euro"
            small
            label="Euro"
            setPlan={setPlan}
          />

          {/* <Input
//           onChange={handleChangeRon}
//           type="checkbox"
//           checked={checkedRo}
//           label="Ron"
//           small
//           value="ron"
//           name="currency"
//         /> */}
          <button type="submit">submit</button>
        </Form>
      </Formik>
    </>
  );
}

export default PlanForm;

// import React from "react";
// import { RegisterFormPart } from "../../FormRegister/FormRegister.style";
// import Input from "../../../../components/UI/Input/Input";
// import { useState } from "react";
// import "./PlanForm.css";

// function PlanForm({ values }) {
//   const [radioChecked, setRadioChecked] = useState(false);
//   const [planDataRo, setPlanDataRo] = useState({
//     typeOfPlanRo: "",
//     currency: "ron",
//     currentBallance: "",
//   });
//   const [planDataEur, setPlanDataEur] = useState({
//     typeOfPlanEuro: "",
//     currency: "euro",
//     currentBallance: "",
//   });
//   const {
//     userData,
//     setUserData,
//     checkedRo,
//     checkedEur,
//     setCheckedRo,
//     setCheckedEur,
//   } = values;
//   const plantypes = {
//     normal: "normal",
//     premium: "premium",
//     vip: "vip",
//   };
//   const { normal, premium, vip } = plantypes;

//   const arrDataForm = userData.userDataObj.userPlan;
//   //   //   currency - ron
//   const handleChangeRon = (e) => {
//     const { name, value } = e.target;
//     setCheckedRo((checkedRo) => !checkedRo);
//     setPlanDataRo({ ...planDataRo, [name]: value });
//     if (!checkedRo === true) {
//       setUserData({
//         ...userData,
//         userDataObj: {
//           ...userData.userDataObj,
//           userPlan: [...arrDataForm, { ...planDataRo }],
//         },
//       });
//     } else {
//       setUserData({
//         ...userData,
//         userDataObj: {
//           ...userData.userDataObj,
//           userPlan: [...arrDataForm].filter((plan) => plan.currency != "ron"),
//         },
//       });
//     }
//   };
//   // typeOfPlanRo
//   const handleChangeRonPlan = (e) => {
//     const { name, value } = e.target;
//     setPlanDataRo({ ...planDataRo, [name]: value });
//     setUserData({
//       ...userData,
//       userDataObj: {
//         ...userData.userDataObj,
//         userPlan: [...arrDataForm].map((plan) =>
//           plan.currency === "ron" ? { ...plan, [name]: value } : plan
//         ),
//       },
//     });
//   };
//   // typeOfPlanEur
//   const handleChangeEurPlan = (e) => {
//     const { name, value } = e.target;
//     setUserData({
//       ...userData,
//       userDataObj: {
//         ...userData.userDataObj,
//         userPlan: [...arrDataForm].map((plan) =>
//           plan.currency === "euro" ? { ...plan, [name]: value } : plan
//         ),
//       },
//     });
//   };
//   //   //   currency - euro
//   const handleChangeEuro = (e) => {
//     const { name, value } = e.target;
//     setCheckedEur((checkedEur) => !checkedEur);
//     setPlanDataEur({ ...planDataEur, [name]: value });
//     if (!checkedEur === true) {
//       setUserData({
//         ...userData,
//         userDataObj: {
//           ...userData.userDataObj,
//           userPlan: [...arrDataForm, { ...planDataEur }],
//         },
//       });
//     } else {
//       setUserData({
//         ...userData,
//         userDataObj: {
//           ...userData.userDataObj,
//           userPlan: [...arrDataForm].filter((plan) => plan.currency != "euro"),
//         },
//       });
//     }
//   };

//   const handlerRadio = () => {
//     setRadioChecked((radioChecked) => !radioChecked);
//   };
//   console.log(userData);
//   return (
//     <div>
//       <RegisterFormPart>
//         <Input
//           onChange={handleChangeRon}
//           type="checkbox"
//           checked={checkedRo}
//           label="Ron"
//           small
//           value="ron"
//           name="currency"
//         />
//         <Input
//           onChange={handleChangeEuro}
//           type="checkbox"
//           checked={checkedEur}
//           label="Euro"
//           small
//           value="euro"
//           name="currency"
//         />
//       </RegisterFormPart>
//       <div className="containerplan">
//         <div onChange={handleChangeRonPlan}>
//           <Input
//             readOnly
//             type="radio"
//             checked={arrDataForm[0]?.typeOfPlanRo === "normal"}
//             value={normal || ""}
//             name="typeOfPlanRo"
//             label="Normal"
//           />
//           <Input
//             readOnly
//             type="radio"
//             checked={arrDataForm[0]?.typeOfPlanRo === "premium"}
//             value={premium || ""}
//             name="typeOfPlanRo"
//             label="Premium"
//           />
//           <Input
//             readOnly
//             checked={arrDataForm[0]?.typeOfPlanRo === "vip"}
//             type="radio"
//             value={vip || ""}
//             name="typeOfPlanRo"
//             label="VIP"
//           />
//         </div>
//         <div onChange={handleChangeEurPlan}>
//           <Input
//             type="radio"
//             value="normal"
//             name="typeOfPlanEuro"
//             label="Normal"
//           />
//           <Input
//             type="radio"
//             value="premium"
//             name="typeOfPlanEuro"
//             label="Premium"
//           />
//           <Input type="radio" value="vip" name="typeOfPlanEuro" label="VIP" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PlanForm;
