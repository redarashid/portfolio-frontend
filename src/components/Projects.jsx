import { content } from "../Content";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className=" md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div data-aos="fade-down">
          <h2 className="title">{Projects.title}</h2>
          <h4 className="subtitle">{Projects.subtitle}</h4>
          <br />
        </div>

        <div className=" flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            data-aos="fade-right"
            src={Projects.image}
            alt="..."
            className=" rounded-5xl max-w-[45vw] min-w-[22rem]"
          />
          <Swiper
            data-aos="fade-left"
            pagination={{
              clickable: true,
            }}
            spaceBetween={20}
            modules={[Pagination]}
            className=" rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start">
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className=" swiper-slide bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit swiper-slide-prev">
                <img src={content.image} alt="..." />
                <div className=" flex flex-col gap-1 mt-2">
                  <h5 className=" font-Poppins font-bold">{content.title}</h5>
                  <button className=" font-bold text-gray self-end">
                  
                  <a href={content.link}>live preview</a>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
