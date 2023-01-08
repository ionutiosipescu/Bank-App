import React from "react";
import { ExchangeWrapper } from "./Exchange.style";

import ExchangeList from "../../features/exchange/ExchangeList/ExchangeList";
import ExchangeInputCard from "../../features/exchange/ExchangeInputCard/ExchangeInputCard";

function Exchange() {
  return (
    <ExchangeWrapper>
      <ExchangeList />
      <ExchangeInputCard />
    </ExchangeWrapper>
  );
}

export default Exchange;
