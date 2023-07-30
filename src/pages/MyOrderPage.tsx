/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { LayoutMain } from "../components/layout";
import { useSelector } from "react-redux";
import { RootState } from "../store/configureStore";
import { deleteOrder, getOrderByUserId } from "../api/order";
import { useEffect, useState } from "react";
import { Table } from "../components/table";
import { IOrder, TOrderResponse } from "../types/order";
import formatPrice from "../utils/fomatPrice";
import convertTimestampToDateTime from "../utils/convertTime";
import { ActionView, IconDelete } from "../components/icons";
import { OrderHeader } from "../components/order";
import { Paginate } from "../components/paginate";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyOrderPage = () => {
  const headings = [
    "STT",
    "Date Added",
    "Total Price",
    "Payment Methods",
    "Payment Status",
    "Total Amount",
    "Status",
    "Action",
  ];
  const user = useSelector((state: RootState) => state.auth.auth?.user);
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(1);
  const naviage = useNavigate();

  const handlePageClick = (event: any) => {
    const page = event.selected + 1;
    setPage(page);
  };
  const getOrder = async () => {
    try {
      setLoading(true);
      const response: TOrderResponse = await getOrderByUserId(
        user?._id as string,
        page
      );
      setLoading(false);
      setOrders(response.data.orders);
      setPageCount(response.data.totalPage);
      console.log(orders);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    void getOrder();
  }, [user, page]);

  const handleDeleteUser = (id: any) => {
    void Swal.fire({
      title: "Bạn muốn huỷ đơn hàng này",
      text: "Thao tác này sẽ huỷ đơn hàng của bạn!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await deleteOrder(id);
          console.log(response);
          void getOrder();
          void Swal.fire(
            "Đã huỷ!",
            "Bạn đã huỷ đơn hàng thành công!",
            "success"
          );
        } catch (error: any) {
          console.log(error);
          void Swal.fire("Lỗi", error.response.data.message, "error");
        }
      }
    });
  };

  return (
    <LayoutMain>
      <div className="container">
        <div className="mb-10">
          <OrderHeader></OrderHeader>
        </div>
        <Table headings={headings} length={orders?.length} loading={loading}>
          {orders &&
            orders.length > 0 &&
            orders.map((item: IOrder, index) => (
              <tr key={item._id} className="text-sm">
                <td>{index + 1}</td>
                <td className="">
                  {convertTimestampToDateTime(item?.createdAt)}
                </td>
                <td>{formatPrice(item?.totalAmount)}đ</td>
                <td>{item?.paymentMethods}</td>
                <td>{item?.paymentStatus}</td>
                <td className="text-red-500">
                  {formatPrice(item?.totalAmount)}đ
                </td>
                <td>{item?.status}</td>
                <td>
                  <div className="flex items-center gap-x-2">
                    <ActionView
                      onClick={() => naviage(`/my-order/detail/${item?._id}`)}
                    ></ActionView>
                    {item?.status === "Pending" && (
                      <IconDelete
                        onClick={() => handleDeleteUser(item?._id)}
                      ></IconDelete>
                    )}
                  </div>
                </td>
              </tr>
            ))}
        </Table>
        {pageCount > 1 && (
          <Paginate
            handlePageClick={handlePageClick}
            pageCount={pageCount}
          ></Paginate>
        )}
      </div>
    </LayoutMain>
  );
};

export default MyOrderPage;
