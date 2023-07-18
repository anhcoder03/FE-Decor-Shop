/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { Link } from "react-router-dom";
import { Tproduct } from "../../types/product";

const ProductItem = ({ data }: { data: Tproduct }) => {
  // if (!data) return;
  console.log("dataItem", data);
  
  return (
    <div className="product-elem-item bg-[#222] rounded-lg">
      <div>
        <a href={`/product/${data?._id}`}>
          <img
            className="rounded-lg"
            src={
              data?.image ||
              "https://cdn0.fahasa.com/media/catalog/product/i/m/image_179515_1.jpg"
            }
            alt={data?.name}
          />
        </a>
      </div>
      <div className="pb-[35px]">
        <a className="block text-center text-[15px] pb-[10px]">
          {data?.name || "Dapipus Toro"}{" "}
        </a>
        <span className="font-bold text-center block text-[13px]">
          {data?.price || "$189.10"}
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
