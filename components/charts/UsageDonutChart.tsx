"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

// Dummy data for energy usage breakdown
const dummyData = {
  labels: ["Electricity", "Transportation", "Heating", "Water", "Waste"],
  datasets: [
    {
      label: "Energy Usage (kWh)",
      data: [450, 320, 280, 150, 90],
      backgroundColor: [
        "rgba(34, 197, 94, 0.8)",
        "rgba(59, 130, 246, 0.8)",
        "rgba(234, 179, 8, 0.8)",
        "rgba(168, 85, 247, 0.8)",
        "rgba(239, 68, 68, 0.8)",
      ],
      borderColor: [
        "rgb(34, 197, 94)",
        "rgb(59, 130, 246)",
        "rgb(234, 179, 8)",
        "rgb(168, 85, 247)",
        "rgb(239, 68, 68)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        color: "rgb(107, 114, 128)",
      },
    },
    title: {
      display: true,
      text: "Energy Usage Breakdown",
      color: "rgb(107, 114, 128)",
    },
  },
};

// FIXED: Removed useEffect, use simple state initialization
export default function UsageDonutChart() {
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
      <Doughnut data={dummyData} options={options} />
    </div>
  );
}
