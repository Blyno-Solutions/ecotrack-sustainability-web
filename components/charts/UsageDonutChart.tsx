"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  TooltipItem,
  ChartData,
  ChartOptions,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const dummyData: ChartData<"doughnut", number[], string> = {
  labels: ["Electricity", "Transportation", "Heating", "Water", "Waste"],
  datasets: [
    {
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
      borderWidth: 2,
      hoverOffset: 10,
    },
  ],
};

const options: ChartOptions<"doughnut"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        color: "rgb(107, 114, 128)",
        font: { size: 12 },
        usePointStyle: true,
        padding: 20,
      },
    },
    tooltip: {
      callbacks: {
        label: function (context: TooltipItem<"doughnut">) {
          const label = context.label || "";
          const value = Number(context.raw);

          const total = (context.dataset.data as number[]).reduce(
            (a, b) => a + b,
            0,
          );

          const percentage = Math.round((value / total) * 100);

          return `${label}: ${value} kWh (${percentage}%)`;
        },
      },
    },
    title: {
      display: true,
      text: "Energy Usage Breakdown",
      color: "rgb(107, 114, 128)",
      font: {
        size: 14,
        weight: "normal",
      },
    },
  },
  cutout: "60%",
  radius: "90%",
};

export default function UsageDonutChart() {
  return (
    <div className="w-full h-[400px] p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <Doughnut data={dummyData} options={options} />
    </div>
  );
}
