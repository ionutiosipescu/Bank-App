import React from "react";
import { PropTypes } from "prop-types";

import { CardContainer } from "./../UI/Card/Card.style";
import { CardBody, CardFeature, CardHeader, CardIcon } from "./TopCard.style";

import { TbTransferIn, TbTransferOut } from "react-icons/tb";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

import AreaChart from "../Charts/AreaChart";

import { chartData as chartData } from "../../utils/data/dummyData";

function TopCard({ amount, percent, label, primary, size }) {
  return (
    <CardContainer size={size}>
      <CardHeader>
        <CardHeader style={{ width: "50%" }}>
          <CardIcon primary={primary}>
            {primary ? (
              <TbTransferIn size={25} color="white" />
            ) : (
              <TbTransferOut size={25} color="white" />
            )}
          </CardIcon>
          <div>
            <h4>{label}</h4>
            <h2>{primary ? `+${amount}` : `-${amount}`}</h2>
          </div>
        </CardHeader>
        <CardFeature>
          {percent > 0 ? (
            <>
              <TiArrowSortedUp color="green" size={20} />
              <h4 style={{ color: "green" }}>{percent}%</h4>
            </>
          ) : (
            <>
              <TiArrowSortedDown color="red" size={20} />
              <h4 style={{ color: "red" }}>{percent}%</h4>
            </>
          )}
          {/* <div>last month</div> */}
        </CardFeature>
      </CardHeader>
      <CardBody>
        <AreaChart primary={primary} chartData={chartData} />
      </CardBody>
    </CardContainer>
  );
}

TopCard.propTypes = {
  amount: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "fit"]),
  percent: PropTypes.string,
  label: PropTypes.string,
  primary: PropTypes.bool,
};

export default TopCard;
