import React, { useState } from "react";
import DoughnutChart from "../Charts/DoughnutChart";
import { CardBody } from "../TopCard/TopCard.style";
import { CardContainer, CardHeader } from "./../UI/Card/Card.style";

import { outcomeData as chartData } from "../../utils/data/dummyData";
import { OutcomeBody } from "./OutcomeChart.style";

function OutcomeChart() {
  const [primary, setPrimary] = useState(true);

  return (
    <CardContainer size="md">
      <CardHeader flex="row">
        <h3>Outcome Categories</h3>
      </CardHeader>
      <CardBody style={{ paddingBottom: "40px" }}>
        <DoughnutChart primary={primary} chartData={chartData} />
        <OutcomeBody>
          <h2>Legend</h2>
          <div>
            {chartData.map((item) => (
              <h5>{item.item}</h5>
            ))}
          </div>
        </OutcomeBody>
      </CardBody>
    </CardContainer>
  );
}

export default OutcomeChart;
