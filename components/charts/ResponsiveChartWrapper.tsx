"use client";

import type { ReactNode } from "react";

interface ResponsiveChartWrapperProps {
  children: ReactNode;
  title?: string;
}

export default function ResponsiveChartWrapper({
  children,
  title,
}: ResponsiveChartWrapperProps) {
  return (
    <div className="w-full">
      {title ? (
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
          {title}
        </h3>
      ) : null}

      <div className="w-full overflow-x-auto">
        <div className="min-w-[280px] sm:min-w-[300px] md:min-w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
