/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { LayoutMain } from "../components/layout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/configureStore";
import formatPrice from "../utils/fomatPrice";
import { Tproduct } from "../types/product";
import { Table } from "../components/table";
import CartHeader from "../components/cart/CartHeader";
import { Button } from "../components/button";
import { useEffect } from "react";
import { updateCart } from "../api/cart";
import { toast } from "react-toastify";
import { handleGetCart } from "../store/cart/handlers";

const CartPage = () => {
  const headings = ["Image", "Name", "Quantity", "Unit Price", "Total"];
  const carts = useSelector((state: RootState) => state.cart.carts);
  const user: any = useSelector((state: RootState) => state.auth.auth);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const loading = useSelector((state: RootState) => state.cart.loading);
  const dispatch = useDispatch();
  const handleRefreshCart = () => {
    if (user?.user?._id) {
      dispatch(handleGetCart(user?.user?._id) as any);
    }
  };
  useEffect(() => {
    void handleRefreshCart();
  }, [dispatch]);
  const handleUpdate = async (quantity: number | any, id: string | any) => {
    try {
      await updateCart({
        quantity: quantity + 1,
        id,
        userId: user?.user?._id,
      });
      handleRefreshCart();
      toast.success("Update thành công");
    } catch (error) {
      console.log(error);
    }
  };
  const handleDecrementCart = async (
    quantity: number | any,
    id: string | any
  ) => {
    try {
      await updateCart({
        quantity: quantity - 1,
        id,
        userId: user?.user?._id,
      });
      handleRefreshCart();
      toast.success("Update thành công");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutMain>
      <div className="container">
        <CartHeader></CartHeader>
        <div className="my-10">
          {carts && carts.length > 0 && (
            <div>
              <Table
                headings={headings}
                length={carts?.length}
                loading={loading}
              >
                {carts &&
                  carts.length > 0 &&
                  carts.map((item: Tproduct) => (
                    <tr key={item._id}>
                      <td>
                        <img
                          src={item?.productId?.image}
                          alt={item?.productId?.name}
                          className="max-w-[70px] object-cover"
                        />
                      </td>
                      <td className="font-bold">{item?.productId?.name}</td>
                      <td>
                        <div className=" flex items-center justify-center px-5 py-3 bg-black gap-x-10 w-[150px]">
                          <button
                            className="text-xl font-bold text-primary"
                            onClick={() =>
                              handleDecrementCart(item?.quantity, item?._id)
                            }
                          >
                            -
                          </button>
                          <span>{item?.quantity}</span>
                          <button
                            className="text-xl font-bold text-primary"
                            onClick={() =>
                              handleUpdate(item?.quantity, item?._id)
                            }
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="text-[#aaaaaa] text-sm">
                        {formatPrice(item?.productId?.price)} đ
                      </td>
                      <td className="text-[#aaaaaa] text-sm">
                        {formatPrice(item?.totalPrice)} đ
                      </td>
                    </tr>
                  ))}
              </Table>
              <div className="flex items-center justify-end gap-x-5">
                <div className="flex items-center gap-x-3">
                  <span>Total:</span>
                  <span className="text-xl font-bold text-red-500">
                    {formatPrice(totalAmount)}đ
                  </span>
                </div>
                <Button
                  type="button"
                  to="/checkout"
                  className="max-w-[250px]  w-full justify-end"
                >
                  Checkout
                </Button>
              </div>
            </div>
          )}
          {!carts ||
            (carts.length === 0 && (
              <div className="flex items-center justify-center flex-col gap-y-10 w-full max-w-[500px] mx-auto">
                <img
                  src="https://iticsystem.com/img/empty-cart.png"
                  className="max-w-[300px]"
                  alt=""
                />
                <Button type="button" to="/product">
                  Mua ngay
                </Button>
              </div>
            ))}
        </div>
      </div>
    </LayoutMain>
  );
};

export default CartPage;
