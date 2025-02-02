import { content } from "../Content";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { lazy } from "react";
// ..
AOS.init();

const Hero = () => {
  const { hero } = content;
  return (
    <section id="home">
      <div className=" min-h-screen relative flex md:flex-row flex-col-reverse md:items-end items-center justify-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className=" absolute top-0 right-0 h-full bottom-0 md:w-4/12 w-8/12 bg-primaryLinear -z-10">
          <h1 className=" rotate-90 top-[30%] absolute right-[-15%] text-[#EAF2FA] text-6xl font-bold font-Poppins">
            {hero.firstName}
            <span className=" text-dark_primary pl-2">{hero.LastName}</span>
          </h1>
        </div>
        <div className=" pb-16 px-6" data-aos="fade-down">
          <h2 className="">{hero.title}</h2>
          <br />
          <div className=" flex justify-end">
            <button className=" btn">{hero.btnText}</button>
          </div>
          <div className=" flex flex-col mt-10 gap-10">
            {hero.hero_content.map((content, i) => (
              <div
                data-aos="fade-down"
                data-aos-delay={i * 300}
                key={i}
                className={` flex items-center w-80 gap-5 ${
                  i === 1 && "flex-row-reverse"
                }`}>
                <h3 className=" text-5xl leading-none">{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div loading={lazy} data-aos="slide-up" className=" md:h-[37rem] h-96">
          <img src={hero.image} alt="..." className=" h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
