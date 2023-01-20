import React from "react";
import Button from "../../../components/UI/Button/Button";
import { ServiceInputsCard } from "../../../components/UI/Card/Card.style";
import Input from "../../../components/UI/Input/Input";
import DropDown from "../../../components/DropDown/DropDown";
import { ExchangeInputContainer, InfoSection } from "./ExchangeInputCard.style";
import { useEffect, useState } from "react";
import axios from "axios";
import CurrencyInput from "../CurrencyInput/CurrencyInput";
import { exchangeRates } from "../../../utils/data/dummyData";
import CustomExchange from "../../../components/CustomInputs/CustomExchange";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectExchangeData } from "../../../state-management/Dashboard/services/helpers/exchangeHelper/exchangeHelper.selector";
import { setExchangeAmount } from "../../../state-management/Dashboard/services/helpers/exchangeHelper/exchangeHelper.action";
import { ErrorMsg } from "../../../components/Errors/Auth/ErrorMsg.style";
import { selectExchangeArr } from "../../../state-management/Dashboard/services/helpers/exchangeHelper/exchangeHelper.selector";
import { fetchExchangeData } from "../../../state-management/Dashboard/services/helpers/exchangeHelper/exchangeHelper.action";
import { selectCurrentUser } from "../../../state-management/Dashboard/userData/userData.selector";

function ExchangeInputCard() {
  const dispatch = useDispatch();
  const excangeData = useSelector(selectExchangeData);
  const exchangeArr = useSelector(selectExchangeArr);
  const currentUser = useSelector(selectCurrentUser);
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("ron");
  const [currency2, setCurrency2] = useState("eur");
  const [rates, setRates] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setRates(exchangeRates);
  }, []);

  useEffect(() => {
    if (!!rates) {
      function init() {
        handleAmount1Change(1);
      }
      init();
    }
  }, [rates]);

  const setData = (e) => {
    dispatch(setExchangeAmount(excangeData, e));
  };

  useEffect(() => {
    // nu functioneaza ambele functii, doar cea care sta mai aproape de useEffect
    // cauza este ca ambele functii modifica multiple valori
    handleAmount1Change(amount1);
    handleAmount2Change(amount2);
  }, [currency1, currency2]);

  function format(number) {
    return number.toFixed(2);
  }

  function handleAmount1Change(amount1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    currency1 === "ron" ? setCurrency2("eur") : setCurrency2("ron");
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    currency2 === "eur" ? setCurrency1("ron") : setCurrency1("eur");
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  }

  // const handleSubmit = () => {
  //   console.log(excangeData);
  // };

  return (
    <ServiceInputsCard type="exchange">
      <h2>New Exchange</h2>
      <ExchangeInputContainer>
        <Formik
          initialValues={excangeData}
          validateOnBlur={false}
          validateOnChange={true}
          onSubmit={() => {
            if (excangeData.amount === "") {
              setErrorMsg("Invalid Amount");
            } else {
              setErrorMsg("");
              dispatch(
                fetchExchangeData(excangeData, exchangeArr, currentUser)
              );
              console.log("ok", excangeData);
            }
          }}
        >
          <Form>
            {/* <InfoSection> */}
            {/* <DropDown label="From" items={["EUR", "RON"]} />
              <Input label="Amount" type="number" min="0" large /> */}
            <CurrencyInput
              onAmountChange={handleAmount1Change}
              onCurrencyChange={handleCurrency1Change}
              currencies={Object.keys(rates)}
              amount={amount1}
              currency={currency1}
              setData={setData}
            />
            {/* </InfoSection> */}
            {/* <InfoSection> */}
            {/* <DropDown label="To" items={["EUR", "RON"]} />
              <Input label="Amount" type="number" min="0" large /> */}
            <CurrencyInput
              onAmountChange={handleAmount2Change}
              onCurrencyChange={handleCurrency2Change}
              currencies={Object.keys(rates)}
              amount={amount2}
              currency={currency2}
            />
            {errorMsg ? <ErrorMsg>{errorMsg}</ErrorMsg> : <></>}
            {/* </InfoSection> */}
            <Button label="Exchange" size="xl" primary={true} type="submit" />
          </Form>
        </Formik>
      </ExchangeInputContainer>
    </ServiceInputsCard>
  );
}

export default ExchangeInputCard;
