import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const slideImages = [
  {
    url: "http://splashythemes.com/opencart/OPC01/OPC010033/image/cache/catalog/demo/banners/main-banner-01-1903x730.jpg",
  },
  {
    url: "http://splashythemes.com/opencart/OPC01/OPC010033/image/cache/catalog/demo/banners/main-banner-02-1903x730.jpg",
  },
  {
    url: "http://splashythemes.com/opencart/OPC01/OPC010033/image/cache/catalog/demo/banners/main-banner-03%20-1903x730.jpg",
  },
];

const Slider = () => {
  return (
    <section className="mb-16 overflow-hidden banner page-container">
      <Swiper
        slidesPerView={"auto"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {slideImages.length > 0 &&
          slideImages.map((item) => (
            <SwiperSlide key={item.url}>
              <img src={item.url} alt="" className="w-full" />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Slider;
