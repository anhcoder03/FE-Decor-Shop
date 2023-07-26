/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect, useState } from "react";
import { LayoutMain } from "../components/layout";
import ProductDetailHeader from "../modules/productDetail/ProductDetailHeader";
import ProductDetailDescription from "../modules/productDetail/ProductDetailDescription";
import { useNavigate, useParams } from "react-router-dom";
import { getProductWithSlug } from "../api/product";
import { Tproduct } from "../types/product";
// import { IconStar } from "../components/icons";
import ProductPrice from "../components/product/ProductPrice";
import ProductImage from "../components/product/ProductImage";
import ProductCategory from "../components/homepage/ProductCategory";
import { Button } from "../components/button";
import Quantity from "../components/quantity/Quantity";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RootState } from "../store/configureStore";
import { addToCart } from "../api/cart";

const ProductDetail = () => {
  const { slug } = useParams<string>();
  const [dataDetail, setDataDetail] = useState<Tproduct>();
  const auth: any = useSelector((state: RootState) => state.auth.auth);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    async function getDataProduct() {
      const response = await getProductWithSlug(slug);
      setDataDetail(response.data?.product);
    }
    void getDataProduct();
  }, [slug]);

  const handleAddToCart: any = async () => {
    if (auth?.user) {
      const cartData = {
        productId: dataDetail?._id,
        quantity,
        userId: auth?.user?._id,
      };
      const response = await addToCart(cartData);
      toast.success(response.data.message);
      navigate("/cart");
    } else {
      toast.error("Vui lòng đăng nhập!");
      navigate("/signin");
    }
  };

  return (
    <LayoutMain>
      <ProductDetailHeader
        nameProduct={dataDetail?.name || "Product name"}
      ></ProductDetailHeader>
      <section>
        <div className="relative mx-auto max-w-[1280px] py-8">
          <div
            className="grid items-start grid-cols-1 gap-8 md:grid-cols-2"
            style={{ maxHeight: 400 }}
          >
            <ProductImage
              image={dataDetail?.image}
              name={dataDetail?.name}
            ></ProductImage>
            <div className="">
              <strong className="rounded-lg bg-[#222222] px-3 py-0.5 text-xs font-medium tracking-wide text-primary">
                Pre Order
              </strong>
              <div className="justify-between mt-8 ">
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
                  <Quantity
                    quantity={quantity}
                    setQuantity={setQuantity}
                  ></Quantity>

                  <Button
                    type="button"
                    className="block px-5 py-3 text-xs font-medium text-white rounded bg-primary"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ProductDetailDescription
        description={dataDetail?.desc || ""}
      ></ProductDetailDescription>
      <ProductCategory
        categoryId={dataDetail?.categoryId}
        id={dataDetail?._id}
      />
    </LayoutMain>
  );
};

export default ProductDetail;
