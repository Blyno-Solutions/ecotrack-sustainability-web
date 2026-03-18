"use client";

import CarbonTrend from "./components\\charts/CarbonTrend";
import UsageDonut from "./components\\charts/UsageDonut";
export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-6">
      
      <h1 className="text-2xl font-bold text-center mb-8 text-black dark:text-white">
        EcoTrack Dashboard
      </h1>

      <div className="flex flex-col gap-10 items-center">

        {/* Line Chart */}
        <div className="w-full max-w-2xl h-64 bg-white dark:bg-zinc-900 p-4 rounded-xl shadow">
          <CarbonTrend />
        </div>

        {/* Donut Chart */}
        <div className="w-full max-w-md h-64 bg-white dark:bg-zinc-900 p-4 rounded-xl shadow">
          <UsageDonut />
        </div>

      </div>
    </div>
  );
}