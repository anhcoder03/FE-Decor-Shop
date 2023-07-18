import React, { useEffect } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import { useLocation } from "react-router-dom";

interface IDashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: IDashboardLayoutProps) => {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);
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
