import React, { useState } from "react";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function AreaChart({ primary, chartData }) {
  const backgroundColor = primary ? "#6160dc50" : "#54c5eb50";
  const borderColor = primary ? "#6160dc" : "#54c5eb";

  const data = chartData.map((data) => (primary ? data.income : data.outcome));

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
