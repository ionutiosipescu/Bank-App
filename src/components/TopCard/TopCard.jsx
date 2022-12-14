import React from "react";
import "./TopCard.css";

import { TbTransferIn, TbTransferOut } from "react-icons/tb";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import Charts from "../Chart/Chart";

function TopCard({ amount, percent, type, isPrimary, children }) {
  return (
    <div className="card top_card card-sm">
      <div className="top_card-header">
        <div className="top_card-title">
          <div
            className={isPrimary ? "top_card-icon primary" : "top_card-icon"}
          >
            {type == "Income" ? (
              <TbTransferIn size={25} color="white" />
            ) : (
              <TbTransferOut size={25} color="white" />
            )}
          </div>
          <div>
            <h5>{type}</h5>
            <h1>{type == "Income" ? `+${amount}` : `-${amount}`}</h1>
          </div>
        </div>
        <div className="top_card-feature">
          {percent > 0 ? (
            <>
              <TiArrowSortedUp color="green" size={20} />
              <h5 style={{ color: "green" }}>{percent}%</h5>
            </>
          ) : (
            <>
              <TiArrowSortedDown color="red" size={20} />
              <h5 style={{ color: "red" }}>{percent}%</h5>
            </>
          )}
          <div className="">last month</div>
        </div>
      </div>
      <div className="top_card-body">
        <Charts />
      </div>
    </div>
  );
}

export default TopCard;
