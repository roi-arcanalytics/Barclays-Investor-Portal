import React, { useState } from "react";
import { FilterBar } from "@/components/data/filters/FilterBar";
import { LineChart } from "@/components/data/charts/LineChart";
import { HeatMap } from "@/components/data/charts/HeatMap";
import { ScatterPlot } from "@/components/data/charts/ScatterPlot";
import { DataTable } from "@/components/data/tables/DataTable";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/custom-tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const MarketPage = () => {
  const [filters, setFilters] = useState({});

  // Deal filter options based on deal names
  const filterOptions = {
    deals: [
      { label: "Hawksmoor Residential Mortgages plc", value: "hawksmoor" },
      { label: "Darrowby Mortgages Limited", value: "darrowby" },
      { label: "Lanark Master Issuer plc", value: "lanark" },
      { label: "Gosforth Funding plc", value: "gosforth" },
      { label: "Precise Mortgage Funding plc", value: "precise" },
      { label: "Stratton Mortgage Funding plc", value: "stratton" },
      { label: "Trinity Square Residential Mortgages plc", value: "trinity" },
      { label: "Finsbury Square Mortgage Trust Limited", value: "finsbury" },
      { label: "Sequoia Mortgage Trust REIT", value: "sequoia" },
      { label: "Flagstar RMBS Trust", value: "flagstar" },
      { label: "Granite Mortgage Securities plc", value: "granite" },
      { label: "Aire Valley Mortgages plc", value: "aire" },
      { label: "Silverstone Master Issuer plc", value: "silverstone" },
      { label: "Permanent Master Issuer plc", value: "permanent" },
      { label: "Holmes Master Issuer plc", value: "holmes" },
      { label: "Progressive Building Society RMBS", value: "progressive" },
      { label: "Shawbrook Mortgage Trust", value: "shawbrook" },
      { label: "Skipton Covered Bond LLP", value: "skipton" },
      { label: "Tandem Bank Mortgage Securities", value: "tandem" },
      { label: "The Mortgage Lender Securitisation", value: "tml" },
    ],
  };

  // Sample market data table
  const marketDataColumns = [
    { key: "index", label: "Index", sortable: true },
    { key: "value", label: "Value", sortable: true },
    { key: "change", label: "Change", sortable: true },
    { key: "percentChange", label: "% Change", sortable: true },
    { key: "ytd", label: "YTD", sortable: true },
  ];

  const marketDataRows = [
    {
      index: "US MBS Index",
      value: "1,045.32",
      change: "+0.45",
      percentChange: "+0.04%",
      ytd: "+2.15%",
    },
    {
      index: "US ABS Index",
      value: "987.65",
      change: "+0.32",
      percentChange: "+0.03%",
      ytd: "+1.87%",
    },
    {
      index: "US CMBS Index",
      value: "1,123.78",
      change: "-0.56",
      percentChange: "-0.05%",
      ytd: "+1.45%",
    },
    {
      index: "US CLO Index",
      value: "1,234.56",
      change: "+1.23",
      percentChange: "+0.10%",
      ytd: "+3.25%",
    },
    {
      index: "EU Structured Credit",
      value: "876.54",
      change: "-0.32",
      percentChange: "-0.04%",
      ytd: "+0.95%",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Market Analytics</h1>
      </div>

      <FilterBar
        onFilterChange={setFilters}
        filterOptions={filterOptions}
        className="p-4 bg-card rounded-lg border"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-md font-medium">
              Market Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Market Sentiment:
                </span>
                <span className="text-sm font-medium text-green-500">
                  Positive
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Volatility Index:
                </span>
                <span className="text-sm font-medium">18.5 (Low)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Avg. Spread Change:
                </span>
                <span className="text-sm font-medium">-2.5 bps</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Issuance Trend:
                </span>
                <span className="text-sm font-medium">Increasing</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Liquidity Index:
                </span>
                <span className="text-sm font-medium">72/100</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <LineChart title="Market Indices" height={200} />

        <LineChart title="Spread Trends" height={200} />
      </div>

      <DataTable
        title="Market Indices"
        columns={marketDataColumns}
        data={marketDataRows}
      />

      <Tabs defaultValue="trends" className="w-full">
        <TabsList>
          <TabsTrigger value="trends">Market Trends</TabsTrigger>
          <TabsTrigger value="correlations">Correlations</TabsTrigger>
          <TabsTrigger value="spreads">Spread Analysis</TabsTrigger>
          <TabsTrigger value="issuance">Issuance</TabsTrigger>
        </TabsList>

        <TabsContent value="trends" className="space-y-4 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LineChart title="Historical Trends" height={250} />
            <LineChart title="Yield Curves" height={250} />
          </div>
          <HeatMap title="Asset Class Performance Heatmap" height={300} />
        </TabsContent>

        <TabsContent value="correlations" className="space-y-4 pt-4">
          <ScatterPlot title="Correlation Matrix" height={400} />
          <DataTable
            title="Correlation Coefficients"
            columns={[
              { key: "asset1", label: "Asset Class 1", sortable: true },
              { key: "asset2", label: "Asset Class 2", sortable: true },
              { key: "correlation", label: "Correlation", sortable: true },
              { key: "strength", label: "Strength", sortable: true },
            ]}
            data={[
              {
                asset1: "MBS",
                asset2: "Treasury",
                correlation: "0.85",
                strength: "Strong Positive",
              },
              {
                asset1: "CMBS",
                asset2: "Corporate",
                correlation: "0.72",
                strength: "Strong Positive",
              },
              {
                asset1: "ABS",
                asset2: "Equity",
                correlation: "0.35",
                strength: "Weak Positive",
              },
              {
                asset1: "CLO",
                asset2: "High Yield",
                correlation: "0.68",
                strength: "Moderate Positive",
              },
              {
                asset1: "RMBS",
                asset2: "Housing Index",
                correlation: "0.91",
                strength: "Strong Positive",
              },
            ]}
          />
        </TabsContent>

        <TabsContent value="spreads" className="space-y-4 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LineChart title="Spread History" height={250} />
            <LineChart title="Spread vs Treasury" height={250} />
          </div>
          <HeatMap title="Spread by Rating and Sector" height={300} />
        </TabsContent>

        <TabsContent value="issuance" className="space-y-4 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LineChart title="Issuance Volume Trend" height={250} />
            <LineChart title="Issuance by Rating" height={250} />
          </div>
          <DataTable
            title="Recent Issuances"
            columns={[
              { key: "date", label: "Date", sortable: true },
              { key: "issuer", label: "Issuer", sortable: true },
              { key: "type", label: "Type", sortable: true },
              { key: "amount", label: "Amount ($M)", sortable: true },
              { key: "pricing", label: "Pricing", sortable: true },
            ]}
            data={[
              {
                date: "2023-06-15",
                issuer: "ABC Bank",
                type: "RMBS",
                amount: "750",
                pricing: "T+125",
              },
              {
                date: "2023-06-10",
                issuer: "XYZ Capital",
                type: "CLO",
                amount: "500",
                pricing: "L+150",
              },
              {
                date: "2023-06-05",
                issuer: "Global Finance",
                type: "CMBS",
                amount: "1,200",
                pricing: "T+135",
              },
              {
                date: "2023-06-01",
                issuer: "Auto Corp",
                type: "Auto ABS",
                amount: "650",
                pricing: "T+95",
              },
              {
                date: "2023-05-28",
                issuer: "Credit Co",
                type: "Credit Card ABS",
                amount: "800",
                pricing: "T+105",
              },
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};
