import React, { useState, useEffect } from "react";
import DashboardLayout from "../dashboard/DashboardLayout";
import DashboardHeading from "../dashboard/DashboardHeading";
import { Table } from "../../components/table";
import { IconDelete, IconEdit } from "../../components/icons";
import { Button } from "../../components/button";
import { deleteProduct, getAllProduct } from "../../api/product";
import { instance } from "../../api/instance";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const ProductManage = () => {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
 const navigate = useNavigate()
  useEffect(() => {
    loadData();
    handleGetCategories();
  }, []);
  console.log("category", product);

  const handleGetCategories = async () => {
    try {
      const response: any = await instance.get("categories");
      setCategory(response.data.category);
    } catch (error) {
      console.log(error);
    }
  };

  const loadData = () => {
    getAllProduct().then(({ data }) => {
      setProduct(data?.product)
    } );
    // toast.success("Xoá sản phẩm thành công");
  };

  const handleRemove = (id: number) => {
    void Swal.fire({
      title: "Bạn muốn xoá sản phẩm này?",
      text: "Thao tác này sẽ khiến sản phẩm bị xoá vĩnh viễn!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          deleteProduct(id).then(() => {
            loadData();
            void Swal.fire("Deleted!", "Your file has been deleted.", "success");
          });
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
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
          {product?.map((item: any, index: number) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={item?.image}
                  alt=""
                  className="max-w-[70px] object-cover"
                />
              </td>
              <td className="font-bold">{item?.name}</td>
              <td>
                <em className="text-red-500">{item?.price} đ</em>
              </td>
              <td>
                <div className="flex items-center gap-x-3 text-primary">
                  <IconEdit
                    onClick={() =>
                      navigate(`/manage/edit-product/${item._id}`)
                    }
                  ></IconEdit>
                  <IconDelete onClick={() => handleRemove(item?._id)}></IconDelete>
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
