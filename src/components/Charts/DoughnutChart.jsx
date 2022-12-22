import React, { useState, useEffect } from "react";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function DoughnutChart({ primary, chartData }) {
  const [userData, setUserData] = useState({
    labels: chartData.map((data) => data.item),
    datasets: [
      {
        fill: "origin",
        data: chartData.map((data) => data.amount),
        backgroundColor: [
          "#6160dc",
          "#54c5eb",
          "#ffb74a",
          "#ff4a55",
          "#00a389",
        ],
      },
    ],
  });

  return (
    <Doughnut
      data={userData}
      options={{
        plugins: { legend: false },
        responsive: true,
        update: true,
      }}
    />
  );
}

export default DoughnutChart;
