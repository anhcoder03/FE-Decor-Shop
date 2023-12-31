/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect, useState } from "react";
import Heading from "../common/Heading";
import ProductItem from "../product/ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Tproduct } from "../../types/product";
import { getAllProduct } from "../../api/product";
import CardSkeleton from "../common/CardSkeleton";

const TopRateProduct = () => {
  const [products, setProducts] = useState<Tproduct[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const data = await getAllProduct(
        "/products?categoryId=64b3ad6e91116843c27b97bd"
      );
      setProducts(data.data.product);
    };
    void getProducts();
  }, []);
  return (
    <div>
      <Heading className="mb-10">ĐÈN TRANG TRÍ</Heading>
      <div className="product-swiper">
        {!products.length && (
          <Swiper
            spaceBetween={10}
            slidesPerView={5}
            modules={[Navigation]}
            loop={true}
            navigation
            breakpoints={{
              1440: {
                slidesPerView: 5,
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
              .map((_item, index) => (
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
                slidesPerView: 5,
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

export default TopRateProduct;
