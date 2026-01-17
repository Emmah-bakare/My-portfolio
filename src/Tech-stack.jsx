import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import tailwind from "./assets/tailwindcss.svg";
import tsnode from "./assets/tsnode.svg";
import react from "./assets/react.svg";
import nextdot from "./assets/nextdotjs.svg";
import nodedot from "./assets/nodedotjs.svg";
import "./tech-stack.css";
import "swiper/css";
import "swiper/css/autoplay";

export default function TechStack() {
  const style = {
    height: "50px",
    width: "80px",
  };

  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      speed={4000} // Adjust for faster/slower scroll
      slidesPerView={6}
      spaceBetween={20}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      allowTouchMove={false} // Optional: prevents user from "breaking" the flow
      className="tech-swiper"
    >
      {/* Duplicate your icons if you have fewer than 10 */}
      <SwiperSlide>
        <img style={style} src={react} alt="React" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={style} src={nextdot} alt="Next" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={style} src={nodedot} alt="Node" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={style} src={tailwind} alt="Tailwind" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={style} src={tsnode} alt="TypeScript" />
      </SwiperSlide>
      {/* Repeats for a denser marquee */}
      <SwiperSlide>
        <img style={style} src={react} alt="React" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={style} src={nextdot} alt="Next" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={style} src={nodedot} alt="Node" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={style} src={tailwind} alt="Tailwind" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={style} src={tsnode} alt="TypeScript" />
      </SwiperSlide>
    </Swiper>
  );
}
