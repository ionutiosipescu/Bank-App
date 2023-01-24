import React, { useState } from "react";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function AreaChart({ primary, chartData }) {
  const backgroundColor = primary === "primary" ? "#6160dc50" : "#54c5eb50";
  const borderColor = primary === "primary" ? "#6160dc" : "#54c5eb";

  const data = chartData.map((data) =>
    primary === "primary" ? data.income : data.outcome
  );

  const [userData, setUserData] = useState({
    data: {
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
    },
    options: {
      plugins: { legend: false },
      scales: {
        x: { grid: { display: false }, ticks: { display: false } },
        y: { grid: { display: false }, ticks: { display: false } },
      },
      maintainAspectRatio: false,
    },
  });

  return <Line data={userData.data} options={userData.options} />;
}

export default AreaChart;
