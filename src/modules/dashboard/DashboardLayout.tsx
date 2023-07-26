/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../store/configureStore";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

interface IDashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: IDashboardLayoutProps) => {
  const auth: any = useSelector((state: RootState) => state.auth.auth);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth?.user) {
      navigate("/signin");
      toast.warning("Đăng nhập để vào trang quản trị!");
      return;
    }
    if (!auth?.user.admin) {
      navigate("/");
      toast.warning("Tài khoản của bạn không phải là người quản trị");
      return;
    }
  }, [auth]);

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
