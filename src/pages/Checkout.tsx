import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { instance } from "../api/instance";

const Checkout = () => {
  const { handleSubmit, control } = useForm();
  const checkout = async (values: any) => {
    try {
      const response = await instance.post("/create_payment_url", values, {
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest", // Thêm tiêu đề này
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    console.log(values);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit(checkout)}>
        <Input
          control={control}
          name="amount"
          type="number"
          placeholder="Amount"
        ></Input>
        <Button type="submit">Checkout</Button>
      </form>
    </div>
  );
};

export default Checkout;
