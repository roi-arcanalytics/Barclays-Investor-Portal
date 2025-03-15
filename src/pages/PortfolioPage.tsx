import React, { useState } from "react";
import { FilterBar } from "@/components/data/filters/FilterBar";
import { PieChart } from "@/components/data/charts/PieChart";
import { BarChart } from "@/components/data/charts/BarChart";
import { LineChart } from "@/components/data/charts/LineChart";
import { DealBalanceChart } from "@/components/data/charts/DealBalanceChart";
import { DualBarLineChart } from "@/components/data/charts/DualBarLineChart";
import { DataTable } from "@/components/data/tables/DataTable";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/custom-tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const PortfolioPage = () => {
  const [filters, setFilters] = useState({});
  const [multiDealFilters, setMultiDealFilters] = useState({});

  // Data for Deal 2021-2 Tranche C Interest Due vs Paid chart
  const trancheCInterestData = [
    { date: "2021 Q2", interestDue: 1627500, interestPaid: 1627500 },
    { date: "2021 Q4", interestDue: 1720250, interestPaid: 1720250 },
    { date: "2022 Q2", interestDue: 1456000, interestPaid: 1456000 },
    { date: "2022 Q4", interestDue: 1471750, interestPaid: 1471750 },
    { date: "2023 Q2", interestDue: 1545250, interestPaid: 1545250 },
    { date: "2023 Q4", interestDue: 1510250, interestPaid: 1510250 },
    { date: "2024 Q2", interestDue: 1410500, interestPaid: 1344000 },
    { date: "2024 Q4", interestDue: 1732500, interestPaid: 980000 },
  ];

  // Data for Note Principal Payments chart
  const notePrincipalPaymentsData = [
    { date: "2021 Q4", value: 351053775 },
    { date: "2022 Q2", value: 495789775 },
    { date: "2022 Q4", value: 622158800 },
    { date: "2023 Q2", value: 459263775 },
    { date: "2023 Q4", value: 588517100 },
    { date: "2024 Q2", value: 553910475 },
    { date: "2024 Q4", value: 329783675 },
  ];

  // Data for Overall Portfolio Interest Due vs Paid chart
  const portfolioInterestData = [
    { date: "2021 Q4", interestDue: 53327750, interestPaid: 49594807.5 },
    { date: "2022 Q2", interestDue: 45136000, interestPaid: 43781920 },
    { date: "2022 Q4", interestDue: 45624250, interestPaid: 42430552.5 },
    { date: "2023 Q2", interestDue: 47902750, interestPaid: 44070536 },
    { date: "2023 Q4", interestDue: 46817750, interestPaid: 42334752.5 },
    { date: "2024 Q2", interestDue: 43725500, interestPaid: 40227460 },
    { date: "2024 Q4", interestDue: 53707500, interestPaid: 48336750 },
  ];

  // Data for Deal 2021-2 Collateral & Tranche Balances chart
  const dealBalanceData = [
    {
      date: "2021 Q2",
      collateralBalance: 450000000,
      trancheA: 290000000,
      trancheB: 100000000,
      trancheC: 35000000,
    },
    {
      date: "2021 Q4",
      collateralBalance: 435957849,
      trancheA: 280144000,
      trancheB: 100000000,
      trancheC: 35000000,
    },
    {
      date: "2022 Q2",
      collateralBalance: 416126258,
      trancheA: 264588323,
      trancheB: 100000000,
      trancheC: 35000000,
    },
    {
      date: "2022 Q4",
      collateralBalance: 391239906,
      trancheA: 249032646,
      trancheB: 100000000,
      trancheC: 35000000,
    },
    {
      date: "2023 Q2",
      collateralBalance: 372869355,
      trancheA: 235541095,
      trancheB: 100000000,
      trancheC: 35000000,
    },
    {
      date: "2023 Q4",
      collateralBalance: 349328671,
      trancheA: 213879411,
      trancheB: 100000000,
      trancheC: 35000000,
    },
    {
      date: "2024 Q2",
      collateralBalance: 327172252,
      trancheA: 199601892,
      trancheB: 100000000,
      trancheC: 35000000,
    },
    {
      date: "2024 Q4",
      collateralBalance: 313980905,
      trancheA: 188289645,
      trancheB: 100000000,
      trancheC: 35000000,
    },
  ];

  // Deal filter options based on deal names from Portfolio Overview page
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
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Portfolio Analysis
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
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

      <Tabs defaultValue="composition" className="w-full">
        <TabsList>
          <TabsTrigger value="composition">Deal Performance</TabsTrigger>
          <TabsTrigger value="performance">Collateral Performance</TabsTrigger>
          <TabsTrigger value="cashflows">
            Collateral Stratifications
          </TabsTrigger>
          <TabsTrigger value="comparison">Collateral Risk Metrics</TabsTrigger>
        </TabsList>

        <TabsContent value="composition" className="space-y-8 pt-6">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">
            Deal by Deal Analysis
          </h2>
          <FilterBar
            onFilterChange={setFilters}
            filterOptions={filterOptions}
            className="p-4 bg-card rounded-lg border mb-6"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DealBalanceChart
              title="Collateral & Tranche Balances Overtime"
              height={250}
              data={dealBalanceData}
              lines={[
                {
                  name: "Asset Collateral Balance",
                  dataKey: "collateralBalance",
                  color: "#00aeef",
                },
                { name: "Tranche A", dataKey: "trancheA", color: "#001276" },
                { name: "Tranche B", dataKey: "trancheB", color: "#727272" },
                { name: "Tranche C", dataKey: "trancheC", color: "#000000" },
              ]}
            />
            <DualBarLineChart
              title="Interest Due vs Paid"
              height={250}
              data={trancheCInterestData}
              barKey="interestDue"
              barName="Tranche C - Interest Due"
              barColor="#d3d3d3"
              lineKey="interestPaid"
              lineName="Tranche C - Interest Paid"
              lineColor="#00aeef"
            />
          </div>

          <h2 className="text-2xl font-semibold tracking-tight mb-6">
            Multi-Deal Analysis
          </h2>
          <FilterBar
            onFilterChange={setMultiDealFilters}
            filterOptions={filterOptions}
            className="p-4 bg-card rounded-lg border mb-6"
            multiSelect={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BarChart
              title="Note Principal Payments"
              height={250}
              data={notePrincipalPaymentsData}
              xAxis="date"
              dataKey="value"
              color="#d3d3d3"
            />
            <DualBarLineChart
              title="Interest Due vs Paid"
              height={250}
              data={portfolioInterestData}
              barKey="interestDue"
              barName="Interest Due"
              barColor="#d3d3d3"
              lineKey="interestPaid"
              lineName="Interest Paid"
              lineColor="#00aeef"
            />
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-8 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <LineChart title="Historical Performance" height={250} />
            <BarChart title="Performance by Asset Type" height={250} />
          </div>
          <LineChart title="Cumulative Returns vs Benchmark" height={300} />
        </TabsContent>

        <TabsContent value="cashflows" className="space-y-8 pt-6">
          <LineChart title="Projected Cashflows" height={300} />
          <BarChart title="Monthly Cashflow Projection" height={300} />
        </TabsContent>

        <TabsContent value="comparison" className="space-y-8 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
