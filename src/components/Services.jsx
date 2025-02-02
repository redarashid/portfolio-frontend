import Balancer from "react-wrap-balancer";
import { content } from "../Content";

const Services = () => {
  const { services } = content;
  return (
    <section id="services">
      <div className=" md:container px-5 py-14 ">
        <h2 data-aos="fade-down" className="title">
          {services.title}
        </h2>
        <h4 data-aos="fade-down" className="subtitle">
          {services.subtitle}
        </h4>
        <br />
        <div className=" flex gap-5 justify-between flex-wrap group">
          {services.service_content.map((services, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 300}
              className=" box-services">
              <img
                src={services.logo}
                alt="..."
                loading="lazy"
                className=" mx-auto"
              />
              <h6 className=" my-3">{services.title}</h6>
              <Balancer className=" leading-7">{services.para}</Balancer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
