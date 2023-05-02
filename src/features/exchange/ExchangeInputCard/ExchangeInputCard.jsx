import React from "react";
import Button from "../../../components/UI/Button/Button";
import {
  CornerArt,
  ServiceInputsCard,
} from "../../../components/UI/Card/Card.style";
import Input from "../../../components/UI/Input/Input";
import DropDown from "../../../components/DropDown/DropDown";
import {
  ExchangeInputContainer,
  FormExchange,
  InfoSection,
} from "./ExchangeInputCard.style";
import { useEffect, useState } from "react";
import axios from "axios";
import CurrencyInput from "../CurrencyInput/CurrencyInput";
import { exchangeRates } from "../../../utils/data/dummyData";
import CustomExchange from "../../../components/CustomInputs/CustomExchange";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectExchangeData } from "../../../state-management/Dashboard/services/exchange/exchange.selector";
import {
  setExchangeAmount,
  resetExchange,
} from "../../../state-management/Dashboard/services/exchange/exchange.action";
import { ErrorMsg } from "../../../components/Errors/Auth/ErrorMsg.style";
import {
  selectExchangeArr,
  selectError,
  selectIsSubmiting,
  selectShowMessage,
} from "../../../state-management/Dashboard/services/exchange/exchange.selector";
import { fetchExchangeData } from "../../../state-management/Dashboard/services/exchange/exchange.service";
import { selectCurrentUser } from "../../../state-management/Dashboard/userData/userData.selector";
import { setExchangeAmountTo } from "../../../state-management/Dashboard/services/exchange/exchange.action";
import { accounts } from "./../../../utils/data/dummyData";
import { handleSubmit } from "./../../../utils/helpers/helperFunctions/HandleSubmit";
import RequestMessage from "../../../components/RequestMessage/RequestMessage";
import { selectExchangeOption } from "../../../state-management/Dashboard/services/exchange/exchange.selector";
import { selectCsrf } from "../../../state-management/Auth/login/login.selector";

function ExchangeInputCard() {
  const dispatch = useDispatch();
  const excangeData = useSelector(selectExchangeData);
  const { currency } = excangeData;
  const selectedOptionExchange = useSelector(selectExchangeOption);
  const exchangeArr = useSelector(selectExchangeArr);
  const currentUser = useSelector(selectCurrentUser);
  const csrf = useSelector(selectCsrf);
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("ron");
  const [currency2, setCurrency2] = useState("euro");
  const [rates, setRates] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const errorMsgRequest = useSelector(selectError);
  const isSubmiting = useSelector(selectIsSubmiting);
  const showMessage = useSelector(selectShowMessage);

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
    handleAmount1Change(amount1);
  }, [currency1, currency2]);

  function format(number) {
    return number.toFixed(2);
  }

  function handleAmount1Change(amount1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    currency1 === "ron" ? setCurrency2("euro") : setCurrency2("ron");
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  }

  const handleSubmit = () => {
    dispatch(setExchangeAmountTo(excangeData, amount2));
    dispatch(
      fetchExchangeData(
        excangeData,
        exchangeArr,
        currentUser,
        selectedOptionExchange,
        csrf
      )
    );
  };

  useEffect(() => {
    dispatch(resetExchange());
  }, []);

  return (
    <ServiceInputsCard type="exchange">
      <h2>New Exchange</h2>
      <ExchangeInputContainer>
        <Formik
          initialValues={excangeData}
          validateOnBlur={false}
          validateOnChange={true}
          onSubmit={handleSubmit}
        >
          <FormExchange>
            <CurrencyInput
              onAmountChange={handleAmount1Change}
              onCurrencyChange={handleCurrency1Change}
              currencies={Object.keys(rates)}
              amount={amount1}
              currency={currency1}
              setData={setData}
            />
            <InfoSection>
              <div>{amount2}</div>
              <div>{currency2.toUpperCase()}</div>
            </InfoSection>
            <RequestMessage
              isSubmiting={isSubmiting}
              showMessage={showMessage}
              errorMsgRequest={errorMsgRequest}
              text="Your Exchange has been Succesfuly Added"
            />
            {/* {errorMsg ? <ErrorMsg>{errorMsg}</ErrorMsg> : <></>} */}
            <Button
              label="Exchange"
              size="fullWidth"
              primary="primary"
              type="submit"
            />
            <CornerArt bottom right />
          </FormExchange>
        </Formik>
      </ExchangeInputContainer>
    </ServiceInputsCard>
  );
}

export default ExchangeInputCard;
