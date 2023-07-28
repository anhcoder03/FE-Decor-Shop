/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from "react-hook-form";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { instance } from "../api/instance";
import { LayoutMain } from "../components/layout";
import { Field } from "../components/field";
import { Label } from "../components/label";
import CartHeader from "../components/cart/CartHeader";
import { RootState } from "../store/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { Tproduct } from "../types/product";
import formatPrice from "../utils/fomatPrice";
import { useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { order } from "../api/order";
import { resetCart } from "../store/cart/cartSlice";

const schema = yup.object({
  fullname: yup.string().required("Phải nhập tên sản phẩm!"),
  email: yup.string().required("Phải nhập tên sản phẩm!"),
  shippingAddress: yup.string().required("Phải nhập địa chỉ giao hàng"),
  phoneNumber: yup
    .number()
    .integer("Phải nhập đúng số điện thoại")
    .required("Phải nhập số điện thoại!"),
});

const Checkout = () => {
  const carts = useSelector((state: RootState) => state.cart.carts);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const auth = useSelector((state: RootState) => state.auth.auth);
  const dispatch = useDispatch();
  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    function set() {
      setValue("fullname", auth?.user?.name as any);
      setValue("email", auth?.user?.email as any);
    }
    set();
  }, [auth?.user?.email, auth?.user?.name, setValue]);
  const handlePayment = async (values: any) => {
    const data = {
      phoneNumber: values.phoneNumber,
      shippingAddress: values.shippingAddress,
      userId: auth?.user?._id,
      amount: totalAmount,
    };
    try {
      const response = await instance.post("/create_payment_url", data);
      window.location.href = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckout = async (values: any) => {
    const data = {
      phoneNumber: values.phoneNumber,
      shippingAddress: values.shippingAddress,
      userId: auth?.user?._id,
      totalAmount,
    };
    try {
      const response = await order(data);
      console.log(response.data);
      toast.success(response.data.message);
      dispatch(resetCart());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const arrayError = Object.values(errors);
    if (arrayError.length > 0) {
      toast.error(arrayError[0]?.message);
    }
  });
  // shippingAddress, phoneNumber, userId
  return (
    <LayoutMain>
      <div className="container">
        <CartHeader>Checkout</CartHeader>
        <div className="my-10 grid max-w-[1000px] w-full mx-auto  grid-cols-[550px_minmax(0,1fr)] gap-x-16">
          <form action="">
            <Field>
              <Label htmlFor="fullname">Fullname</Label>
              <Input
                control={control}
                name="fullname"
                type="text"
                placeholder="Họ và tên"
                disabled
              ></Input>
            </Field>
            <Field>
              <Label htmlFor="email">Email</Label>
              <Input
                control={control}
                name="email"
                type="text"
                placeholder="Email"
                disabled
              ></Input>
            </Field>
            <Field>
              <Label htmlFor="shippingAddress">Địa chỉ</Label>
              <Input
                control={control}
                name="shippingAddress"
                type="text"
                placeholder="Địa chỉ"
              ></Input>
            </Field>
            <Field>
              <Label htmlFor="phoneNumber">Số điện thoại</Label>
              <Input
                control={control}
                name="phoneNumber"
                type="text"
                placeholder="Số điện thoại"
              ></Input>
            </Field>
            <div className="flex items-center gap-x-10">
              <Button
                type="submit"
                onClick={handleSubmit(handlePayment)}
                className="w-full h-12"
              >
                Thanh toán online
              </Button>
              <Button
                type="submit"
                onClick={handleSubmit(handleCheckout)}
                className="w-full h-12"
              >
                Thanh toán khi nhận hàng
              </Button>
            </div>
          </form>
          <div className="flex flex-col gap-y-5">
            {carts &&
              carts.length > 0 &&
              carts.map((item: Tproduct) => (
                <div className="flex items-center gap-x-5" key={item._id}>
                  <div>
                    <img
                      src={item?.productId?.image}
                      alt=""
                      className="max-w-[80px] object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-primary ">
                      {item?.productId?.name}
                    </h3>
                    <p className="flex items-center text-sm gap-x-2">
                      <span>Số lượng:</span>
                      <span>{item?.quantity}</span>
                    </p>
                    <p className="flex items-center text-sm gap-x-2">
                      <span>Tổng giá:</span>
                      <span className="text-red-500">
                        {formatPrice(item?.totalPrice)}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </LayoutMain>
  );
};

export default Checkout;
