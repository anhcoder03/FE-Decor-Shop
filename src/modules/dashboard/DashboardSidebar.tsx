import React from "react";
import { ISidebarDashboard } from "../../types/SidebarDashboard";
import { NavLink } from "react-router-dom";

const listMenuSidabar: ISidebarDashboard[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: <i className="fa-solid fa-layer-group"></i>,
  },
  {
    title: "Product",
    path: "/manage/product",
    icon: <i className="fa-solid fa-folder"></i>,
  },
  {
    title: "Category",
    path: "/manage/category",
    icon: <i className="fa-solid fa-list-check"></i>,
  },
  {
    title: "User",
    path: "/manage/user",
    icon: <i className="fa-regular fa-user"></i>,
  },
  {
    title: "Order",
    path: "/manage/order",
    icon: <i className="fa-solid fa-cart-shopping"></i>,
  },
  {
    title: "Logout",
    path: "/",
    icon: <i className="fa-solid fa-right-from-bracket"></i>,
  },
];

const DashboardSidebar = () => {
  const linkItemStyle =
    "flex items-center gap-5 py-[14px] px-5 font-medium mb-5";
  return (
    <div className="w-[200] shadow-custom rounded-xl p-5">
      {listMenuSidabar.length > 0 &&
        listMenuSidabar.map((link) => (
          <NavLink
            to={link.path}
            key={link.title}
            className={({ isActive }) =>
              isActive
                ? `${linkItemStyle} active-link hover:text-primary`
                : `${linkItemStyle} hover:text-primary`
            }
          >
            <span>{link.icon}</span>
            <span>{link.title}</span>
          </NavLink>
        ))}
    </div>
  );
};

export default DashboardSidebar;
