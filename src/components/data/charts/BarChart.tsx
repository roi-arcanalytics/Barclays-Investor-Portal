import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface BarChartProps {
  title: string;
  data?: any[];
  xAxis?: string;
  yAxis?: string;
  dataKey?: string;
  color?: string;
  height?: number;
  className?: string;
}

export const BarChart = ({
  title,
  data = [],
  xAxis = "category",
  yAxis = "value",
  dataKey = "value",
  color = "hsl(var(--primary))",
  height = 300,
  className = "",
}: BarChartProps) => {
  const formatYAxis = (value: number) => {
    if (value >= 1000000000) {
      return `£${(value / 1000000000).toFixed(1)}bn`;
    } else if (value >= 1000000) {
      return `£${(value / 1000000).toFixed(1)}m`;
    } else if (value >= 1000) {
      return `£${(value / 1000).toFixed(1)}k`;
    }
    return `£${value}`;
  };

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {data.length > 0 ? (
          <div style={{ height: `${height}px`, width: "100%" }}>
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey={xAxis}
                  tick={{ fontSize: 12 }}
                  stroke="#9ca3af"
                />
                <YAxis
                  tickFormatter={formatYAxis}
                  tick={{ fontSize: 12 }}
                  stroke="#9ca3af"
                />
                <Tooltip
                  formatter={(value: number) => [`${formatYAxis(value)}`, ""]}
                  labelFormatter={(label) => `Date: ${label}`}
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "0.375rem",
                    boxShadow:
                      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                  }}
                />
                <Bar dataKey={dataKey} fill={color} radius={[4, 4, 0, 0]} />
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div
            className="bg-muted/30 rounded-md flex items-center justify-center"
            style={{ height: `${height}px` }}
          >
            <p className="text-muted-foreground text-sm">
              Bar Chart Visualization
            </p>
            {data.length === 0 && (
              <p className="text-muted-foreground text-xs mt-2">
                No data available
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
