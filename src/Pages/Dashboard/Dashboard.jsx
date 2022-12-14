import React from "react";
import "./Dashboard.css";

import BalanceCard from "../../components/BalanceCard/BalanceCard";
import { accounts } from "../../utils/data/dummyData";
import TopCard from "../../components/TopCard/TopCard";

function Dashboard() {
  return (
    <div className="dashboard">
      <BalanceCard
        color="purple"
        balance={accounts[0].balance}
        cardNum={accounts[0].cardNumber}
        name={accounts[0].owner}
        valid={accounts[0].validity}
      />
      <TopCard type="Income" amount="$5,542.23" percent="+0.5" isPrimary />
      <TopCard type="Outcome" amount="$1,215.37" percent="-0.2" />
    </div>
  );
}

export default Dashboard;
