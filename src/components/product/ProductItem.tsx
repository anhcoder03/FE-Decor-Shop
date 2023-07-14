import React from "react";
import { Link } from "react-router-dom";

const ProductItem = () => {
  return (
    <div className="product-elem-item bg-[#222] rounded-lg">
      <div>
        <a>
          <img
            className="rounded-lg"
            src="http://splashythemes.com/opencart/OPC01/OPC010033/image/cache/catalog/demo/product/19-277x292.jpg"
          />
        </a>
      </div>
      <div className="pb-[35px]">
        <a className="block text-center text-[15px] pb-[10px]">Dapipus Toro</a>
        <span className="font-bold text-center block text-[13px]">$189.10</span>
      </div>
    </div>
  );
};

export default ProductItem;
