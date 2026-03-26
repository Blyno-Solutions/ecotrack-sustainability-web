"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const dummyData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Carbon Footprint (kg CO₂)",
      data: [320, 295, 310, 280, 260, 240, 225, 210, 195, 180, 170, 155],
      borderColor: "rgb(34, 197, 94)",
      backgroundColor: "rgba(34, 197, 94, 0.1)",
      tension: 0.4,
      fill: true,
      pointBackgroundColor: "rgb(34, 197, 94)",
      pointBorderColor: "#fff",
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        color: "rgb(107, 114, 128)",
        font: {
          size: 12,
        },
      },
    },
    tooltip: {
      mode: "index" as const,
      intersect: false,
    },
    title: {
      display: true,
      text: "Carbon Footprint Trend",
      color: "rgb(107, 114, 128)",
      font: {
        size: 14,
        weight: "normal" as const,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(107, 114, 128, 0.1)",
      },
      ticks: {
        color: "rgb(107, 114, 128)",
        callback: function (tickValue: string | number) {
          return tickValue + " kg";
        },
      },
      title: {
        display: true,
        text: "CO₂ Emissions (kg)",
        color: "rgb(107, 114, 128)",
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "rgb(107, 114, 128)",
      },
      title: {
        display: true,
        text: "Month",
        color: "rgb(107, 114, 128)",
      },
    },
  },
  interaction: {
    mode: "nearest" as const,
    axis: "x" as const,
    intersect: false,
  },
};
export default function CarbonTrendChart() {
  return (
    <div className="w-full h-[400px] p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <Line data={dummyData} options={options} />
    </div>
  );
}
