import React, { useState } from "react";
import DoughnutChart from "../Charts/DoughnutChart";
import { CardBody } from "../TopCard/TopCard.style";
import { CardContainer, CardHeader } from "../UI/Card/Card.style";

import { outcomeData as chartData } from "../../utils/data/dummyData";
import { ChartWrapper, LegendItem, OutcomeBody } from "./OutcomeCard.style";
import { BsCircleFill } from "react-icons/bs";

function OutcomeChart() {
  return (
    <CardContainer size="md">
      <CardHeader flex="row">
        <h3>Outcome Categories</h3>
      </CardHeader>
      <CardBody>
        <ChartWrapper>
          <DoughnutChart chartData={chartData} />
        </ChartWrapper>
        <OutcomeBody>
          <h3 style={{ marginBottom: "20px" }}>Legend</h3>
          {chartData.map((item) => (
            <LegendItem key={item.id}>
              <div>
                <BsCircleFill color={item.color} />
                <h4>
                  {item.item} {`(${item.percentage}%)`}
                </h4>
              </div>
              <h4>{item.amount}</h4>
            </LegendItem>
          ))}
        </OutcomeBody>
      </CardBody>
    </CardContainer>
  );
}

export default OutcomeChart;
