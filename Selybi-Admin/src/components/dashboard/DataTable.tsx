import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Download, MoreHorizontal, ArrowUpDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DataItem {
  id: string;
  name: string;
  status: "active" | "completed" | "pending" | "cancelled";
  client: string;
  value: string;
  progress: number;
  dueDate: string;
}

const sampleData: DataItem[] = [
  {
    id: "PRJ001",
    name: "E-commerce Platform",
    status: "active",
    client: "TechCorp Inc",
    value: "$45,000",
    progress: 75,
    dueDate: "2024-07-15"
  },
  {
    id: "PRJ002", 
    name: "Mobile App Development",
    status: "completed",
    client: "StartupXYZ",
    value: "$32,000",
    progress: 100,
    dueDate: "2024-06-30"
  },
  {
    id: "PRJ003",
    name: "Website Redesign",
    status: "pending",
    client: "DesignStudio",
    value: "$18,500", 
    progress: 25,
    dueDate: "2024-08-20"
  },
  {
    id: "PRJ004",
    name: "API Integration",
    status: "active",
    client: "DataFlow Ltd",
    value: "$28,000",
    progress: 60,
    dueDate: "2024-07-25"
  },
  {
    id: "PRJ005",
    name: "Analytics Dashboard",
    status: "cancelled",
    client: "MetricsCorp",
    value: "$22,000",
    progress: 10,
    dueDate: "2024-09-10"
  }
];

export const DataTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<keyof DataItem | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-primary/10 text-primary border-primary/20";
      case "completed":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "pending":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "cancelled":
        return "bg-destructive/10 text-destructive border-destructive/20";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const filteredData = sampleData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortField) return 0;
    
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (sortDirection === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const handleSort = (field: keyof DataItem) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  return (
    <Card className="card-gradient border-border/50 hover:shadow-card transition-all duration-300">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="text-foreground flex items-center space-x-2">
            <span>Project Overview</span>
          </CardTitle>
          
          {/* Search and Actions */}
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search projects..."
                className="pl-10 w-full sm:w-64 bg-background/50 border-border/50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-border/50 hover:bg-secondary/50">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" size="sm" className="border-border/50 hover:bg-secondary/50">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left p-4 text-muted-foreground font-medium">
                  <Button
                    variant="ghost"
                    className="p-0 hover:bg-transparent"
                    onClick={() => handleSort("id")}
                  >
                    Project ID
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </th>
                <th className="text-left p-4 text-muted-foreground font-medium">
                  <Button
                    variant="ghost"
                    className="p-0 hover:bg-transparent"
                    onClick={() => handleSort("name")}
                  >
                    Project Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </th>
                <th className="text-left p-4 text-muted-foreground font-medium">Client</th>
                <th className="text-left p-4 text-muted-foreground font-medium">Status</th>
                <th className="text-left p-4 text-muted-foreground font-medium">Progress</th>
                <th className="text-left p-4 text-muted-foreground font-medium">Value</th>
                <th className="text-left p-4 text-muted-foreground font-medium">Due Date</th>
                <th className="text-left p-4 text-muted-foreground font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((item, index) => (
                <tr 
                  key={item.id}
                  className="border-b border-border/20 hover:bg-secondary/20 transition-colors duration-200"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="p-4">
                    <span className="font-mono text-primary text-sm">{item.id}</span>
                  </td>
                  <td className="p-4">
                    <div>
                      <p className="font-medium text-foreground">{item.name}</p>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-muted-foreground">{item.client}</span>
                  </td>
                  <td className="p-4">
                    <Badge className={getStatusColor(item.status)}>
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-primary transition-all duration-500"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground">{item.progress}%</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="font-semibold text-foreground">{item.value}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-muted-foreground">{item.dueDate}</span>
                  </td>
                  <td className="p-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-popover/95 backdrop-blur-sm">
                        <DropdownMenuItem className="hover:bg-secondary/50">View Details</DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-secondary/50">Edit Project</DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-destructive/10 text-destructive">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-between p-4 border-t border-border/50">
          <div className="text-sm text-muted-foreground">
            Showing {sortedData.length} of {sampleData.length} projects
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled className="border-border/50">
              Previous
            </Button>
            <Button variant="outline" size="sm" className="border-border/50">
              1
            </Button>
            <Button variant="outline" size="sm" disabled className="border-border/50">
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};