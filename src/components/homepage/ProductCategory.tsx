/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Heading from "../common/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductItem from "../product/ProductItem";
import { useEffect, useState } from "react";
import { Tproduct } from "../../types/product";
import { getAllProduct } from "../../api/product";
import CardSkeleton from "../common/CardSkeleton";

const ProductCategory = (props: any) => {
  const [products, setProducts] = useState<Tproduct[]>([]);
  const { categoryId, id } = props;

  useEffect(() => {
    if (categoryId) {
      const getProducts = async () => {
        const data = await getAllProduct(
          `/products?categoryId=${categoryId?._id}`
        );
        let productCategory = await data?.data?.product?.filter(
          (item: any) => item?._id !== id
        );

        setProducts(productCategory);
      };
      void getProducts();
    }
  }, [categoryId, id]);
  return (
    <div>
      <Heading className="mb-10">Sản phẩm tương tự</Heading>
      <div
        className="product-swiper"
        style={{ maxWidth: 1280, margin: "0 auto" }}
      >
        {!products.length && (
          <Swiper
            spaceBetween={10}
            slidesPerView={5}
            modules={[Navigation]}
            loop={true}
            navigation
            breakpoints={{
              1440: {
                slidesPerView: 6,
              },
              970: {
                slidesPerView: 5,
              },
              768: {
                slidesPerView: 4,
              },
              720: {
                slidesPerView: 3,
              },
              360: {
                slidesPerView: 2,
              },
            }}
          >
            {Array(9)
              .fill(0)
              .map((_items, index) => (
                <SwiperSlide
                  className="grid grid-cols-5 gap-5 mb-10"
                  key={index}
                >
                  <CardSkeleton></CardSkeleton>
                </SwiperSlide>
              ))}
          </Swiper>
        )}
        {products.length > 0 && (
          <Swiper
            spaceBetween={10}
            slidesPerView={5}
            modules={[Navigation]}
            loop={true}
            navigation
            breakpoints={{
              1440: {
                slidesPerView: 6,
              },
              970: {
                slidesPerView: 5,
              },
              768: {
                slidesPerView: 4,
              },
              720: {
                slidesPerView: 3,
              },
              360: {
                slidesPerView: 2,
              },
            }}
          >
            {products?.map((item, index) => (
              <SwiperSlide className="grid grid-cols-5 gap-5 mb-10" key={index}>
                <ProductItem data={item} key={item._id}></ProductItem>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default ProductCategory;
