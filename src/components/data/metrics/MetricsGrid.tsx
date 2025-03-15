import React from "react";
import { KpiCard } from "./KpiCard";
import {
  BarChart,
  LineChart,
  PieChart,
  TrendingUp,
  DollarSign,
} from "lucide-react";

interface MetricsGridProps {
  metrics?: {
    title: string;
    value: string | number;
    change?: number;
    trend?: "up" | "down" | "neutral";
    trendLabel?: string;
    icon?: "chart" | "bar" | "pie" | "trend" | "dollar";
  }[];
  className?: string;
}

export const MetricsGrid = ({
  metrics = [
    {
      title: "Total Deals",
      value: "20",
      change: 3,
      trend: "up",
      trendLabel: "vs last quarter",
      icon: "bar",
    },
    {
      title: "Total Balance",
      value: "£17.2bn",
      change: 2.1,
      trend: "up",
      trendLabel: "vs last quarter",
      icon: "dollar",
    },
    {
      title: "Avg WA Interest Rate",
      value: "3.48%",
      change: -0.2,
      trend: "down",
      trendLabel: "vs last quarter",
      icon: "chart",
    },
    {
      title: "Avg WA Remaining Term",
      value: "22.1 Years",
      change: 0.3,
      trend: "up",
      trendLabel: "vs last quarter",
      icon: "trend",
    },
  ],
  className = "",
}: MetricsGridProps) => {
  const getIcon = (iconType?: string) => {
    switch (iconType) {
      case "chart":
        return <LineChart className="h-5 w-5 text-primary" />;
      case "bar":
        return <BarChart className="h-5 w-5 text-primary" />;
      case "pie":
        return <PieChart className="h-5 w-5 text-primary" />;
      case "trend":
        return <TrendingUp className="h-5 w-5 text-primary" />;
      case "dollar":
        return <DollarSign className="h-5 w-5 text-primary" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}
    >
      {metrics.map((metric, index) => (
        <KpiCard
          key={index}
          title={metric.title}
          value={metric.value}
          change={metric.change}
          trend={metric.trend}
          trendLabel={metric.trendLabel}
          icon={getIcon(metric.icon)}
        />
      ))}
    </div>
  );
};
