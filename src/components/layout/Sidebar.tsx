import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Home,
  PieChart,
  LineChart,
  LayoutDashboard,
  FileText,
  Settings,
  Users,
  AlertTriangle,
  Shield,
  ArrowLeft,
} from "lucide-react";

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const SidebarLink = ({ to, icon, label }: SidebarLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:text-primary",
          isActive
            ? "bg-primary/10 text-white font-medium underline underline-offset-4"
            : "text-white",
        )
      }
    >
      {icon}
      {label}
    </NavLink>
  );
};

export const Sidebar = () => {
  return (
    <div className="hidden border-r bg-black lg:block lg:w-64">
      <div className="flex h-full flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4">
          <NavLink to="/" className="flex items-center gap-2 text-white">
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Dashboard</span>
          </NavLink>
        </div>
        <div className="flex-1 overflow-auto py-2 px-4">
          <div className="grid gap-1">
            <SidebarLink
              to="/"
              icon={<Home className="h-4 w-4" />}
              label="Home"
            />
            <SidebarLink
              to="/dashboard"
              icon={<LayoutDashboard className="h-4 w-4" />}
              label="Portfolio Overview"
            />
            <SidebarLink
              to="/portfolio"
              icon={<PieChart className="h-4 w-4" />}
              label="Portfolio Analysis"
            />
            <SidebarLink
              to="/market"
              icon={<LineChart className="h-4 w-4" />}
              label="Market Analytics"
            />
            <SidebarLink
              to="/reports"
              icon={<FileText className="h-4 w-4" />}
              label="Reports"
            />
            <SidebarLink
              to="/alerts"
              icon={<AlertTriangle className="h-4 w-4" />}
              label="Alerts"
            />
            <SidebarLink
              to="/compliance"
              icon={<Shield className="h-4 w-4" />}
              label="Compliance"
            />
          </div>
          <div className="mt-6 pt-6 border-t border-white/20">
            <div className="grid gap-1">
              <SidebarLink
                to="/settings"
                icon={<Settings className="h-4 w-4" />}
                label="Settings"
              />
              <SidebarLink
                to="/users"
                icon={<Users className="h-4 w-4" />}
                label="User Management"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
