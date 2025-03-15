import React, { useState } from "react";
import { FilterBar, MetricsGrid } from "@/components/data";
import { AreaChart } from "@/components/data/charts/AreaChart";
import { BarChart } from "@/components/data/charts/BarChart";
import { PieChart } from "@/components/data/charts/PieChart";
import { DataTable } from "@/components/data/tables/DataTable";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/custom-tabs";

export const DashboardPage = () => {
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

  // Table columns and data from the uploaded image
  const columns = [
    { key: "dealName", label: "Deal Name", sortable: true },
    { key: "issueDate", label: "Issue Date", sortable: true },
    { key: "maturityDate", label: "Maturity Date", sortable: true },
    { key: "assetClass", label: "Asset Class", sortable: true },
    { key: "originator", label: "Originator(s)", sortable: true },
    { key: "leadArranger", label: "Lead Arranger(s)", sortable: true },
    { key: "lawFirm", label: "Law Firm(s)", sortable: true },
    { key: "country", label: "Country", sortable: true },
    {
      key: "prospectus",
      label: "Prospectus",
      sortable: true,
      render: () => (
        <span className="text-blue-500 hover:underline cursor-pointer">
          Download
        </span>
      ),
    },
    {
      key: "collateralData",
      label: "Collateral Data (BoE)",
      sortable: true,
      render: () => (
        <span className="text-blue-500 hover:underline cursor-pointer">
          Download
        </span>
      ),
    },
    {
      key: "cashFlowModel",
      label: "Cash Flow Model",
      sortable: true,
      render: () => (
        <span className="text-blue-500 hover:underline cursor-pointer">
          Access Here
        </span>
      ),
    },
  ];

  const tableData = [
    {
      dealName: "Hawksmoor Residential Mortgages plc",
      issueDate: "11/4/2024",
      maturityDate: "1/1/2055",
      assetClass: "RMBS",
      originator: "TSB Bank",
      leadArranger: "JP Morgan",
      lawFirm: "Allen & Overy LLP",
      country: "UK",
      prospectus: "Download",
      collateralData: "Download",
      cashFlowModel: "Access Here",
    },
    {
      dealName: "Darrowby Mortgages Limited",
      issueDate: "11/14/2024",
      maturityDate: "1/11/2055",
      assetClass: "RMBS",
      originator: "Virgin Money plc",
      leadArranger: "Citi",
      lawFirm: "Clifford Chance LLP",
      country: "UK",
      prospectus: "Download",
      collateralData: "Download",
      cashFlowModel: "Access Here",
    },
    {
      dealName: "Lanark Master Issuer plc",
      issueDate: "11/24/2024",
      maturityDate: "1/21/2055",
      assetClass: "RMBS",
      originator: "Bank of Ireland",
      leadArranger: "Morgan Stanley",
      lawFirm: "Linklaters LLP",
      country: "UK",
      prospectus: "Download",
      collateralData: "Download",
      cashFlowModel: "Access Here",
    },
    {
      dealName: "Gosforth Funding plc",
      issueDate: "12/5/2024",
      maturityDate: "2/15/2055",
      assetClass: "RMBS",
      originator: "Belmont Green Finance Ltd",
      leadArranger: "BNP Paribas",
      lawFirm: "Freshfields",
      country: "UK",
      prospectus: "Download",
      collateralData: "Download",
      cashFlowModel: "Access Here",
    },
    {
      dealName: "Precise Mortgage Funding plc",
      issueDate: "12/15/2024",
      maturityDate: "3/10/2055",
      assetClass: "RMBS",
      originator: "CHL Mortgages",
      leadArranger: "Deutsche Bank",
      lawFirm: "Slaughter and May",
      country: "UK",
      prospectus: "Download",
      collateralData: "Download",
      cashFlowModel: "Access Here",
    },
    {
      dealName: "Stratton Mortgage Funding plc",
      issueDate: "1/10/2025",
      maturityDate: "4/5/2055",
      assetClass: "RMBS",
      originator: "Cynergy Bank Limited",
      leadArranger: "Credit Suisse",
      lawFirm: "Herbert Smith Freehills",
      country: "UK",
      prospectus: "Download",
      collateralData: "Download",
      cashFlowModel: "Access Here",
    },
    {
      dealName: "Trinity Square Residential Mortgages plc",
      issueDate: "1/25/2025",
      maturityDate: "5/12/2055",
      assetClass: "RMBS",
      originator: "Foundation Home Loans",
      leadArranger: "UBS",
      lawFirm: "Ashurst",
      country: "UK",
      prospectus: "Download",
      collateralData: "Download",
      cashFlowModel: "Access Here",
    },
    {
      dealName: "Finsbury Square Mortgage Trust Limited",
      issueDate: "2/8/2025",
      maturityDate: "6/20/2055",
      assetClass: "RMBS",
      originator: "Hampshire Trust Bank",
      leadArranger: "Bank of America",
      lawFirm: "Norton Rose Fulbright",
      country: "UK",
      prospectus: "Download",
      collateralData: "Download",
      cashFlowModel: "Access Here",
    },
    {
      dealName: "Sequoia Mortgage Trust REIT",
      issueDate: "2/20/2025",
      maturityDate: "7/15/2055",
      assetClass: "RMBS",
      originator: "Keystone Property Finance Ltd",
      leadArranger: "Citigroup",
      lawFirm: "Sidley Austin",
      country: "US",
      prospectus: "Download",
      collateralData: "Download",
      cashFlowModel: "Access Here",
    },
    {
      dealName: "Flagstar RMBS Trust",
      issueDate: "3/5/2025",
      maturityDate: "8/10/2055",
      assetClass: "RMBS",
      originator: "Landbay Partners Ltd",
      leadArranger: "JPMorgan Chase",
      lawFirm: "Mayer Brown",
      country: "US",
      prospectus: "Download",
      collateralData: "Download",
      cashFlowModel: "Access Here",
    },
    {
      dealName: "Granite Mortgage Securities plc",
      issueDate: "3/18/2025",
      maturityDate: "9/5/2055",
      assetClass: "RMBS",
      originator: "Lendco Ltd",
      leadArranger: "Barclays Capital",
      lawFirm: "Allen & Overy LLP",
      country: "UK",
      prospectus: "Download",
      collateralData: "Download",
      cashFlowModel: "Access Here",
    },
    {
      dealName: "Aire Valley Mortgages plc",
      issueDate: "4/2/2025",
      maturityDate: "10/15/2055",
      assetClass: "RMBS",
      originator: "Lendinvest",
      leadArranger: "Deutsche Bank",
      lawFirm: "Clifford Chance LLP",
      country: "UK",
      prospectus: "Download",
      collateralData: "Download",
      cashFlowModel: "Access Here",
    },
    {
      dealName: "Silverstone Master Issuer plc",
      issueDate: "4/15/2025",
      maturityDate: "11/20/2055",
      assetClass: "RMBS",
      originator: "LiveMore Capital Limited",
      leadArranger: "RBS",
      lawFirm: "Linklaters LLP",
      country: "UK",
      prospectus: "Download",
      collateralData: "Download",
      cashFlowModel: "Access Here",
    },
    {
      dealName: "Permanent Master Issuer plc",
      issueDate: "5/1/2025",
      maturityDate: "12/10/2055",
      assetClass: "RMBS",
      originator: "OneSavings Bank Plc",
      leadArranger: "Citigroup",
      lawFirm: "Slaughter and May",
      country: "UK",
      prospectus: "Download",
      collateralData: "Download",
      cashFlowModel: "Access Here",
    },
    {
      dealName: "Holmes Master Issuer plc",
      issueDate: "5/1/2025",
      maturityDate: "12/10/2055",
      assetClass: "RMBS",
      originator: "Paragon Banking Group",
      leadArranger: "Citigroup",
      lawFirm: "Slaughter and May",
      country: "UK",
      prospectus: "Download",
      collateralData: "Download",
      cashFlowModel: "Access Here",
    },
    {
      dealName: "Progressive Building Society RMBS",
      issueDate: "5/15/2025",
      maturityDate: "1/20/2056",
      assetClass: "RMBS",
      originator: "Progressive BS",
      leadArranger: "HSBC",
      lawFirm: "Allen & Overy LLP",
      country: "UK",
      prospectus: "Download",
      collateralData: "Download",
      cashFlowModel: "Access Here",
    },
    {
      dealName: "Shawbrook Mortgage Trust",
      issueDate: "6/1/2025",
      maturityDate: "2/15/2056",
      assetClass: "RMBS",
      originator: "Shawbrook Bank",
      leadArranger: "Morgan Stanley",
      lawFirm: "Clifford Chance LLP",
      country: "UK",
      prospectus: "Download",
      collateralData: "Download",
      cashFlowModel: "Access Here",
    },
    {
      dealName: "Skipton Covered Bond LLP",
      issueDate: "6/15/2025",
      maturityDate: "3/10/2056",
      assetClass: "RMBS",
      originator: "Skipton BS",
      leadArranger: "Barclays Capital",
      lawFirm: "Linklaters LLP",
      country: "UK",
      prospectus: "Download",
      collateralData: "Download",
      cashFlowModel: "Access Here",
    },
    {
      dealName: "Tandem Bank Mortgage Securities",
      issueDate: "7/1/2025",
      maturityDate: "4/5/2056",
      assetClass: "RMBS",
      originator: "Tandem Bank",
      leadArranger: "JP Morgan",
      lawFirm: "Freshfields",
      country: "UK",
      prospectus: "Download",
      collateralData: "Download",
      cashFlowModel: "Access Here",
    },
    {
      dealName: "The Mortgage Lender Securitisation",
      issueDate: "7/15/2025",
      maturityDate: "5/10/2056",
      assetClass: "RMBS",
      originator: "The Mortgage Lender",
      leadArranger: "Citi",
      lawFirm: "Slaughter and May",
      country: "UK",
      prospectus: "Download",
      collateralData: "Download",
      cashFlowModel: "Access Here",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">
          Portfolio Overview
        </h1>
      </div>

      <FilterBar
        onFilterChange={setFilters}
        filterOptions={filterOptions}
        className="p-4 bg-card rounded-lg border"
      />

      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Deal Overview</TabsTrigger>
          <TabsTrigger value="performance">Collateral Overview</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4 pt-4">
          <div className="h-[800px] overflow-y-auto">
            <DataTable
              title="RMBS Issuance Tracker"
              columns={columns}
              data={tableData}
            />
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4 pt-4">
          <div className="h-[800px] overflow-y-auto">
            <DataTable
              title="RMBS Performance Metrics"
              columns={[
                { key: "dealName", label: "Deal Name", sortable: true },
                { key: "loanCount", label: "Loan Count", sortable: true },
                {
                  key: "currentBalance",
                  label: "Current Balance (£M)",
                  sortable: true,
                },
                { key: "waLtv", label: "WA LTV (%)", sortable: true },
                {
                  key: "waSeasoning",
                  label: "WA Seasoning (Years)",
                  sortable: true,
                },
                {
                  key: "waRemainingTerm",
                  label: "WA Remaining Term (Years)",
                  sortable: true,
                },
                {
                  key: "waInterestRate",
                  label: "WA Interest Rate (%)",
                  sortable: true,
                },
                {
                  key: "fixedRate",
                  label: "Floating Coupon (%)",
                  sortable: true,
                },
                {
                  key: "interestOnly",
                  label: "% Interest Only",
                  sortable: true,
                },
              ]}
              data={[
                {
                  dealName: "Hawksmoor Residential Mortgages plc",
                  loanCount: "4,521",
                  currentBalance: "£842.3M",
                  waLtv: "68.4%",
                  waSeasoning: "2.1",
                  waRemainingTerm: "22.3",
                  waInterestRate: "3.45%",
                  fixedRate: "3.2%",
                  interestOnly: "18.2%",
                },
                {
                  dealName: "Darrowby Mortgages Limited",
                  loanCount: "3,842",
                  currentBalance: "£765.1M",
                  waLtv: "65.2%",
                  waSeasoning: "2.4",
                  waRemainingTerm: "21.7",
                  waInterestRate: "3.62%",
                  fixedRate: "3.5%",
                  interestOnly: "22.1%",
                },
                {
                  dealName: "Lanark Master Issuer plc",
                  loanCount: "5,124",
                  currentBalance: "£924.7M",
                  waLtv: "67.8%",
                  waSeasoning: "2.2",
                  waRemainingTerm: "23.4",
                  waInterestRate: "3.38%",
                  fixedRate: "3.1%",
                  interestOnly: "16.8%",
                },
                {
                  dealName: "Gosforth Funding plc",
                  loanCount: "4,872",
                  currentBalance: "£892.5M",
                  waLtv: "66.9%",
                  waSeasoning: "2.2",
                  waRemainingTerm: "22.1",
                  waInterestRate: "3.51%",
                  fixedRate: "3.3%",
                  interestOnly: "19.7%",
                },
                {
                  dealName: "Precise Mortgage Funding plc",
                  loanCount: "3,956",
                  currentBalance: "£782.4M",
                  waLtv: "69.2%",
                  waSeasoning: "1.9",
                  waRemainingTerm: "23.1",
                  waInterestRate: "3.42%",
                  fixedRate: "3.1%",
                  interestOnly: "17.5%",
                },
                {
                  dealName: "Stratton Mortgage Funding plc",
                  loanCount: "4,215",
                  currentBalance: "£815.6M",
                  waLtv: "67.1%",
                  waSeasoning: "2.3",
                  waRemainingTerm: "21.9",
                  waInterestRate: "3.55%",
                  fixedRate: "3.4%",
                  interestOnly: "20.4%",
                },
                {
                  dealName: "Trinity Square Residential Mortgages plc",
                  loanCount: "5,342",
                  currentBalance: "£945.8M",
                  waLtv: "66.5%",
                  waSeasoning: "2.1",
                  waRemainingTerm: "22.8",
                  waInterestRate: "3.41%",
                  fixedRate: "3.2%",
                  interestOnly: "18.9%",
                },
                {
                  dealName: "Finsbury Square Mortgage Trust Limited",
                  loanCount: "4,128",
                  currentBalance: "£803.2M",
                  waLtv: "68.9%",
                  waSeasoning: "2.0",
                  waRemainingTerm: "22.5",
                  waInterestRate: "3.48%",
                  fixedRate: "3.2%",
                  interestOnly: "19.3%",
                },
                {
                  dealName: "Sequoia Mortgage Trust REIT",
                  loanCount: "6,235",
                  currentBalance: "£1,125.4M",
                  waLtv: "65.8%",
                  waSeasoning: "2.5",
                  waRemainingTerm: "21.2",
                  waInterestRate: "3.65%",
                  fixedRate: "3.6%",
                  interestOnly: "23.5%",
                },
                {
                  dealName: "Flagstar RMBS Trust",
                  loanCount: "5,872",
                  currentBalance: "£1,052.6M",
                  waLtv: "66.2%",
                  waSeasoning: "2.3",
                  waRemainingTerm: "21.5",
                  waInterestRate: "3.58%",
                  fixedRate: "3.4%",
                  interestOnly: "21.7%",
                },
                {
                  dealName: "Granite Mortgage Securities plc",
                  loanCount: "4,756",
                  currentBalance: "£875.3M",
                  waLtv: "67.5%",
                  waSeasoning: "2.1",
                  waRemainingTerm: "22.6",
                  waInterestRate: "3.43%",
                  fixedRate: "3.1%",
                  interestOnly: "17.8%",
                },
                {
                  dealName: "Aire Valley Mortgages plc",
                  loanCount: "4,325",
                  currentBalance: "£825.9M",
                  waLtv: "68.1%",
                  waSeasoning: "2.1",
                  waRemainingTerm: "22.4",
                  waInterestRate: "3.47%",
                  fixedRate: "3.2%",
                  interestOnly: "18.5%",
                },
                {
                  dealName: "Silverstone Master Issuer plc",
                  loanCount: "5,218",
                  currentBalance: "£935.2M",
                  waLtv: "67.3%",
                  waSeasoning: "2.2",
                  waRemainingTerm: "22.1",
                  waInterestRate: "3.44%",
                  fixedRate: "3.1%",
                  interestOnly: "17.2%",
                },
                {
                  dealName: "Permanent Master Issuer plc",
                  loanCount: "5,645",
                  currentBalance: "£985.7M",
                  waLtv: "66.8%",
                  waSeasoning: "2.3",
                  waRemainingTerm: "21.8",
                  waInterestRate: "3.52%",
                  fixedRate: "3.3%",
                  interestOnly: "20.8%",
                },
                {
                  dealName: "Holmes Master Issuer plc",
                  loanCount: "4,982",
                  currentBalance: "£912.4M",
                  waLtv: "67.6%",
                  waSeasoning: "2.1",
                  waRemainingTerm: "22.2",
                  waInterestRate: "3.46%",
                  fixedRate: "3.2%",
                  interestOnly: "18.7%",
                },
              ]}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
