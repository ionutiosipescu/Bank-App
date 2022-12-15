import React from "react";
import { RegisterFormPart } from "../../FormRegister/FormRegister.style";
import Input from "../../../../components/UI/Input/Input";
import { useState } from "react";

function PlanForm({ values }) {
  const [planDataRo, setPlanDataRo] = useState({
    typeOfPlanRo: "",
    currency: "ron",
    currentBallance: "",
  });
  const [planDataEur, setPlanDataEur] = useState({
    typeOfPlanEuro: "",
    currency: "euro",
    currentBallance: "",
  });
  const {
    userData,
    setUserData,
    checkedRo,
    checkedEur,
    setCheckedRo,
    setCheckedEur,
  } = values;

  const arrDataForm = userData.userDataObj.userPlan;
  //   //   currency - ron
  const handleChangeRon = (e) => {
    const { name, value } = e.target;
    setCheckedRo((checkedRo) => !checkedRo);
    setPlanDataRo({ ...planDataRo, [name]: value });
    if (!checkedRo === true) {
      setUserData({
        ...userData,
        userDataObj: {
          ...userData.userDataObj,
          userPlan: [...arrDataForm, { ...planDataRo }],
        },
      });
    } else {
      setUserData({
        ...userData,
        userDataObj: {
          ...userData.userDataObj,
          userPlan: [...arrDataForm].filter((plan) => plan.currency != "ron"),
        },
      });
    }
  };
  // typeOfPlanRo
  const handleChangeRonPlan = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      userDataObj: {
        ...userData.userDataObj,
        userPlan: [...arrDataForm].map((plan) =>
          plan.currency === "ron" ? { ...plan, [name]: value } : plan
        ),
      },
    });
  };
  // typeOfPlanEur
  const handleChangeEurPlan = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      userDataObj: {
        ...userData.userDataObj,
        userPlan: [...arrDataForm].map((plan) =>
          plan.currency === "euro" ? { ...plan, [name]: value } : plan
        ),
      },
    });
  };
  //   //   currency - euro
  const handleChangeEuro = (e) => {
    const { name, value } = e.target;
    setCheckedEur((checkedEur) => !checkedEur);
    setPlanDataEur({ ...planDataEur, [name]: value });
    if (!checkedEur === true) {
      setUserData({
        ...userData,
        userDataObj: {
          ...userData.userDataObj,
          userPlan: [...arrDataForm, { ...planDataEur }],
        },
      });
    } else {
      setUserData({
        ...userData,
        userDataObj: {
          ...userData.userDataObj,
          userPlan: [...arrDataForm].filter((plan) => plan.currency != "euro"),
        },
      });
    }
  };

  console.log(userData);
  return (
    <div>
      <RegisterFormPart>
        <Input
          onChange={handleChangeRon}
          type="checkbox"
          label="Ron"
          small
          value="ron"
          name="currency"
        />
        <Input
          onChange={handleChangeEuro}
          type="checkbox"
          label="Euro"
          small
          value="euro"
          name="currency"
        />
      </RegisterFormPart>
      <div onChange={handleChangeRonPlan}>
        <Input type="radio" value="normal" name="typeOfPlanRo" label="Normal" />
        <Input
          type="radio"
          value="premium"
          name="typeOfPlanRo"
          label="Premium"
        />
        <Input type="radio" value="vip" name="typeOfPlanRo" label="VIP" />
      </div>
      <div onChange={handleChangeEurPlan}>
        <Input
          type="radio"
          value="normal"
          name="typeOfPlanEuro"
          label="Normal"
        />
        <Input
          type="radio"
          value="premium"
          name="typeOfPlanEuro"
          label="Premium"
        />
        <Input type="radio" value="vip" name="typeOfPlanEuro" label="VIP" />
      </div>
    </div>
  );
}

export default PlanForm;
