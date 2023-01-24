import React, { useState, useEffect } from "react";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, UpdateModeEnum } from "chart.js/auto";

function BarChart({ primary, chartData }) {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    setUserData(
      chartData.map((data) =>
        primary === "primary" ? data.thisWeek : data.lastWeek
      )
    );

    return () => {
      setUserData();
    };
  }, [primary]);

  const data = {
    labels: chartData.map((data) => data.day),
    datasets: [
      {
        fill: "origin",
        data: userData,
        backgroundColor: primary === "primary" ? "#6160dc" : "#54c5eb",
      },
    ],
  };

  const options = {
    plugins: { legend: false },
    scales: {
      x: { grid: { display: false }, ticks: { display: false } },
      y: { grid: { display: false }, ticks: { display: false } },
    },
    maintainAspectRatio: false,
  };

  return <Bar data={data} options={options} />;
}

export default BarChart;
