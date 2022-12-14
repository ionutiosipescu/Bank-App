import React from "react";
import "./Dashboard.css";

import BalanceCard from "../../components/BalanceCard/BalanceCard";
import { accounts } from "../../utils/data/dummyData";
import TopCard from "../../components/TopCard/TopCard";
import { DashboardContainer } from "./Dashboard.style";

function Dashboard() {
  return (
    <DashboardContainer>
      <BalanceCard
        color="purple"
        size="sm"
        balance={accounts[0].balance}
        cardNum={accounts[0].cardNumber}
        name={accounts[0].owner}
        valid={accounts[0].validity}
      />
      <TopCard
        label="Income"
        amount="$5,542.23"
        percent="+0.5"
        size="sm"
        isPrimary
      />
      <TopCard label="Outcome" amount="$1,215.37" percent="-0.2" size="sm" />
    </DashboardContainer>
  );
}

export default Dashboard;
