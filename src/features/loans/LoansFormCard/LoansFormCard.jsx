import React, { useState } from "react";
import { ServiceCard } from "../../../components/UI/Card/Card.style";
import { CardHeader } from "../../../components/UI/Card/Card.style";
import { Formik, Form } from "formik";
import CustomInput from "../../../components/CustomInputs/CustomInput";
import CustomSelect from "../../../components/CustomInputs/CustomSelect";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectLoansData } from "../../../state-management/Dashboard/services/loans/loans.selector";
import { setLoansData } from "../../../state-management/Dashboard/services/loans/loans.action";
import { loansSchema } from "../ValidationSchema/ValidationSchema";
import { RegisterFormPart } from "../../register/FormRegister/FormRegister.style";
import { FormContainerLoans, BtnContainerLoan } from "./LoansFormCard.style";
import Button from "../../../components/UI/Button/Button";
import { setLoansArr } from "../../../state-management/Dashboard/services/loans/loans.action";
import { selectLoansArr } from "../../../state-management/Dashboard/services/loans/loans.selector";
import { fetchLoanData } from "../../../state-management/Dashboard/services/loans/loans.action";
import { selectCurrentUser } from "../../../state-management/Dashboard/userData/userData.selector";
import Modal from "../../../components/Modal/Modal";
import LoanModal from "../LoanModal/LoanModal";

function LoansFormCard() {
  // Modal State
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = (id) => {
    if (loansData) {
      setModalOpen(true);
    } else setModalOpen(false);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  //////////////////////

  const employeeOptions = [
    { key: "", value: "Select a employe status" },
    { key: "business", value: "Business" },
    { key: "self_employed", value: "Self employed" },
    { key: "government_job", value: "Government Job" },
    { key: "private_job", value: "Private Job" },
    { key: "student", value: "Student" },
    { key: "other", value: "Other" },
  ];
  const loanPurposeOptions = [
    { key: "", value: "Select a Loan Purpose" },
    { key: "car", value: "Car" },
    { key: "house", value: "House" },
    { key: "education", value: "Education" },
    { key: "travel", value: "Travel" },
    { key: "investition", value: "Investition" },
    { key: "business", value: "Business" },
  ];
  const loanYearsOptions = [
    { key: "", value: "Select a Loan Year" },
    { key: "3", value: "3 Years" },
    { key: "6", value: "6 Years" },
    { key: "10", value: "10 Years" },
    { key: "15", value: "15 Years" },
    { key: "25", value: "25 Years" },
    { key: "30", value: "30 Years" },
  ];
  const maritalStatusOptions = [
    { key: "", value: "Select a Martial Status" },
    { key: "single", value: "Single" },
    { key: "married", value: "Married" },
    { key: "divorced", value: "Divorced" },
  ];
  const dispatch = useDispatch();
  const loansArr = useSelector(selectLoansArr);
  const loansData = useSelector(selectLoansData);
  const currentUser = useSelector(selectCurrentUser);
  const {
    serie,
    loan_amount,
    income,
    cnp,
    employee_status,
    loan_purpose,
    loan_years,
    marital_status,
  } = loansData; // destructure data from Redux for updating on every keypress
  // send data to Redux userProfile

  // const onSubmit = (e) => {};
  const setData = (e) => {
    dispatch(setLoansData(loansData, e));
  };

  // const initialObj = {
  //   serie: "",
  // };
  return (
    <ServiceCard>
      <CardHeader>
        <h2>Loans</h2>
      </CardHeader>
      <Formik
        initialValues={{ ...loansData }}
        validationSchema={loansSchema}
        onSubmit={(isValid) => {
          if (isValid) {
            setModalOpen(true);
            dispatch(fetchLoanData(loansData, loansArr, currentUser));
          }
        }}
      >
        <FormContainerLoans>
          <RegisterFormPart>
            <CustomInput
              tall
              label="Card Serie"
              name="serie"
              type="text"
              placeholder="Enter your serie"
              setData={setData}
              value={serie || ""}
            />
            <CustomInput
              tall
              label="Loan Amount"
              name="loan_amount"
              type="number"
              placeholder="Enter your Loan Amount"
              setData={setData}
              value={loan_amount || ""}
            />
          </RegisterFormPart>
          <RegisterFormPart>
            <CustomInput
              tall
              label="Monthly Income"
              name="income"
              type="number"
              placeholder="Enter your Monthly Income"
              setData={setData}
              value={income || ""}
            />
            <CustomInput
              tall
              label="CNP"
              name="cnp"
              type="number"
              placeholder="Enter your ID Number"
              setData={setData}
              value={cnp || ""}
            />
          </RegisterFormPart>
          <RegisterFormPart>
            <CustomSelect
              tall
              label="Employer status"
              name="employee_status"
              placeholder="Select a employer status"
              setData={setData}
              value={employee_status || ""}
            >
              {employeeOptions.map((option, index) => (
                <option value={option.key} key={index}>
                  {option.value}
                </option>
              ))}
            </CustomSelect>
            <CustomSelect
              tall
              label="Purpose of Loan"
              name="loan_purpose"
              placeholder="Select purpose of loan"
              setData={setData}
              value={loan_purpose || ""}
            >
              {loanPurposeOptions.map((option, index) => (
                <option value={option.key} key={index}>
                  {option.value}
                </option>
              ))}
            </CustomSelect>
          </RegisterFormPart>
          <RegisterFormPart>
            <CustomSelect
              tall
              label="Loan Years"
              name="loan_years"
              placeholder="Select a Loan Year"
              setData={setData}
              value={loan_years || ""}
            >
              {loanYearsOptions.map((option, index) => (
                <option value={option.key} key={index}>
                  {option.value}
                </option>
              ))}
            </CustomSelect>
            <CustomSelect
              tall
              label="Marial Status"
              name="marital_status"
              placeholder="Select a employer Martial Status"
              setData={setData}
              value={marital_status || ""}
            >
              {maritalStatusOptions.map((option, index) => (
                <option value={option.key} key={index}>
                  {option.value}
                </option>
              ))}
            </CustomSelect>
          </RegisterFormPart>
          <BtnContainerLoan>
            <Button
              size={"xl"}
              type="submit"
              label="Request Loan"
              // handleClick={handleModalOpen}
            />
          </BtnContainerLoan>
        </FormContainerLoans>
      </Formik>
      <Modal opened={modalOpen} handleClick={handleModalClose}>
        <LoanModal approved="no" handleClick={handleModalClose} />
      </Modal>
    </ServiceCard>
  );
}

export default LoansFormCard;
