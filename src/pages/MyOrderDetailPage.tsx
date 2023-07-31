/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useParams } from "react-router-dom";
import { LayoutMain } from "../components/layout";
import { getOrderById } from "../api/order";
import { useEffect, useState } from "react";
import { TOrderDetail } from "../types/order";
import { OrderHeader } from "../components/order";
import { ICart } from "../types/Cart";
import { Table } from "../components/table";
import formatPrice from "../utils/fomatPrice";

const MyOrderDetailPage = () => {
  const headings = ["STT", "Name", "Quantity", "Total Price"];
  const { id } = useParams();
  const [cart, setCart] = useState<ICart[]>([]);
  const [loading, setLoading] = useState(false);
  const handleGetOrder = async () => {
    try {
      setLoading(true);
      const response: TOrderDetail = await getOrderById(id);
      setCart(response.data.orders.carts);
      setLoading(false);
      console.log(cart);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    void handleGetOrder();
  }, [id]);
  return (
    <LayoutMain>
      <div className="container mb-10">
        <div className="mb-10">
          <OrderHeader>{id}</OrderHeader>
        </div>
        <Table headings={headings} length={cart?.length} loading={loading}>
          {cart &&
            cart.length > 0 &&
            cart.map((item: ICart, index) => (
              <tr key={item._id} className="text-sm">
                <td>{index + 1}</td>
                <td className="flex items-center gap-x-2">
                  <img
                    src={item?.productId.image}
                    className="max-w-[70px]"
                    alt=""
                  />
                  <span>{item?.productId.name}</span>
                </td>
                <td>{item?.quantity}</td>
                <td className="text-red-500">
                  {formatPrice(item?.totalPrice)} đ
                </td>
              </tr>
            ))}
        </Table>
      </div>
    </LayoutMain>
  );
};

export default MyOrderDetailPage;
