import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import BalanceCard from "../../components/BalanceCard/BalanceCard";

import { accounts } from "../../dummyData";
import Card from "../../components/StaticComponents/Card/Card";

function Home() {
  console.log(accounts[0].createdOn);
  return (
    <div className="home">
      <BalanceCard
        color="purple"
        balance={accounts[0].balance}
        cardNum="0123 4567 8910"
        name={accounts[0].owner}
        valid="08/26"
      />
      <BalanceCard
        color="green"
        balance={accounts[0].balance}
        cardNum="0123 4567 8910"
        name={accounts[0].owner}
        valid="08/26"
      />
      <Card>
        <h1>Hello</h1>
      </Card>
      <Link to="/login">Log In Now</Link>
    </div>
  );
}

export default Home;
