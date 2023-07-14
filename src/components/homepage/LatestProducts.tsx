import React from "react";
import Heading from "../common/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductItem from "../product/ProductItem";

const LatestProducts = () => {
  return (
    <div>
      <Heading className="mb-10">LATEST PRODUCTS</Heading>
      <div className="product-swiper">
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
          {Array(10)
            .fill(0)
            .map((item, index) => (
              <SwiperSlide className="grid grid-cols-5 gap-5 mb-10">
                <ProductItem></ProductItem>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LatestProducts;
