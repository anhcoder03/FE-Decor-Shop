/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect, useState } from "react";
import { LayoutMain } from "../components/layout";
import ProductDetailHeader from "../modules/productDetail/ProductDetailHeader";
import ProductDetailDescription from "../modules/productDetail/ProductDetailDescription";
import { useParams } from "react-router-dom";
import { getProductWithSlug } from "../api/product";
import { Tproduct } from "../types/product";
// import { IconStar } from "../components/icons";
import ProductPrice from "../components/product/ProductPrice";
import ProductImage from "../components/product/ProductImage";
import ProductCategory from "../components/homepage/ProductCategory"
const ProductDetail = () => {
  const { slug } = useParams<string>();
  const [dataDetail, setDataDetail] = useState<Tproduct>();
  useEffect(() => {
    async function getDataProduct() {
      const response = await getProductWithSlug(slug);
      setDataDetail(response.data?.product);
    }
    void getDataProduct();
  }, [slug]);
  console.log("dataDetail", dataDetail);
  
  return (
    <LayoutMain>
      <ProductDetailHeader
        nameProduct={dataDetail?.name || "Product name"}
      ></ProductDetailHeader>
      <section>
        <div className="relative mx-auto max-w-[1280px] py-8">
          <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2" style={{maxHeight: 400}}>
            <ProductImage
              image={dataDetail?.image}
              name={dataDetail?.name}
            ></ProductImage>
            <div className="">
              <strong className="rounded-lg bg-[#222222] px-3 py-0.5 text-xs font-medium tracking-wide text-primary">
                Pre Order
              </strong>
              <div className=" justify-between mt-8">
                <div className="max-w-[35ch] space-y-2">
                  <h1 className="text-xl font-bold sm:text-2xl">
                    {dataDetail?.name || ""}
                  </h1>
                  <p className="text-sm">Highest Rated Product</p>
                  {/* <div className="-ms-0.5 flex">
                    {Array(5)
                      .fill(0)
                      .map((index) => (
                        <IconStar key={index}></IconStar>
                      ))}
                  </div> */}
                </div>
                <ProductPrice price={dataDetail?.price}></ProductPrice>
              </div>
              {/* <div style={{marginTop: 20}}>{parse(dataDetail?.desc || "")}</div> */}
              <form className="mt-8">
                <div className="flex gap-4 mt-8">
                  <div>
                    <label htmlFor="quantity" className="sr-only">
                      Qty
                    </label>

                    <input
                      type="number"
                      id="quantity"
                      min="1"
                      defaultValue={1}
                      className="text-primary font-bold text-base bg-white w-12 rounded border-gray-200 py-3 text-center  [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="block px-5 py-3 text-xs font-medium text-white rounded bg-primary"
                  >
                    Add to Cart
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ProductDetailDescription
        description={dataDetail?.desc || ""}
      ></ProductDetailDescription>
      <ProductCategory  categoryId = {dataDetail?.categoryId} id = {dataDetail?._id}/>
    </LayoutMain>
  );
};



export default ProductDetail;
