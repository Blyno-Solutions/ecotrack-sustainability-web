interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  size?: "sm" | "md" | "lg";
  color?: "green" | "blue" | "yellow" | "red";
}

export default function ProgressBar({
  value,
  max = 100,
  label,
  showValue = true,
  size = "md",
  color = "green",
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const heightClasses = {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-4",
  };

  const colorClasses = {
    green: "bg-green-500 dark:bg-green-400",
    blue: "bg-blue-500 dark:bg-blue-400",
    yellow: "bg-yellow-500 dark:bg-yellow-400",
    red: "bg-red-500 dark:bg-red-400",
  };

  return (
    <div className="w-full">
      {(label || showValue) && (
        <div className="flex justify-between mb-1">
          {label && (
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {label}
            </span>
          )}
          {showValue && (
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}

      <div
        className={`
          w-full bg-gray-200 rounded-full 
          dark:bg-gray-700 
          ${heightClasses[size]}
        `}
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label || "Progress"}
      >
        <div
          className={`
            ${colorClasses[color]} 
            rounded-full h-full 
            transition-all duration-300
          `}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
