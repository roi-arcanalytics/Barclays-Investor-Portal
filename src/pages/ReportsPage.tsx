import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/custom-tabs";
import { DataTable } from "@/components/data/tables/DataTable";
import {
  FileText,
  Download,
  Calendar,
  Clock,
  User,
  Filter,
} from "lucide-react";

export const ReportsPage = () => {
  const [selectedReports, setSelectedReports] = useState<string[]>([]);

  const toggleReportSelection = (reportId: string) => {
    if (selectedReports.includes(reportId)) {
      setSelectedReports(selectedReports.filter((id) => id !== reportId));
    } else {
      setSelectedReports([...selectedReports, reportId]);
    }
  };

  const downloadSelectedReports = () => {
    console.log("Downloading reports:", selectedReports);
    // Implementation would connect to backend to generate and download reports
  };

  // Sample reports data
  const recentReports = [
    {
      id: "rep001",
      name: "Monthly Portfolio Summary",
      date: "2023-06-01",
      type: "Portfolio",
      format: "PDF",
      size: "1.2 MB",
      creator: "System",
    },
    {
      id: "rep002",
      name: "Quarterly Performance Analysis",
      date: "2023-04-15",
      type: "Performance",
      format: "XLSX",
      size: "3.5 MB",
      creator: "John Doe",
    },
    {
      id: "rep003",
      name: "Risk Exposure Report",
      date: "2023-05-20",
      type: "Risk",
      format: "PDF",
      size: "2.1 MB",
      creator: "System",
    },
    {
      id: "rep004",
      name: "Market Trends Analysis",
      date: "2023-06-05",
      type: "Market",
      format: "PDF",
      size: "1.8 MB",
      creator: "Jane Smith",
    },
    {
      id: "rep005",
      name: "Regulatory Compliance Report",
      date: "2023-05-31",
      type: "Compliance",
      format: "PDF",
      size: "4.2 MB",
      creator: "System",
    },
  ];

  const reportTemplates = [
    {
      id: "temp001",
      name: "Portfolio Summary",
      description:
        "Overview of portfolio composition, performance, and key metrics",
      category: "Portfolio",
      lastGenerated: "2023-06-01",
      frequency: "Monthly",
    },
    {
      id: "temp002",
      name: "Performance Attribution",
      description: "Detailed analysis of performance drivers and attribution",
      category: "Performance",
      lastGenerated: "2023-04-15",
      frequency: "Quarterly",
    },
    {
      id: "temp003",
      name: "Risk Analysis",
      description: "Comprehensive risk metrics and exposure analysis",
      category: "Risk",
      lastGenerated: "2023-05-20",
      frequency: "Monthly",
    },
    {
      id: "temp004",
      name: "Market Overview",
      description: "Analysis of market trends, spreads, and correlations",
      category: "Market",
      lastGenerated: "2023-06-05",
      frequency: "Weekly",
    },
    {
      id: "temp005",
      name: "Regulatory Compliance",
      description: "Compliance status and regulatory reporting",
      category: "Compliance",
      lastGenerated: "2023-05-31",
      frequency: "Monthly",
    },
    {
      id: "temp006",
      name: "Cash Flow Projections",
      description: "Projected cash flows and payment analysis",
      category: "Cash Flow",
      lastGenerated: "2023-05-15",
      frequency: "Monthly",
    },
  ];

  const recentReportsColumns = [
    {
      key: "select",
      label: "",
      render: (_, row) => (
        <input
          type="checkbox"
          checked={selectedReports.includes(row.id)}
          onChange={() => toggleReportSelection(row.id)}
          className="h-4 w-4 rounded border-gray-300"
        />
      ),
    },
    { key: "name", label: "Report Name", sortable: true },
    { key: "date", label: "Date", sortable: true },
    { key: "type", label: "Type", sortable: true },
    { key: "format", label: "Format", sortable: true },
    { key: "size", label: "Size", sortable: true },
    { key: "creator", label: "Created By", sortable: true },
    {
      key: "actions",
      label: "Actions",
      render: () => (
        <Button variant="ghost" size="sm">
          <Download className="h-4 w-4" />
        </Button>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <Button
          disabled={selectedReports.length === 0}
          onClick={downloadSelectedReports}
        >
          <Download className="mr-2 h-4 w-4" />
          Download Selected
        </Button>
      </div>

      <Tabs defaultValue="recent" className="w-full">
        <TabsList>
          <TabsTrigger value="recent">Recent Reports</TabsTrigger>
          <TabsTrigger value="templates">Report Templates</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled Reports</TabsTrigger>
          <TabsTrigger value="custom">Custom Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="recent" className="space-y-4 pt-4">
          <DataTable
            title="Recent Reports"
            columns={recentReportsColumns}
            data={recentReports}
          />
        </TabsContent>

        <TabsContent value="templates" className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reportTemplates.map((template) => (
              <Card key={template.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-md font-medium flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-primary" />
                    {template.name}
                  </CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center">
                      <Filter className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-muted-foreground">Category:</span>
                    </div>
                    <span>{template.category}</span>

                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        Last Generated:
                      </span>
                    </div>
                    <span>{template.lastGenerated}</span>

                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-muted-foreground">Frequency:</span>
                    </div>
                    <span>{template.frequency}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="w-full">
                    Generate Report
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-4 pt-4">
          <DataTable
            title="Scheduled Reports"
            columns={[
              { key: "name", label: "Report Name", sortable: true },
              { key: "frequency", label: "Frequency", sortable: true },
              { key: "nextRun", label: "Next Run", sortable: true },
              { key: "recipients", label: "Recipients", sortable: true },
              { key: "format", label: "Format", sortable: true },
              {
                key: "actions",
                label: "Actions",
                render: () => (
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-destructive"
                    >
                      Delete
                    </Button>
                  </div>
                ),
              },
            ]}
            data={[
              {
                name: "Portfolio Summary",
                frequency: "Monthly",
                nextRun: "2023-07-01",
                recipients: "Portfolio Team",
                format: "PDF",
              },
              {
                name: "Performance Attribution",
                frequency: "Quarterly",
                nextRun: "2023-07-15",
                recipients: "Management",
                format: "XLSX",
              },
              {
                name: "Risk Analysis",
                frequency: "Monthly",
                nextRun: "2023-07-01",
                recipients: "Risk Team",
                format: "PDF",
              },
              {
                name: "Market Overview",
                frequency: "Weekly",
                nextRun: "2023-06-12",
                recipients: "All Analysts",
                format: "PDF",
              },
            ]}
          />
        </TabsContent>

        <TabsContent value="custom" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Custom Report Builder</CardTitle>
              <CardDescription>
                Create a custom report by selecting data sources, metrics, and
                visualization options
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Data Sources</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="portfolio"
                          className="h-4 w-4 rounded border-gray-300 mr-2"
                        />
                        <label htmlFor="portfolio">Portfolio Data</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="market"
                          className="h-4 w-4 rounded border-gray-300 mr-2"
                        />
                        <label htmlFor="market">Market Data</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="performance"
                          className="h-4 w-4 rounded border-gray-300 mr-2"
                        />
                        <label htmlFor="performance">Performance Data</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="risk"
                          className="h-4 w-4 rounded border-gray-300 mr-2"
                        />
                        <label htmlFor="risk">Risk Metrics</label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2">Metrics</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="returns"
                          className="h-4 w-4 rounded border-gray-300 mr-2"
                        />
                        <label htmlFor="returns">Returns</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="yield"
                          className="h-4 w-4 rounded border-gray-300 mr-2"
                        />
                        <label htmlFor="yield">Yield</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="duration"
                          className="h-4 w-4 rounded border-gray-300 mr-2"
                        />
                        <label htmlFor="duration">Duration</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="var"
                          className="h-4 w-4 rounded border-gray-300 mr-2"
                        />
                        <label htmlFor="var">Value at Risk</label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2">Visualizations</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="tables"
                          className="h-4 w-4 rounded border-gray-300 mr-2"
                        />
                        <label htmlFor="tables">Data Tables</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="charts"
                          className="h-4 w-4 rounded border-gray-300 mr-2"
                        />
                        <label htmlFor="charts">Charts</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="summary"
                          className="h-4 w-4 rounded border-gray-300 mr-2"
                        />
                        <label htmlFor="summary">Summary Statistics</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="trends"
                          className="h-4 w-4 rounded border-gray-300 mr-2"
                        />
                        <label htmlFor="trends">Trend Analysis</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="outline" className="mr-2">
                Cancel
              </Button>
              <Button>Generate Custom Report</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
