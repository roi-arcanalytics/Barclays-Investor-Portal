import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
  trend?: "up" | "down" | "neutral";
  trendLabel?: string;
  className?: string;
}

export const KpiCard = ({
  title,
  value,
  change,
  icon,
  trend = "neutral",
  trendLabel,
  className,
}: KpiCardProps) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold mt-2">{value}</h3>

            {(change !== undefined || trendLabel) && (
              <div className="flex items-center mt-2">
                {trend === "up" && (
                  <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                )}
                {trend === "down" && (
                  <ArrowDown className="h-4 w-4 text-red-500 mr-1" />
                )}
                <span
                  className={cn(
                    "text-xs font-medium",
                    trend === "up" && "text-green-500",
                    trend === "down" && "text-red-500",
                  )}
                >
                  {change !== undefined && `${change > 0 ? "+" : ""}${change}%`}
                  {trendLabel && (!change ? trendLabel : ` ${trendLabel}`)}
                </span>
              </div>
            )}
          </div>

          {icon && <div className="p-2 bg-primary/10 rounded-full">{icon}</div>}
        </div>
      </CardContent>
    </Card>
  );
};
