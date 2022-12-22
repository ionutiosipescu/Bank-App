import React, { useState, useEffect } from "react";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, UpdateModeEnum } from "chart.js/auto";

function BarChart({ primary, chartData }) {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    setUserData(
      chartData.map((data) => (primary ? data.thisWeek : data.lastWeek))
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
        backgroundColor: primary ? "#6160dc" : "#54c5eb",
      },
    ],
  };

  return (
    <Bar
      data={data}
      options={{
        plugins: { legend: false },
        responsive: true,
        update: true,
      }}
    />
  );
}

export default BarChart;
