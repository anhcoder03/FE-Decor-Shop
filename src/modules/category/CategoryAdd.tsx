/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect } from "react";
import DashboardLayout from "../dashboard/DashboardLayout";
import DashboardHeading from "../dashboard/DashboardHeading";
import { Input } from "../../components/input";
import { Label } from "../../components/label";
import { Field } from "../../components/field";
import { Button } from "../../components/button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { instance } from "../../api/instance";
import { AxiosResponse } from "axios";
import { ICategory } from "../../types/Category";
import { useNavigate } from "react-router-dom";

type FormData = {
  name: string;
};
interface ApiResponse {
  message: string;
  category: ICategory[];
}

const shema = yup.object({
  name: yup.string().required("Phải nhập tên danh mục!"),
});

const CategoryAdd = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(shema),
  });

  const handleCreateCategory = async (values: FormData) => {
    if (!isValid) return;
    console.log(values);
    try {
      const response: AxiosResponse<ApiResponse> = await instance.post(
        "/categories",
        values
      );
      if (response.data) {
        toast.success(response.data.message);
        navigate("/manage/category");
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const arrayError = Object.values(errors);
    if (arrayError.length > 0) {
      toast.error(arrayError[0]?.message);
    }
  });

  return (
    <DashboardLayout>
      <DashboardHeading
        title="Add Category"
        desc="Add new category"
      ></DashboardHeading>
      <form
        className="w-full max-w-[600px] mx-auto"
        onSubmit={handleSubmit(handleCreateCategory)}
      >
        <Field>
          <Label htmlFor="name">Tên danh mục</Label>
          <Input
            type="text"
            name="name"
            placeholder="Please enter you categoryname"
            control={control}
          ></Input>
        </Field>
        <Button type="submit" className="mx-auto w-[250px] h-14">
          Thêm danh mục
        </Button>
      </form>
    </DashboardLayout>
  );
};

export default CategoryAdd;
