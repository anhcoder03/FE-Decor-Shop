import { Link } from "react-router-dom";
import DashboardAvartar from "./DashboardAvartar";

const DashboardHeader = () => {
  return (
    <div className="py-5 px-10 border-b border-b-[#eee] flex items-center justify-between">
      <div>
        <Link to={"/"}>
          <img src="/logo.png" alt="" />
        </Link>
      </div>
      <DashboardAvartar></DashboardAvartar>
    </div>
  );
};

export default DashboardHeader;
