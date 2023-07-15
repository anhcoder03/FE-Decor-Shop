import React from "react";
import DashboardLayout from "../dashboard/DashboardLayout";
import DashboardHeading from "../dashboard/DashboardHeading";
import { Button } from "../../components/button";
import { IconDelete, IconEdit } from "../../components/icons";
import { Table } from "../../components/table";

const CategoryManage = () => {
  return (
    <DashboardLayout>
      <DashboardHeading title="Categories" desc="Manage all categories">
        <Button type="button" to="/manage/add-category" className="h-[55px]">
          + Create Category
        </Button>
      </DashboardHeading>
      <Table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array(5)
            .fill(0)
            .map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className="font-bold">Nội Thất Sinh Hoạt</td>
                <td>
                  <div className="flex items-center gap-x-3 text-primary">
                    <IconEdit></IconEdit>
                    <IconDelete></IconDelete>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </DashboardLayout>
  );
};

export default CategoryManage;
