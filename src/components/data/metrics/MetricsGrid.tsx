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
      title: "Total Portfolio Value",
      value: "$1,234,567",
      change: 2.5,
      trend: "up",
      trendLabel: "vs last month",
      icon: "dollar",
    },
    {
      title: "Average Yield",
      value: "4.2%",
      change: -0.3,
      trend: "down",
      trendLabel: "vs last month",
      icon: "chart",
    },
    {
      title: "Risk Score",
      value: "72/100",
      change: 5,
      trend: "up",
      trendLabel: "vs last month",
      icon: "trend",
    },
    {
      title: "Asset Diversification",
      value: "8 Classes",
      trendLabel: "Well diversified",
      trend: "neutral",
      icon: "pie",
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
