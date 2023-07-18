import React from "react";
import parse from "html-react-parser";
const ProductDetailDescription = ({ description }: { description: string }) => {
  return (
    <>
      <section className="mb-[30px]">
        <div className="max-w-[1280px] m-auto bg-[#222222] rounded-lg">
          <div className="p-10">
            <div className="flex items-center gap-[10px] pb-1 mb-[30px] border-b border-b-primary">
              <a href="">Description</a>
            </div>
            <div className="entry-content">{parse(description) || ""}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailDescription;
