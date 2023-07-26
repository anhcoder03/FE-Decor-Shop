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

const CartPage = () => {
  const headings = ["Image", "Name", "Quantity", "Unit Price", "Total"];
  const carts = useSelector((state: RootState) => state.cart.carts);
  const loading = useSelector((state: RootState) => state.cart.loading);
  return (
    <LayoutMain>
      <div className="container">
        <CartHeader></CartHeader>
        <div className="my-10">
          {carts && carts.length > 0 && (
            <Table headings={headings} length={carts?.length} loading={loading}>
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
                    <td>{item?.quantity}</td>
                    <td className="text-[#aaaaaa] text-sm">
                      {formatPrice(item?.productId?.price)} đ
                    </td>
                    <td className="text-[#aaaaaa] text-sm">
                      {formatPrice(item?.totalPrice)} đ
                    </td>
                  </tr>
                ))}
            </Table>
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
