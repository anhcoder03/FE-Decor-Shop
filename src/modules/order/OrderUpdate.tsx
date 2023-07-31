/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../dashboard/DashboardLayout";
import DropdownStatusOrder from "../../components/select/DropdownStatusOrder";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Button } from "../../components/button";
import { Field } from "../../components/field";
import { Label } from "../../components/label";
import { useEffect } from "react";
import { updateOrder } from "../../api/order";
import { toast } from "react-toastify";

type TOrderUpdate = {
  data: {
    message: string;
  };
};

const schema = yup.object({
  status: yup
    .string()
    .required("Vui lòng chọn trạng thái giao hàng!")
    .oneOf([
      "Pending",
      "Waiting for the goods",
      "Delivery in progress",
      "Delivery successful",
      "Delivery failed",
    ]),
});

const OrderUpdate = () => {
  const { id } = useParams();
  const orderStatus = {
    pending: "Pending",
    waiting: "Waiting for the goods",
    progess: "Delivery in progress",
    success: "Delivery successful",
    failed: "Delivery failed",
  };
  const navigate = useNavigate();

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleUpdateOrder = async (values: any) => {
    console.log(values);
    try {
      const response: TOrderUpdate = await updateOrder(id, values);
      toast.success(response.data.message);
      navigate("/manage/order");
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const arrayError = Object.values(errors);
    if (arrayError.length > 0) {
      toast.error(arrayError[0]?.message);
    }
  }, [errors]);

  return (
    <DashboardLayout>
      <div className="container">
        <form
          action=""
          className="w-full max-w-[600px] mx-auto"
          onSubmit={handleSubmit(handleUpdateOrder)}
        >
          <Field>
            <Label>Trạng thái đơn hàng</Label>
            <DropdownStatusOrder
              control={control}
              data={orderStatus}
              name="status"
              setValue={setValue}
            ></DropdownStatusOrder>
          </Field>
          <Button
            type="submit"
            disabled={isSubmitting}
            isLoading={isSubmitting}
            className="mx-auto w-[250px] h-14"
          >
            Update
          </Button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default OrderUpdate;
