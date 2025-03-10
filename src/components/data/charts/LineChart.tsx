import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LineChartProps {
  title: string;
  data?: any[];
  xAxis?: string;
  yAxis?: string;
  color?: string;
  height?: number;
  className?: string;
}

export const LineChart = ({
  title,
  data = [],
  xAxis = "date",
  yAxis = "value",
  color = "hsl(var(--primary))",
  height = 300,
  className = "",
}: LineChartProps) => {
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
            Line Chart Visualization
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
