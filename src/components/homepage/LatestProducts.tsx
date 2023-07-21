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

const LatestProducts = () => {
  const [products, setProducts] = useState<Tproduct[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const data = await getAllProduct(
        "/products?categoryId=64b3af76955476a738ebb26f"
      );
      setProducts(data.data.product);
    };
    void getProducts();
  }, []);
  return (
    <div>
      <Heading className="mb-10">BÀN LÀM VIỆC</Heading>
      <div className="product-swiper">
        {!products.length && (
          <Swiper
            spaceBetween={10}
            slidesPerView={2}
            modules={[Navigation]}
            loop={true}
            navigation
            breakpoints={{
              1440: {
                slidesPerView: 5,
              },
              970: {
                slidesPerView: 4,
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
              .map((item, index) => (
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
            slidesPerView={2}
            modules={[Navigation]}
            loop={true}
            navigation
            breakpoints={{
              1440: {
                slidesPerView: 5,
              },
              970: {
                slidesPerView: 4,
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

export default LatestProducts;
