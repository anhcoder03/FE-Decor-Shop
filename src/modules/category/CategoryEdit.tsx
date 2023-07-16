/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect } from "react";
import DashboardLayout from "../dashboard/DashboardLayout";
import DashboardHeading from "../dashboard/DashboardHeading";
import { Field } from "../../components/field";
import { Label } from "../../components/label";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import { instance } from "../../api/instance";
import { ICategory } from "../../types/Category";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";

type FormData = {
  name: string;
};

interface ApiResponse {
  message: string;
  category: ICategory;
}

const shema = yup.object({
  name: yup.string().required("Phải nhập tên danh mục!"),
});
const CategoryEdit = () => {
  const { id } = useParams<string>();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(shema),
  });

  useEffect(() => {
    async function handleGetCategory() {
      try {
        const response: AxiosResponse<ApiResponse> = await instance.get(
          `/categories/${id}`
        );
        console.log(response.data);
        reset(response.data.category);
      } catch (error) {
        console.log(error);
      }
    }
    void handleGetCategory();
  }, [id]);

  const handleUpdateCategory = async (values: FormData) => {
    if (!isValid) return;
    try {
      const response: AxiosResponse<ApiResponse> = await instance.put(
        `/categories/${id}`,
        values
      );
      if (response.data) {
        toast.success(response.data.message);
        navigate("/manage/category");
      }
    } catch (error) {
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
        title="Edit Category"
        desc="Add new category"
      ></DashboardHeading>
      <form
        className="w-full max-w-[600px] mx-auto"
        onSubmit={handleSubmit(handleUpdateCategory)}
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

export default CategoryEdit;
