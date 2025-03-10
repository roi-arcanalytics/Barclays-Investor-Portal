import React, { useState } from "react";
import { DateRangeFilter } from "./DateRangeFilter";
import { SelectFilter } from "./SelectFilter";
import { Button } from "@/components/ui/button";
import { DateRange } from "react-day-picker";
import { RefreshCw, Filter } from "lucide-react";

interface FilterBarProps {
  onFilterChange: (filters: any) => void;
  filterOptions?: {
    portfolios?: { label: string; value: string }[];
    assetClasses?: { label: string; value: string }[];
    regions?: { label: string; value: string }[];
    ratings?: { label: string; value: string }[];
  };
  className?: string;
}

export const FilterBar = ({
  onFilterChange,
  filterOptions = {
    portfolios: [],
    assetClasses: [],
    regions: [],
    ratings: [],
  },
  className = "",
}: FilterBarProps) => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [portfolio, setPortfolio] = useState<string>("");
  const [assetClass, setAssetClass] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [rating, setRating] = useState<string>("");

  const handleApplyFilters = () => {
    onFilterChange({
      dateRange,
      portfolio,
      assetClass,
      region,
      rating,
    });
  };

  const handleResetFilters = () => {
    setDateRange(undefined);
    setPortfolio("");
    setAssetClass("");
    setRegion("");
    setRating("");
    onFilterChange({});
  };

  return (
    <div className={`flex flex-wrap gap-3 items-center ${className}`}>
      <div className="flex items-center gap-1">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium">Filters:</span>
      </div>

      <DateRangeFilter dateRange={dateRange} onDateRangeChange={setDateRange} />

      {filterOptions.portfolios && filterOptions.portfolios.length > 0 && (
        <SelectFilter
          placeholder="Portfolio"
          options={filterOptions.portfolios}
          value={portfolio}
          onChange={setPortfolio}
        />
      )}

      {filterOptions.assetClasses && filterOptions.assetClasses.length > 0 && (
        <SelectFilter
          placeholder="Asset Class"
          options={filterOptions.assetClasses}
          value={assetClass}
          onChange={setAssetClass}
        />
      )}

      {filterOptions.regions && filterOptions.regions.length > 0 && (
        <SelectFilter
          placeholder="Region"
          options={filterOptions.regions}
          value={region}
          onChange={setRegion}
        />
      )}

      {filterOptions.ratings && filterOptions.ratings.length > 0 && (
        <SelectFilter
          placeholder="Rating"
          options={filterOptions.ratings}
          value={rating}
          onChange={setRating}
        />
      )}

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
