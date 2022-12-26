import React, { useState } from "react";
import DoughnutChart from "../Charts/DoughnutChart";
import { CardBody } from "../TopCard/TopCard.style";
import { CardContainer, CardHeader } from "./../UI/Card/Card.style";

import { outcomeData as chartData } from "../../utils/data/dummyData";
import { LegendItem, OutcomeBody } from "./OutcomeChart.style";
import { BsCircleFill } from "react-icons/bs";

function OutcomeChart() {
  return (
    <CardContainer size="md">
      <CardHeader flex="row">
        <h3>Outcome Categories</h3>
      </CardHeader>
      <CardBody style={{ padding: "10px 20px 40px 20px" }}>
        <DoughnutChart chartData={chartData} />
        <OutcomeBody>
          <h2 style={{ marginBottom: "20px" }}>Legend</h2>
          {chartData.map((item) => (
            <LegendItem key={item.id}>
              <BsCircleFill color={item.color} />
              <h4>{item.item}</h4>
            </LegendItem>
          ))}
        </OutcomeBody>
      </CardBody>
    </CardContainer>
  );
}

export default OutcomeChart;
