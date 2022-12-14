import React, { useState } from "react";
import { chartDataIncome as chartData } from "../../utils/data/dummyData";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Charts() {
  const [userData, setUserData] = useState({
    labels: chartData.map((data) => data.month),
    datasets: [
      {
        label: "Income",
        tension: 0.4,
        fill: "origin",
        data: chartData.map((data) => data.income),
        backgroundColor: ["#6160dc50"],
        borderColor: "#6160dc",
      },
    ],
  });

  return <Line data={userData} options={{ plugins: { legend: false } }} />;
}

export default Charts;
