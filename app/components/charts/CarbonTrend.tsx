"use client";

import {
  Line
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip);

export default function CarbonTrend() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Carbon Emission",
        data: [30, 45, 28, 60, 50],
        borderColor: "#22c55e",
        backgroundColor: "#dcfce7",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Carbon Emission Trend",
      },
    },
  };

  return <Line data={data} options={options} />;
}