import { FolderOpen, Users, CheckCircle, DollarSign } from "lucide-react";
import { AnalyticsCard } from "@/components/dashboard/AnalyticsCard";
import { DashboardCharts } from "@/components/dashboard/DashboardCharts";
import { DataTable } from "@/components/dashboard/DataTable";
import { NotificationPanel } from "@/components/dashboard/NotificationPanel";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="p-6 space-y-6 animate-fade-in">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            Welcome back to <span className="bg-gradient-primary bg-clip-text text-transparent">Selybi</span>
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening with your projects today.
          </p>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnalyticsCard
            title="Active Projects"
            value={25}
            change="+12%"
            changeType="positive"
            icon={FolderOpen}
            description="from last month"
            className="animate-slide-up"
          />
          <AnalyticsCard
            title="Completed Projects"
            value={147}
            change="+5%"
            changeType="positive"
            icon={CheckCircle}
            description="this quarter"
            className="animate-slide-up [animation-delay:100ms]"
          />
          <AnalyticsCard
            title="New Clients"
            value={8}
            change="+23%"
            changeType="positive"
            icon={Users}
            description="this month"
            className="animate-slide-up [animation-delay:200ms]"
          />
          <AnalyticsCard
            title="Revenue"
            value="$342K"
            change="+18%"
            changeType="positive"
            icon={DollarSign}
            description="this quarter"
            className="animate-slide-up [animation-delay:300ms]"
          />
        </div>

        {/* Charts Section */}
        <div className="animate-fade-in [animation-delay:400ms]">
          <h2 className="text-xl font-semibold text-foreground mb-6">Analytics Overview</h2>
          <DashboardCharts />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 animate-fade-in [animation-delay:500ms]">
          {/* Data Table - Takes 2 columns */}
          <div className="xl:col-span-2">
            <DataTable />
          </div>

          {/* Notifications - Takes 1 column */}
          <div className="xl:col-span-1">
            <NotificationPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;