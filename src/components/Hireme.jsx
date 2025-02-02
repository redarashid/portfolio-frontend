import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className=" bg-bg_light_primary">
      <div className=" md:container px-5 pt-14">
        <h2 data-aos="fade-down" className="title">
          {Hireme.title}
        </h2>
        <h4 data-aos="fade-down" className="subtitle">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className=" flex md:flex-row flex-col-reverse items-center">
          <img
            data-aos="fade-right"
            src={Hireme.image1}
            alt="..."
            className=" max-w-sm md:block hidden"
          />
          <img
              data-aos="fade-right"
              src={Hireme.image2}
            alt="..."
            className=" max-w-sm sm:hidden"
          />
          <div
            data-aos="slide-left"
            className=" rounded-xl max-w-sm border-dark_primary shadow-sm sm:min-w-[22rem] border-2 p-6 rounded-br-[8rem]">
            <p className=" leading-7">{Hireme.para}</p>
            <br />
            <button className=" btn-1 bg-dark_primary">{Hireme.btnText}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
