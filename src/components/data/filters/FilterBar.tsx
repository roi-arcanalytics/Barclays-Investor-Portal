import React, { useState } from "react";
import { DateRangeFilter } from "./DateRangeFilter";
import { SelectFilter } from "./SelectFilter";
import { MultiSelectFilter } from "./MultiSelectFilter";
import { Button } from "@/components/ui/button";
import { DateRange } from "react-day-picker";
import { RefreshCw, Filter } from "lucide-react";

interface FilterBarProps {
  onFilterChange: (filters: any) => void;
  filterOptions?: {
    deals?: { label: string; value: string }[];
  };
  className?: string;
  multiSelect?: boolean;
}

export const FilterBar = ({
  onFilterChange,
  filterOptions = {
    deals: [],
  },
  className = "",
  multiSelect = false,
}: FilterBarProps) => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [deal, setDeal] = useState<string>("");
  const [selectedDeals, setSelectedDeals] = useState<string[]>([]);

  const handleApplyFilters = () => {
    onFilterChange({
      dateRange,
      deal: multiSelect ? undefined : deal,
      deals: multiSelect ? selectedDeals : undefined,
    });
  };

  const handleResetFilters = () => {
    setDateRange(undefined);
    setDeal("");
    setSelectedDeals([]);
    onFilterChange({});
  };

  return (
    <div className={`flex flex-wrap gap-3 items-center ${className}`}>
      <div className="flex items-center gap-1">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium">Filters:</span>
      </div>

      <DateRangeFilter dateRange={dateRange} onDateRangeChange={setDateRange} />

      {filterOptions.deals &&
        filterOptions.deals.length > 0 &&
        (multiSelect ? (
          <MultiSelectFilter
            placeholder="Select Multiple Deals"
            options={filterOptions.deals}
            selectedValues={selectedDeals}
            onChange={setSelectedDeals}
          />
        ) : (
          <SelectFilter
            placeholder="Select a Deal"
            options={filterOptions.deals}
            value={deal}
            onChange={setDeal}
          />
        ))}

      <div className="flex gap-2 ml-auto">
        <Button size="sm" variant="outline" onClick={handleResetFilters}>
          Reset
        </Button>
        <Button size="sm" onClick={handleApplyFilters}>
          <RefreshCw className="h-4 w-4 mr-2" />
          Apply
        </Button>
      </div>
    </div>
  );
};
