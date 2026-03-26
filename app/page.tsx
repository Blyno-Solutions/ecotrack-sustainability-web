import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import ProgressBar from "@/components/ui/ProgressBar";

export default function Home() {
  return (
    <main className="container mx-auto p-8 bg-white dark:bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-black dark:text-white">
        UI Components - Badge, Card, ProgressBar
      </h1>

      {/* Badges */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
          Badges
        </h2>
        <div className="flex gap-4 flex-wrap">
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
        </div>
      </section>

      {/* Cards */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
          Cards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <h3 className="font-medium text-black dark:text-white">Card 1</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Content goes here
            </p>
          </Card>
          <Card padding="lg">
            <h3 className="font-medium text-black dark:text-white">Card 2</h3>
            <p className="text-gray-600 dark:text-gray-400">Large padding</p>
          </Card>
          <Card padding="sm">
            <h3 className="font-medium text-black dark:text-white">Card 3</h3>
            <p className="text-gray-600 dark:text-gray-400">Small padding</p>
          </Card>
        </div>
      </section>

      {/* Progress Bars */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
          Progress Bars
        </h2>
        <div className="space-y-6 max-w-md">
          <ProgressBar value={75} label="Progress" color="green" />
          <ProgressBar value={45} label="Monthly Goal" color="blue" />
          <ProgressBar value={90} label="Almost Done" size="lg" color="green" />
          <ProgressBar value={30} label="Small" size="sm" color="yellow" />
        </div>
      </section>

      {/* Note */}
      <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          🔍 <strong>Test Dark Mode:</strong> Toggle your system dark mode to
          see colors change automatically!
        </p>
      </div>
    </main>
  );
}
