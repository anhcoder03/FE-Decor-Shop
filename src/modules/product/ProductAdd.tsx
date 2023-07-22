/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState, useEffect } from "react";
import DashboardLayout from "../dashboard/DashboardLayout";
import DashboardHeading from "../dashboard/DashboardHeading";
import { Field } from "../../components/field";
import { Label } from "../../components/label";
import { Input } from "../../components/input";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "../../components/button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createProduct } from "../../api/product";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import DropdownCategory from "../../components/select/DropdownCategory";
import { instance } from "../../api/instance";
import { Tproduct } from "../../types/product";
import { ImageUpload } from "../../components/image";
import useUploadImage from "../../hooks/useUploadImage";
const ProductAdd = () => {
  const [desc, setDesc] = useState<string>("");
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  const schema = yup.object({
    name: yup.string().required("Phải nhập tên sản phẩm!"),
    price: yup.number().required("phải nhập giá sản phẩm"),
    categoryId: yup.string().required("phải chọn danh mục cho sản phẩm!!"),
  });
  useEffect(() => {
    const arrayError = Object.values(errors);
    if (arrayError.length > 0) {
      toast.error(arrayError[0]?.message);
    }
  });
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleGetCategories = async () => {
    try {
      const response: any = await instance.get("categories");
      setCategory(response.data.category);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    void handleGetCategories();
  }, []);
  const { image, handleDeleteImage, handleSelectImage, loading } =
    useUploadImage();

  const handleSubmitProduct: any = async (values: Tproduct) => {
    if (desc === "") {
      toast.error("Nhập mô tả sản phẩm!");
      return;
    }
    if (image === "") {
      toast.error("Chọn ảnh cho sản phẩm!");
      return;
    }
    try {
      const product = await createProduct({ ...values, desc, image });
      if (product) {
        toast.success("Thêm sản phẩm thành công");
        navigate("/manage/product");
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <DashboardLayout>
      <DashboardHeading
        title="Add Product"
        desc="Add new product"
      ></DashboardHeading>

      <form onSubmit={handleSubmit(handleSubmitProduct)}>
        <div className="form-layout">
          <Field>
            <Label htmlFor="name">Product Name</Label>
            <Input
              name="name"
              placeholder="Enter product name"
              type="text"
              control={control}
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="price">Price</Label>
            <Input
              name="price"
              placeholder="Enter product price"
              type="text"
              control={control}
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label htmlFor="image">Image</Label>
            <ImageUpload
              loading={loading}
              onChange={handleSelectImage}
              handleDeleteImage={handleDeleteImage}
              name="image"
              image={image}
            ></ImageUpload>
          </Field>
          <Field>
            <Label htmlFor="categoryId">Danh mục</Label>
            <DropdownCategory
              control={control}
              name={"categoryId"}
              setValue={setValue}
              dropdownLabel="Phân loại danh mục"
              data={category}
            ></DropdownCategory>
          </Field>
        </div>
        <div>
          <Field>
            <Label htmlFor="desc">Description</Label>
            <div className="w-full entry-content">
              <ReactQuill
                value={desc}
                onChange={setDesc}
                theme="snow"
                className=""
              />
            </div>
          </Field>
        </div>
        <Button type="submit" className="mx-auto w-[250px] h-14">
          Add New Product
        </Button>
      </form>
    </DashboardLayout>
  );
};

export default ProductAdd;
