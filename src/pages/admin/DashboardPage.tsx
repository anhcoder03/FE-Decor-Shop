import DashboardLayout from "../../modules/dashboard/DashboardLayout";
import DashboardHeading from "../../modules/dashboard/DashboardHeading";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <DashboardHeading
        title="Dashboard"
        desc="Overview dashboard monitor"
      ></DashboardHeading>
    </DashboardLayout>
  );
};

export default DashboardPage;
