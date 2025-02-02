import { createElement, useState } from "react";
import { content } from "../Content";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "100%",
  },
  overlay: {
    padding: "2rem",
  },
};

Modal.setAppElement("#root");

const Skills = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(0);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const { skills } = content;
  return (
    <section className=" min-h-fit bg-bg_light_primary" id="skills">
      {/* Modle */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}>
        <div className=" flex items-center gap-2">
          <img src={selectSkill.logo} className=" h-10 max-w-full" alt="..." />
          <h6>{selectSkill.name}</h6>
        </div>
        <br />
        <ul className=" list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7 mb-2 ">
          <li>
            Cloud-Based Collaboration: Figma is a cloud-based design tool that
            allows
          </li>
          <li>Prototyping Made Easy Lorem</li>
          <li>Cross-Platform Accessibility</li>
          <li>
            Component Reusability: Figma supports the creation of reusable
            components and design system
          </li>
          <li>Plugins and Integrations</li>
          <br />
          <div className="flex justify-end">
            <button
              onClick={() => {
                closeModal();
              }}
              className="btn ">
              Close
            </button>
          </div>
        </ul>
      </Modal>

      {/* Content */}
      <div className=" md:container px-5 py-14">
        <h2 data-aos="fade-down" className="title">
          {skills.title}
        </h2>
        <h4 data-aos="fade-down" className="subtitle">
          {skills.subtitle}
        </h4>
        <br />
        <div className=" flex flex-wrap justify-center gap-4">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className=" group box">
              <div>
                <img
                  src={skill.logo}
                  alt="..."
                  className=" w-10 group-hover:scale-125 duration-200"
                  loading="lazy"
                />
              </div>
              <div>
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
                <div
                  onClick={() => {
                    setSelectSkill(skill);
                    openModal();
                  }}
                  className=" absolute right-3 top-3 text-xl">
                  {createElement(skills.icon)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
