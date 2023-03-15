import React from "react";
import { FiUsers } from "react-icons/fi";
import { RiStarSLine } from "react-icons/ri";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";

const CoursesSwiper = ({ courses }) => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 2000,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 2,
          },
          400: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        style={{
          paddingBottom: "80px",
        }}
      >
        {courses.map((item, id) => {
          const { image, category, title, rating, participants, price } = item;

          return (
            <SwiperSlide key={id}>
              <div className="bg-white p-3 min-h-[420px] rounded-md border-4 border-solid border-Teal">
                <div>
                  <img
                    className="rounded-md select-none"
                    src={image}
                    alt="courses-img"
                  />
                </div>

                <div className="mt-5 flex flex-col gap-3">
                  <span className="text-Teal text-lg font-bold">
                    {category}
                  </span>
                  <h1 className="font-semibold">{title}</h1>
                  <div className="flex mt-5 items-center justify-between">
                    {/* participants */}
                    <div className="flex items-center gap-2">
                      <FiUsers className="text-2xl"></FiUsers>
                      <span className="text-lg text-Teal font-bold">
                        {participants}
                      </span>
                    </div>

                    {/* rating */}
                    <div className="flex items-center gap-1">
                      <RiStarSLine className="text-3xl"></RiStarSLine>
                      <span className="text-lg text-Teal font-bold">
                        {rating}
                      </span>
                    </div>

                    {/* price */}
                    <div className="text-lg text-Teal font-bold">${price}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CoursesSwiper;
