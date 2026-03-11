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
import { useState } from "react";

// Register ChartJS components
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

// Dummy data for carbon trend
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
      label: "Carbon Footprint (kg CO2)",
      data: [320, 295, 310, 280, 260, 240, 225, 210, 195, 180, 170, 155],
      borderColor: "rgb(34, 197, 94)",
      backgroundColor: "rgba(34, 197, 94, 0.1)",
      tension: 0.4,
      fill: true,
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
      },
    },
    title: {
      display: true,
      text: "Carbon Footprint Trend",
      color: "rgb(107, 114, 128)",
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
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "rgb(107, 114, 128)",
      },
    },
  },
};

// FIXED: Removed useEffect, use simple state initialization
export default function CarbonTrendChart() {
  // This ensures we only render on client
  const [isMounted] = useState(true); // Just set to true directly

  if (!isMounted) {
    return (
      <div className="h-[400px] flex items-center justify-center">
        Loading chart...
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <Line data={dummyData} options={options} />
    </div>
  );
}
