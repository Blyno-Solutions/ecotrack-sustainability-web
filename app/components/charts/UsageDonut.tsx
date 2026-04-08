"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Title);

export default function UsageDonut() {
  const data = {
    labels: ["Transport", "Energy", "Food"],
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: ["#22c55e", "#16a34a", "#4ade80"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Usage Distribution",
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}