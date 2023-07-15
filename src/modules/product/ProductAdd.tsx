import React from "react";
import DashboardLayout from "../dashboard/DashboardLayout";
import DashboardHeading from "../dashboard/DashboardHeading";
import { Field } from "../../components/field";
import { Label } from "../../components/label";
import { Input } from "../../components/input";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "../../components/button";

const ProductAdd = () => {
  return (
    <DashboardLayout>
      <DashboardHeading
        title="Add Product"
        desc="Add new product"
      ></DashboardHeading>

      <form>
        <div className="form-layout">
          <Field>
            <Label htmlFor="name">Product Name</Label>
            <Input
              name="name"
              placeholder="Enter product name"
              type="text"
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="price">Price</Label>
            <Input
              name="price"
              placeholder="Enter product price"
              type="text"
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label htmlFor="image">Image</Label>
            <Input
              name="image"
              placeholder="Enter product image"
              type="text"
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="category">Danh mục</Label>
            <Input
              name="category"
              placeholder="Enter product category"
              type="text"
            ></Input>
          </Field>
        </div>
        <div>
          <Field>
            <Label htmlFor="desc">Description</Label>
            <div className="w-full entry-content">
              <ReactQuill theme="snow" className="" />
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
