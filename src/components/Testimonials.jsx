import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useState } from "react";

const Testimonials = () => {
  const { Testimonials } = content;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section>
      <div className=" md:container px-5 pt-14">
        <h2 data-aos="fade-down" className="title">
          {Testimonials.title}
        </h2>
        <h4 data-aos="fade-down" className="subtitle">
          {Testimonials.subtitle}
        </h4>
        <br />

        <Swiper
          className="  md:h-96 h-[40rem] max-w-3xl"
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          data-aos="fade-up"
          data-aos-duration="3000"
          loop={true}
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={(e) => {
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}>
          {Testimonials.testimonials_content.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={`box-testimonials ${
                  activeIndex !== i && " scale-75 blur-sm"
                } `}>
                <img src={content.img} className=" h-24" />
                <div>
                  <p className=" sm:text-base text-sm flex font-Poppins">
                    {content.review}
                  </p>
                  <br />
                  <h6 className=" font-bold font-Paprika flex">
                    {content.name}
                  </h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
