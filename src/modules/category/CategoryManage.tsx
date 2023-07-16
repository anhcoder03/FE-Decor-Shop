/* eslint-disable @typescript-eslint/require-await */
import React, { useEffect, useState } from "react";
import DashboardLayout from "../dashboard/DashboardLayout";
import DashboardHeading from "../dashboard/DashboardHeading";
import { Button } from "../../components/button";
import { IconDelete, IconEdit } from "../../components/icons";
import { Table } from "../../components/table";
import { instance } from "../../api/instance";
import { ICategory } from "../../types/Category";
import { AxiosResponse } from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

interface ApiResponse {
  message: string;
  category: ICategory[];
}

const CategoryManage = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<ICategory[]>([]);

  const handleGetCategories = async () => {
    try {
      const response: AxiosResponse<ApiResponse> = await instance.get(
        "categories"
      );
      setCategories(response.data.category);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    void handleGetCategories();
  }, []);

  const handleDeleteCategory = (id: string) => {
    console.log(id);
    void Swal.fire({
      title: "Bạn muốn xoá danh mục này?",
      text: "Thao tác này sẽ khiến danh mục bị xoá vĩnh viễn!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await instance.delete(`/categories/${id}`);
          void handleGetCategories();
          void Swal.fire("Deleted!", "Your file has been deleted.", "success");
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

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
          {categories.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td className="font-bold">{item.name}</td>
              <td>
                <div className="flex items-center gap-x-3 text-primary">
                  <IconEdit
                    onClick={() =>
                      navigate(`/manage/edit-category/${item._id}`)
                    }
                  ></IconEdit>
                  <IconDelete
                    onClick={() => handleDeleteCategory(item._id)}
                  ></IconDelete>
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
