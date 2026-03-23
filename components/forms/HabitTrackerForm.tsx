"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Define the validation schema with Zod - CORRECT SYNTAX
const habitFormSchema = z.object({
  transportMode: z.enum(["car", "bus", "train", "bike", "walk"], {
    message: "Please select a valid transport mode",
  }),
  distance: z
    .number({
      message: "Distance must be a number",
    })
    .min(0, "Distance cannot be negative")
    .max(1000, "Distance cannot exceed 1000 km"),
  energyUsage: z
    .number({
      message: "Energy usage must be a number",
    })
    .min(0, "Energy usage cannot be negative")
    .max(10000, "Energy usage cannot exceed 10000 kWh"),
  wasteManagement: z.enum(["recycle", "compost", "landfill", "reduce"], {
    message: "Please select a valid waste management method",
  }),
  date: z
    .string()
    .min(1, "Date is required")
    .refine(
      (date) => {
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return selectedDate <= today;
      },
      {
        message: "Date cannot be in the future",
      },
    ),
});

// Infer TypeScript type from Zod schema
type HabitFormData = z.infer<typeof habitFormSchema>;

export default function HabitTrackerForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<HabitFormData>({
    resolver: zodResolver(habitFormSchema),
    defaultValues: {
      date: new Date().toISOString().split("T")[0],
    },
  });

  const onSubmit = (data: HabitFormData) => {
    console.log("Form submitted:", data);
    alert("Habit logged successfully!");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
        Log Your Habit
      </h2>

      {/* Transport Mode Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Transport Mode *
        </label>
        <select
          {...register("transportMode")}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
        >
          <option value="">Select transport mode</option>
          <option value="car">Car</option>
          <option value="bus">Bus</option>
          <option value="train">Train</option>
          <option value="bike">Bike</option>
          <option value="walk">Walk</option>
        </select>
        {errors.transportMode && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.transportMode.message}
          </p>
        )}
      </div>

      {/* Distance Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Distance (km) *
        </label>
        <input
          type="number"
          step="0.1"
          {...register("distance", { valueAsNumber: true })}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
          placeholder="Enter distance traveled"
        />
        {errors.distance && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.distance.message}
          </p>
        )}
      </div>

      {/* Energy Usage Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Energy Usage (kWh) *
        </label>
        <input
          type="number"
          step="0.1"
          {...register("energyUsage", { valueAsNumber: true })}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
          placeholder="Enter energy usage"
        />
        {errors.energyUsage && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.energyUsage.message}
          </p>
        )}
      </div>

      {/* Waste Management Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Waste Management *
        </label>
        <select
          {...register("wasteManagement")}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
        >
          <option value="">Select waste method</option>
          <option value="recycle">Recycle</option>
          <option value="compost">Compost</option>
          <option value="landfill">Landfill</option>
          <option value="reduce">Reduce</option>
        </select>
        {errors.wasteManagement && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.wasteManagement.message}
          </p>
        )}
      </div>

      {/* Date Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Date *
        </label>
        <input
          type="date"
          {...register("date")}
          max={new Date().toISOString().split("T")[0]}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
        />
        {errors.date && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.date.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Saving..." : "Log Habit"}
      </button>
    </form>
  );
}
