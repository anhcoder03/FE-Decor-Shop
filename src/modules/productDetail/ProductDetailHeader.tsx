import React from "react";
import IconHome from "../../components/icons/iconHome";
const ProductDetailHeader = ({ nameProduct }: { nameProduct: string }) => {
  return (
    <div>
      <div>
        {" "}
        <div className="Detail-Panner flex items-center justify-center bg-[#222222] py-10">
          <div className="flex overflow-hidden rounded-lg">
            <li className="flex items-center gap-[10px] border-r border-r-slate-400 px-4">
              <IconHome></IconHome>
              <a
                href="#"
                className="flex items-center gap-1.5 transition text-[16px] text-[#ffffff]"
              >
                Home
              </a>
            </li>
            <li className="flex items-center bg-[#222222] px-4">
              <a
                href="#"
                className="flex items-center gap-1.5 transition text-[16px] text-primary border-r border-r-slate-400 pr-4"
              >
                Product
              </a>
            </li>
            <li className="flex items-center bg-[#222222]">
              <a
                href="#"
                className="flex items-center gap-1.5 transition text-[16px] text-primary"
              >
                {nameProduct}
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailHeader;
