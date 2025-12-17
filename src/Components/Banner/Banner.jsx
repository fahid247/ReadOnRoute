import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../assets/daria-nepriakhina-xY55bL5mZAM-unsplash.jpg";
import image2 from "../../assets/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import image3 from "../../assets/susan-q-yin-2JIvboGLeho-unsplash.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from 'swiper/modules'

// Import required modules
import { Pagination, Navigation } from "swiper/modules";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

const Banner = () => {
   
  return (
    <ParallaxProvider>
      <div className=" py-8 ">
        <div className="h-screen bg-black text-white">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{delay:2500 , pauseOnMouseEnter:true}}
            pagination={{ clickable: true }}
            navigation={true}
            
            modules={[Pagination, Navigation,Autoplay]}
            className="w-full h-full"
          >
            <SwiperSlide>
              <div className="relative w-full h-full">
                <ParallaxBanner
                  layers={[
                    {
                      image: image1,
                      speed: -20,
                      children: (
                        <div className="absolute inset-0 bg-black/50"></div>
                      ),
                    },
                    {
                      speed: -15,
                      children: (
                        <div className="absolute inset-0  flex justify-center items-center">
                          <div className="text-center">
                            <h1 className=" text-[#F8FAFC] font-bold animate__animated animate__fadeInDown text-2xl sm:text-4xl md:text-6xl">
                              “Your Library, Delivered to Your Doorstep”
                            </h1>
                            <h4 className="text-[#E5E7EB] text-sm sm:text-lg md:text-xl font-bold animate__animated animate__fadeInUp w-2/3 mx-auto mt-5">
                              Order, track, and return books from your favorite
                              libraries — all from one platform.
                            </h4>
                            <button className="bg-secondary-content  hover:bg-primary cursor-pointer text-white font-semibold px-6 py-3 rounded-full mt-5 transition">
                              Order Now
                            </button>
                          </div>
                        </div>
                      ),
                    },
                  ]}
                  className="h-full w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full">
                <ParallaxBanner
                  layers={[
                    {
                      image: image2,
                      speed: -20,
                      children: (
                        <div className="absolute inset-0 bg-black/50"></div>
                      ),
                    },
                    {
                      speed: -15,
                      children: (
                        <div className="absolute inset-0  flex justify-center items-center">
                          <div className="text-center">
                            <h1 className=" text-[#F8FAFC] font-bold animate__animated animate__fadeInDown text-2xl sm:text-4xl md:text-6xl">
                              “Designed for Students, Researchers & Readers”
                            </h1>
                            <h4 className="text-[#E5E7EB] text-sm sm:text-lg md:text-xl font-bold animate__animated animate__fadeInUp w-2/3 mx-auto mt-5">
                              Access academic and general books from trusted libraries
                    without travel or waiting lines.
                            </h4>
                            <button className="bg-secondary-content  hover:bg-primary cursor-pointer text-white font-semibold px-6 py-3 rounded-full mt-5 transition">
                              explore more
                            </button>
                          </div>
                        </div>
                      ),
                    },
                  ]}
                  className="h-full w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full">
                <ParallaxBanner
                  layers={[
                    {
                      image: image3,
                      speed: -20,
                      children: (
                        <div className="absolute inset-0 bg-black/50"></div>
                      ),
                    },
                    {
                      speed: -15,
                      children: (
                        <div className="absolute inset-0  flex justify-center items-center">
                          <div className="text-center">
                            <h1 className=" text-[#F8FAFC] font-bold animate__animated animate__fadeInDown text-2xl sm:text-4xl md:text-6xl">
                              “Empowering Libraries with Modern Delivery Tools”
                            </h1>
                            <h4 className="text-[#E5E7EB] text-sm sm:text-lg md:text-xl font-bold animate__animated animate__fadeInUp w-2/3 mx-auto mt-5">
                               Manage books, track orders, and serve readers efficiently through BookCourier.
                            </h4>
                            <button className="bg-secondary-content  hover:bg-primary cursor-pointer text-white font-semibold px-6 py-3 rounded-full mt-5 transition">
                             Become a Librarian
                            </button>
                          </div>
                        </div>
                      ),
                    },
                  ]}
                  className="h-full w-full"
                />
              </div>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default Banner;
