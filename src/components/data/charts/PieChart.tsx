import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PieChartProps {
  title: string;
  data?: any[];
  nameKey?: string;
  valueKey?: string;
  colors?: string[];
  height?: number;
  className?: string;
}

export const PieChart = ({
  title,
  data = [],
  nameKey = "name",
  valueKey = "value",
  colors = [
    "hsl(var(--primary))",
    "hsl(var(--secondary))",
    "hsl(var(--accent))",
  ],
  height = 300,
  className = "",
}: PieChartProps) => {
  // This is a placeholder for actual chart implementation
  // In a real implementation, you would use a library like recharts, visx, or d3

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-md font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className="bg-muted/30 rounded-md flex items-center justify-center"
          style={{ height: `${height}px` }}
        >
          <p className="text-muted-foreground text-sm">
            Pie Chart Visualization
          </p>
          {data.length === 0 && (
            <p className="text-muted-foreground text-xs mt-2">
              No data available
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
