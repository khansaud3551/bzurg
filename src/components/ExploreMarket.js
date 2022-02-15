import React from "react";
import "./ExploreMarket.css";
import ExploreMarketCard from "./ExploreMarketCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

function ExploreMarket() {
  return (
    <div className="container-fluid px-3 px-md-5 my-5">
      <h2 className="font-700 heading_sec">Explore The Market Place</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={1}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@0.90": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@1.10": {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          "@1.50": {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ExploreMarketCard
            img="assets/explore1.png"
            subheading="Build your brand"
            title="Graghic Desgning"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ExploreMarketCard
            img="assets/explore2.png"
            subheading="Build your brand"
            title=" Application Development"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ExploreMarketCard
            img="assets/explore3.png"
            subheading="Health "
            title="Personal Health Care"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ExploreMarketCard
            img="assets/explore4.png"
            subheading="Grow your business "
            title="Video Creator"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ExploreMarketCard
            img="assets/explore1.png"
            subheading="Build your brand"
            title="Graghic Desgning"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ExploreMarketCard
            img="assets/explore3.png"
            subheading="Health "
            title="Personal Health Care"
          />
        </SwiperSlide>
      </Swiper>
      {/* <h3 className="heading_sec font-700">Explore The Market Place</h3>
      <div className="row py-2">
        <ExploreMarketCard
          img="assets/explore1.png"
          subheading="Build your brand"
          title="Graghic Desgning"
        />
        <ExploreMarketCard
          img="assets/explore2.png"
          subheading="Build your brand"
          title=" Application Development"
        />
        <ExploreMarketCard
          img="assets/explore3.png"
          subheading="Health "
          title="Personal Health Care"
        />
        <ExploreMarketCard
          img="assets/explore4.png"
          subheading="Grow your business "
          title="Video Creator"
        />
      </div> */}
    </div>
  );
}

export default ExploreMarket;
