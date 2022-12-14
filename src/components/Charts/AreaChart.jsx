import React, { useState } from "react";
import { chartData as chartData } from "../../utils/data/dummyData";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function AreaChart({ isPrimary }) {
  const backgroundColor = isPrimary ? "#6160dc50" : "#54c5eb50";
  const borderColor = isPrimary ? "#6160dc" : "#54c5eb";

  const data = chartData.map((data) =>
    isPrimary ? data.income : data.outcome
  );

  const [userData, setUserData] = useState({
    labels: chartData.map((data) => data.month),
    datasets: [
      {
        tension: 0.4,
        fill: "origin",
        data: data,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
      },
    ],
  });

  return <Line data={userData} options={{ plugins: { legend: false } }} />;
}

export default AreaChart;
