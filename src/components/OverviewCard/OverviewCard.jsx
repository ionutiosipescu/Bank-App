import React, { useState } from "react";
import { BsRecordCircleFill } from "react-icons/bs";
import BarChart from "../Charts/BarChart";
import { CardBody } from "../TopCard/TopCard.style";
import { CardContainer, CardHeader } from "./../UI/Card/Card.style";

import { dailyBalanceData as chartData } from "../../utils/data/dummyData";

function OverviewCard() {
  const [primary, setPrimary] = useState(true);

  return (
    <CardContainer size="md">
      <CardHeader flex="row">
        <h3>Overview</h3>
        <div>
          <div onClick={(e) => setPrimary(true)}>
            <BsRecordCircleFill
              color={`${primary ? "var(--purple)" : "var(--gray-dark)"}`}
            />
            <p>This Week</p>
          </div>
          <div onClick={(e) => setPrimary(false)}>
            <BsRecordCircleFill
              color={`${primary ? "var(--gray-dark)" : "var(--blue)"}`}
            />
            <p>Last Week</p>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <BarChart primary={primary} chartData={chartData} />
      </CardBody>
    </CardContainer>
  );
}

export default OverviewCard;
