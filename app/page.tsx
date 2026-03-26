import CarbonTrendChart from '@/components/charts/CarbonTrendChart';
import UsageDonutChart from '@/components/charts/UsageDonutChart';
import ResponsiveChartWrapper from '@/components/charts/ResponsiveChartWrapper';

export default function Home() {
  return (
    <main className="container mx-auto p-8 bg-white dark:bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-black dark:text-white">
        Interactive Charts
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ResponsiveChartWrapper title="Carbon Trend">
          <CarbonTrendChart />
        </ResponsiveChartWrapper>
        
        <ResponsiveChartWrapper title="Usage Breakdown">
          <UsageDonutChart />
        </ResponsiveChartWrapper>
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          📊 <strong>Interactive Charts:</strong> Hover over data points to see details. Charts are responsive and work on all screen sizes.
        </p>
      </div>
    </main>
  );
}