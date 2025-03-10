import React, { useState } from "react";
import { FilterBar } from "@/components/data/filters/FilterBar";
import { PieChart } from "@/components/data/charts/PieChart";
import { BarChart } from "@/components/data/charts/BarChart";
import { LineChart } from "@/components/data/charts/LineChart";
import { DataTable } from "@/components/data/tables/DataTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const PortfolioPage = () => {
  const [filters, setFilters] = useState({});

  // Sample filter options
  const filterOptions = {
    portfolios: [
      { label: "All Portfolios", value: "all" },
      { label: "Mortgage-Backed", value: "mbs" },
      { label: "Asset-Backed", value: "abs" },
      { label: "CLOs", value: "clo" },
    ],
    assetClasses: [
      { label: "All Classes", value: "all" },
      { label: "Residential", value: "residential" },
      { label: "Commercial", value: "commercial" },
      { label: "Consumer", value: "consumer" },
      { label: "Corporate", value: "corporate" },
    ],
    regions: [
      { label: "All Regions", value: "all" },
      { label: "North America", value: "na" },
      { label: "Europe", value: "eu" },
      { label: "Asia Pacific", value: "apac" },
    ],
    ratings: [
      { label: "All Ratings", value: "all" },
      { label: "AAA", value: "aaa" },
      { label: "AA", value: "aa" },
      { label: "A", value: "a" },
      { label: "BBB", value: "bbb" },
      { label: "BB and Below", value: "bb_below" },
    ],
  };

  // Sample table columns and data
  const columns = [
    { key: "id", label: "ID", sortable: true },
    { key: "name", label: "Security Name", sortable: true },
    { key: "type", label: "Type", sortable: true },
    { key: "rating", label: "Rating", sortable: true },
    { key: "value", label: "Value ($)", sortable: true },
    { key: "yield", label: "Yield (%)", sortable: true },
    { key: "maturity", label: "Maturity", sortable: true },
  ];

  const tableData = [
    {
      id: "001",
      name: "FNMA 2023-01 A1",
      type: "MBS",
      rating: "AAA",
      value: 1250000,
      yield: 4.25,
      maturity: "2053-01-15",
    },
    {
      id: "002",
      name: "FHLMC 2022-12 B1",
      type: "MBS",
      rating: "AA",
      value: 750000,
      yield: 4.75,
      maturity: "2052-12-01",
    },
    {
      id: "003",
      name: "CMBS 2023-OFFICE A1",
      type: "CMBS",
      rating: "AAA",
      value: 2000000,
      yield: 5.1,
      maturity: "2033-06-30",
    },
    {
      id: "004",
      name: "AUTO 2023-1 A3",
      type: "ABS",
      rating: "AAA",
      value: 500000,
      yield: 4.5,
      maturity: "2028-03-15",
    },
    {
      id: "005",
      name: "CARDS 2022-A A2",
      type: "ABS",
      rating: "AA",
      value: 750000,
      yield: 4.85,
      maturity: "2027-05-20",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">
          Portfolio Analysis
        </h1>
      </div>

      <FilterBar
        onFilterChange={setFilters}
        filterOptions={filterOptions}
        className="p-4 bg-card rounded-lg border"
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <div className="rounded-lg border bg-card p-4">
          <div className="text-sm font-medium text-muted-foreground">
            Total Investment Value
          </div>
          <div className="text-2xl font-bold mt-2">£4.82bn</div>
          <div className="text-sm text-green-500 mt-1">
            Year-on-year change: +6.2%
          </div>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <div className="text-sm font-medium text-muted-foreground">
            Total Active Positions
          </div>
          <div className="text-2xl font-bold mt-2">43</div>
          <div className="text-sm text-green-500 mt-1">
            Year-on-year change: +7.5%
          </div>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <div className="text-sm font-medium text-muted-foreground">
            Weighted Average Coupon
          </div>
          <div className="text-2xl font-bold mt-2">3.21%</div>
          <div className="text-sm text-red-500 mt-1">
            Year-on-year change: -0.2%
          </div>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <div className="text-sm font-medium text-muted-foreground">
            Weighted Average Maturity
          </div>
          <div className="text-2xl font-bold mt-2">19.82 Years</div>
          <div className="text-sm text-green-500 mt-1">
            Year-on-year change: +2.3%
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-md font-medium">
              Portfolio Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Total Value:
                </span>
                <span className="text-sm font-medium">$5,750,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Number of Securities:
                </span>
                <span className="text-sm font-medium">5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Average Yield:
                </span>
                <span className="text-sm font-medium">4.69%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Average Maturity:
                </span>
                <span className="text-sm font-medium">15.2 years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Average Rating:
                </span>
                <span className="text-sm font-medium">AA+</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <PieChart title="Asset Type Allocation" height={200} />

        <PieChart title="Rating Distribution" height={200} />
      </div>

      <Tabs defaultValue="composition" className="w-full">
        <TabsList>
          <TabsTrigger value="composition">Composition</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="cashflows">Cashflows</TabsTrigger>
          <TabsTrigger value="comparison">Comparison</TabsTrigger>
        </TabsList>

        <TabsContent value="composition" className="space-y-4 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BarChart title="Allocation by Asset Type" height={250} />
            <BarChart title="Allocation by Rating" height={250} />
          </div>
          <DataTable
            title="Portfolio Holdings"
            columns={columns}
            data={tableData}
          />
        </TabsContent>

        <TabsContent value="performance" className="space-y-4 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LineChart title="Historical Performance" height={250} />
            <BarChart title="Performance by Asset Type" height={250} />
          </div>
          <LineChart title="Cumulative Returns vs Benchmark" height={300} />
        </TabsContent>

        <TabsContent value="cashflows" className="space-y-4 pt-4">
          <LineChart title="Projected Cashflows" height={300} />
          <BarChart title="Monthly Cashflow Projection" height={300} />
        </TabsContent>

        <TabsContent value="comparison" className="space-y-4 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LineChart title="Portfolio vs Benchmark" height={250} />
            <BarChart title="Relative Performance" height={250} />
          </div>
          <DataTable
            title="Comparison Metrics"
            columns={[
              { key: "metric", label: "Metric", sortable: true },
              { key: "portfolio", label: "Portfolio", sortable: true },
              { key: "benchmark", label: "Benchmark", sortable: true },
              { key: "difference", label: "Difference", sortable: true },
            ]}
            data={[
              {
                metric: "Total Return (YTD)",
                portfolio: "3.45%",
                benchmark: "2.98%",
                difference: "+0.47%",
              },
              {
                metric: "Yield",
                portfolio: "4.69%",
                benchmark: "4.25%",
                difference: "+0.44%",
              },
              {
                metric: "Duration",
                portfolio: "5.2",
                benchmark: "4.8",
                difference: "+0.4",
              },
              {
                metric: "Sharpe Ratio",
                portfolio: "1.2",
                benchmark: "1.0",
                difference: "+0.2",
              },
              {
                metric: "Volatility",
                portfolio: "3.5%",
                benchmark: "3.8%",
                difference: "-0.3%",
              },
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};
