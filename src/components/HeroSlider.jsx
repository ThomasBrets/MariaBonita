import React from "react";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { EffectFade, Autoplay } from "swiper/modules";

// Logo
import logo from "../assets/img/logo.png";

// Utils
import { scrollToSection } from "../utils/ScrollToSection";

// Img
import Img1 from "../assets/heroSlider/1.jpg";
import Img2 from "../assets/heroSlider/2.jpg";
import Img3 from "../assets/heroSlider/3.jpg";

// Slides array
const slides = [
  {
    logo: logo,
    bg: Img1,
    btnText: "Nuestro Menu",
  },
  {
    logo: logo,
    bg: Img2,
    btnText: "Nuestro Menu",
  },
  {
    logo: logo,
    bg: Img3,
    btnText: "Nuestro Menu",
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect="fade"
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="bg-green-300 h-[600px] lg:h-[860px]"
    >
      {slides.map((slide, index) => {
        // Destructure slide
        const { logo, bg, btnText } = slide;

        return (
          <SwiperSlide
            className="h-full bg-pink-300 relative flex justify-center items-center"
            key={index}
          >
            <div className="z-20 text-white text-center m-auto">
              <div>
                <img className="rounded-full" src={logo} alt="" />
              </div>
              <button
                className="btn btn-primary btn-lg mx-auto rounded mt-5"
                onClick={() => scrollToSection("#menu")}
              >
                {btnText}
              </button>
            </div>
            {/* bg-img */}
            <div className="absolute top-0 h-full w-full">
              <img className="object-cover h-full w-full" src={bg} alt="" />
            </div>
            {/* overlay */}
            <div className="absolute h-full w-full bg-black/60"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
