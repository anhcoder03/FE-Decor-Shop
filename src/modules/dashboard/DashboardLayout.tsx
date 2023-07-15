import React from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

interface IDashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: IDashboardLayoutProps) => {
  return (
    <div>
      <DashboardHeader></DashboardHeader>
      <div className="grid  grid-cols-[200px_minmax(0,1fr)] py-10 px-5 gap-x-10">
        <DashboardSidebar></DashboardSidebar>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
