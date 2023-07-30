/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useParams } from "react-router-dom";
import { LayoutMain } from "../components/layout";
import { getOrderById } from "../api/order";
import { useEffect } from "react";
import { TOrderResponse } from "../types/order";
import { OrderHeader } from "../components/order";

const MyOrderDetailPage = () => {
  const { id } = useParams();
  const handleGetOrder = async () => {
    try {
      const response: TOrderResponse = await getOrderById(id);
      console.log(response.data.orders);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    void handleGetOrder();
  }, [id]);
  return (
    <LayoutMain>
      <div className="container">
        <div className="mb-10">
          <OrderHeader>{id}</OrderHeader>
        </div>
      </div>
    </LayoutMain>
  );
};

export default MyOrderDetailPage;
