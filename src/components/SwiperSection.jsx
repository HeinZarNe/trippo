// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import arrow from "../assets/arrow-pointing-to-right-1.svg";
import { useRef, useState } from "react";
import { BsCircleFill } from "react-icons/bs";

export default function SwiperSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const swiperRef = useRef(null);

  const handleSlideNext = () => {
    // Adjust the number based on the total number of slides

    currentSlide === 0 && swiperRef.current.slideNext();
    currentSlide === 1 && swiperRef.current.slidePrev();
  };
  return (
    <div className="flex flex-row mt-[40px] h-max">
      <div className="swiper-section w-[52vw] mr-[-16vw] ">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(swiper) => {
            setCurrentSlide(swiper.activeIndex);
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          <SwiperSlide className="h-auto">
            {/* Desktop */}
            <div className="w-full  h-auto flex flex-row-reverse flex-nowrap overflow-hidden">
              <div className="flex flex-row-reverse absolute top-[23px] right-[40px] gap-[20px] flex-nowrap overflow-hidden">
                <div className=" ">
                  <img
                    src="./assets/trippro.com.hk_cn_-1.png"
                    className="min-w-[340px] h-[175px]"
                    alt=""
                  />
                </div>
                <div className=" ">
                  <img
                    src="./assets/trippro.com.hk_cn_-2.png"
                    className="min-w-[340px] h-[175px]"
                    alt=""
                  />
                </div>
              </div>{" "}
              <div></div>
              <div className="min-w-[400px] h-[300px] ">
                <img className="h-full" src="./assets/computer.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-auto flex flex-row">
              <img
                src="./assets/mobile.png"
                className="w-[455px] translate-x-10  "
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="swiper-section-background flex flex-col items-end flex-1  pr-36 pl-52 gap-6 pt-11">
        <div className="max-w-[500px] overflow-hidden  flex flex-col gap-5">
          <div className="text-white font-bold text-left text-lg lg:text-xl  w-full ">
            Their Old Website & Problems
          </div>
          <div className="flex flex-col gap-3">
            {Array(3)
              .fill("")
              .map((_) => {
                return (
                  <div className="flex flex-row items-start gap-2">
                    <div className="mt-1 w-[50px]">
                      <img src={arrow} />
                    </div>
                    <span className="text-white text-sm w-full whitespace-nowrap">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor
                    </span>
                  </div>
                );
              })}{" "}
          </div>{" "}
          <button
            onClick={handleSlideNext}
            // Adjust the number based on the total number of slides
            className={`w-[180px] h-[50px] self-start rounded-[50px] ${
              currentSlide === 0 ? "section-button-0" : "section-button-1"
            } text-lg font-bold text-white border-[1px] border-white`}
          >
            {" "}
            {currentSlide === 0 ? "Desktop" : "Mobile"}
            <div className="relative ">
              <BsCircleFill
                className={
                  currentSlide === 0
                    ? "absolute right-[14px] top-[-26px]"
                    : "absolute left-[14px] top-[-26px]"
                }
                size={25}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
