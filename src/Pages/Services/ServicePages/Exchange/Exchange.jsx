import React from "react";
import { ExchangeWrapper } from "./Exchange.style";
import ExchangeList from "../../../../features/exchange/ExchangeList/ExchangeList";
import ExchangeInputCard from "../../../../features/exchange/ExchangeInputCard/ExchangeInputCard";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { selectCurrentUser } from "../../../../state-management/Dashboard/userData/userData.selector";
import { getExchangeArr } from "../../../../state-management/Dashboard/services/exchange/exchange.service";
import { selectExchangeOption } from "../../../../state-management/Dashboard/services/exchange/exchange.selector";

function Exchange() {
  const selectedOptionExchange = useSelector(selectExchangeOption);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExchangeArr(selectedOptionExchange, currentUser));
    console.log(selectedOptionExchange);
  }, [selectedOptionExchange]);
  return (
    <ExchangeWrapper>
      <ExchangeList />
      <ExchangeInputCard />
    </ExchangeWrapper>
  );
}

export default Exchange;
