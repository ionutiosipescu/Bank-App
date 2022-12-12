import React from "react";
import "./Dashboard.css";

import BalanceCard from "../../components/BalanceCard/BalanceCard";
import { accounts } from "../../utils/data/dummyData";

function Dashboard() {
  return (
    <div className="dashboard">
      {accounts.map((account) => (
        <BalanceCard
          color="purple"
          balance={account.balance}
          cardNum={account.cardNumber}
          name={account.owner}
          valid={account.validity}
        />
      ))}
      <div className="card card-md"></div>
      <div className="card card-md"></div>
    </div>
  );
}

export default Dashboard;
