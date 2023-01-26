import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Savings from "../../Savings/Savings";
import Exchange from "../../Exchange/Exchange";
import Loans from "../../NewLoan/NewLoan";
import HisotryViewTransfers from "../../HistoryViewTransfers/HistoryViewTransfers";
import Deposit from "../../Deposit/Deposit";

function Service() {
  const { service } = useParams();
  const [currentPage, setCurrentPage] = useState(null);

  useEffect(() => {
    switch (service) {
      case "savings":
        setCurrentPage(<Savings />);
        break;
      case "exchange":
        setCurrentPage(<Exchange />);
        break;
      case "loans":
        setCurrentPage(<Loans />);
        break;
      case "deposit":
        setCurrentPage(<HisotryViewTransfers />);
        setCurrentPage(<Deposit />);
        break;
      default:
        setCurrentPage(<></>);
    }
  }, [service]);

  return <React.Fragment>{currentPage}</React.Fragment>;
}

export default Service;