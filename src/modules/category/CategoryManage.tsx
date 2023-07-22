/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/require-await */
import { useEffect, useState } from "react";
import DashboardLayout from "../dashboard/DashboardLayout";
import DashboardHeading from "../dashboard/DashboardHeading";
import { Button } from "../../components/button";
import { IconDelete, IconEdit } from "../../components/icons";
import { Table } from "../../components/table";
import { instance } from "../../api/instance";
import { ICategory } from "../../types/Category";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { getAllCategory } from "../../api/category";

const CategoryManage = () => {
  const headings = ["STT", "Name", "Action"];
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    void loadData();
  }, []);

  const loadData = async (): Promise<any> => {
    try {
      setLoading(true);
      const response = await getAllCategory();
      setCategories(response.data.category);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

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
          void loadData();
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
      <Table loading={loading} headings={headings} length={categories.length}>
        {categories.map((item, index) => (
          <tr key={item._id}>
            <td>{index + 1}</td>
            <td className="font-bold">{item.name}</td>
            <td>
              <div className="flex items-center gap-x-3 text-primary">
                <IconEdit
                  onClick={() => navigate(`/manage/edit-category/${item._id}`)}
                ></IconEdit>
                <IconDelete
                  onClick={() => handleDeleteCategory(item._id)}
                ></IconDelete>
              </div>
            </td>
          </tr>
        ))}
      </Table>
    </DashboardLayout>
  );
};

export default CategoryManage;
