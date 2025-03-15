import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Search, SortAsc, SortDesc } from "lucide-react";

interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (value: any, row: any) => React.ReactNode;
}

interface DataTableProps {
  title: string;
  data: any[];
  columns: Column[];
  searchable?: boolean;
  exportable?: boolean;
  pagination?: boolean;
  className?: string;
}

export const DataTable = ({
  title,
  data = [],
  columns = [],
  searchable = true,
  exportable = true,
  pagination = true,
  className = "",
}: DataTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  // Filter data based on search term
  const filteredData = data.filter((row) => {
    if (!searchTerm) return true;
    return Object.values(row).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(searchTerm.toLowerCase()),
    );
  });

  // Sort data based on sort column and direction
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0;

    const aValue = a[sortColumn];
    const bValue = b[sortColumn];

    if (aValue === bValue) return 0;
    if (aValue === null || aValue === undefined) return 1;
    if (bValue === null || bValue === undefined) return -1;

    const comparison = aValue > bValue ? 1 : -1;
    return sortDirection === "asc" ? comparison : -comparison;
  });

  // Paginate data
  const paginatedData = pagination
    ? sortedData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
      )
    : sortedData;

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const handleSort = (columnKey: string) => {
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnKey);
      setSortDirection("asc");
    }
  };

  const handleExport = () => {
    // Placeholder for export functionality
    console.log("Exporting data...");
  };

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
          <div className="flex gap-2">
            {searchable && (
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 h-9 w-[200px]"
                />
              </div>
            )}
            {exportable && (
              <Button size="sm" variant="outline" onClick={handleExport}>
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border overflow-x-auto max-h-[700px] overflow-y-auto">
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  <TableHead key={column.key}>
                    <div className="flex items-center whitespace-nowrap">
                      {column.label}
                      {column.sortable && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="ml-1 p-0 h-8 w-8"
                          onClick={() => handleSort(column.key)}
                        >
                          {sortColumn === column.key ? (
                            sortDirection === "asc" ? (
                              <SortAsc className="h-4 w-4" />
                            ) : (
                              <SortDesc className="h-4 w-4" />
                            )
                          ) : (
                            <SortAsc className="h-4 w-4 opacity-30" />
                          )}
                        </Button>
                      )}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.length > 0 ? (
                paginatedData.map((row, rowIndex) => (
                  <TableRow key={rowIndex} className="h-14">
                    {columns.map((column) => (
                      <TableCell
                        key={`${rowIndex}-${column.key}`}
                        className="whitespace-nowrap"
                      >
                        {column.render
                          ? column.render(row[column.key], row)
                          : row[column.key]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {pagination && totalPages > 1 && (
          <div className="flex items-center justify-end space-x-2 py-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <div className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
