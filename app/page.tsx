'use client';

import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/card';
import InteractiveCard from '@/components/ui/InteractiveCard';
import ProgressBar from '@/components/ui/ProgressBar';
import CarbonTrendChart from '@/components/charts/CarbonTrendChart';
import UsageDonutChart from '@/components/charts/UsageDonutChart';
import ResponsiveChartWrapper from '@/components/charts/ResponsiveChartWrapper';

export default function Home() {
  const handleCardClick = () => {
    alert('Card clicked!');
  };

  return (
    <main className="container mx-auto p-8 bg-white dark:bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-black dark:text-white">
        EcoTrack Sustainability Dashboard
      </h1>
      
      {/* Badge Examples */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">Badges</h2>
        <div className="flex gap-4 flex-wrap">
          <Badge variant="success">Eco-Friendly</Badge>
          <Badge variant="warning">High Usage</Badge>
          <Badge variant="error">Critical</Badge>
          <Badge variant="info">Information</Badge>
        </div>
      </section>

      {/* Card Examples */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <h3 className="font-medium text-black dark:text-white">Carbon Footprint</h3>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">2.4 kg</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Today's emissions</p>
          </Card>
          
          <Card padding="lg">
            <h3 className="font-medium text-black dark:text-white">Energy Saved</h3>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">15 kWh</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">This week</p>
          </Card>
          
          <InteractiveCard onClick={handleCardClick}>
            <h3 className="font-medium text-black dark:text-white">View Details</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Click for more info</p>
          </InteractiveCard>
        </div>
      </section>

      {/* Progress Bar Examples */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">Progress Bars</h2>
        <div className="space-y-6 max-w-md">
          <ProgressBar value={75} label="Weekly Goal" color="green" />
          <ProgressBar value={45} label="Monthly Target" color="blue" showValue={true} />
          <ProgressBar value={90} label="Almost Done" color="green" size="lg" />
          <ProgressBar value={30} label="Small Size" size="sm" color="yellow" />
          <ProgressBar value={60} label="Custom Max" max={200} color="red" />
        </div>
      </section>

      {/* Charts Section - NEW for Issue #3 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">Interactive Charts</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ResponsiveChartWrapper title="Carbon Trend">
            <CarbonTrendChart />
          </ResponsiveChartWrapper>
          
          <ResponsiveChartWrapper title="Usage Breakdown">
            <UsageDonutChart />
          </ResponsiveChartWrapper>
        </div>
      </section>

      {/* Dark Mode Test Note */}
      <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          🔍 <strong>Test Dark Mode:</strong> Toggle your system dark mode to see colors change automatically!
        </p>
      </div>
    </main>
  );
}