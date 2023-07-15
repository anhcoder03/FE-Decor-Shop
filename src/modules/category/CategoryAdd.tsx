import React from "react";
import DashboardLayout from "../dashboard/DashboardLayout";
import DashboardHeading from "../dashboard/DashboardHeading";
import { Input } from "../../components/input";
import { Label } from "../../components/label";
import { Field } from "../../components/field";
import { Button } from "../../components/button";

const CategoryAdd = () => {
  return (
    <DashboardLayout>
      <DashboardHeading
        title="Add Category"
        desc="Add new category"
      ></DashboardHeading>
      <form className="w-full max-w-[600px] mx-auto">
        <Field>
          <Label htmlFor="name">Tên danh mục</Label>
          <Input
            type="text"
            name="name"
            placeholder="Please enter you categoryname"
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
