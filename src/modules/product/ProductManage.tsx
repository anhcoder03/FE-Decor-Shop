import React, { useState } from "react";
import DashboardLayout from "../dashboard/DashboardLayout";
import DashboardHeading from "../dashboard/DashboardHeading";
import { Table } from "../../components/table";
import { IconDelete, IconEdit } from "../../components/icons";
import { Button } from "../../components/button";

const ProductManage = () => {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  return (
    <DashboardLayout>
      <DashboardHeading title="Products" desc="Manage all products">
        <Button type="button" to="/manage/add-product" className="h-[55px]">
          + Create Product
        </Button>
      </DashboardHeading>
      <Table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array(10)
            .fill(0)
            .map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src="http://splashythemes.com/opencart/OPC01/OPC010033/image/cache/catalog/demo/product/16-650x685.jpg"
                    alt=""
                    className="max-w-[70px] object-cover"
                  />
                </td>
                <td className="font-bold">Ghế gỗ</td>
                <td>
                  <em className="text-red-500">990.000 đ</em>
                </td>
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

export default ProductManage;
