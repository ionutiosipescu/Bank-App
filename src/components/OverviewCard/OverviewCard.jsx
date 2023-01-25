import React, { useState } from "react";
import { BsRecordCircleFill } from "react-icons/bs";
import BarChart from "../Charts/BarChart";
import { CardBody } from "../TopCard/TopCard.style";
import { CardContainer, CardHeader } from "./../UI/Card/Card.style";

import { dailyBalanceData as chartData } from "../../utils/data/dummyData";
import { Item } from "./OverviewCard.style";

function OverviewCard() {
  const [primary, setPrimary] = useState("primary");

  return (
    <CardContainer size="md">
      <CardHeader flex="row">
        <h3>Overview</h3>
        <div>
          <Item onClick={() => setPrimary("primary")}>
            <BsRecordCircleFill
              color={`${
                primary === "primary" ? "var(--purple)" : "var(--gray-dark)"
              }`}
            />
            <p>This Week</p>
          </Item>
          <Item onClick={() => setPrimary("secondary")}>
            <BsRecordCircleFill
              color={`${
                primary === "primary" ? "var(--gray-dark)" : "var(--blue)"
              }`}
            />
            <p>Last Week</p>
          </Item>
        </div>
      </CardHeader>
      <CardBody>
        <BarChart primary={primary} chartData={chartData} />
      </CardBody>
    </CardContainer>
  );
}

export default OverviewCard;
