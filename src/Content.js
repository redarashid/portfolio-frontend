// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/kasper.png";
import project2 from "./assets/images/projects/dashboard.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "RASHID",
    LastName: "REDA",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "8+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "Discover best practices and how-to content to improve your product",
        logo: figma,
      },
      {
        name: "Node js",
        para: "Node.js is designed to build scalable network applications",
        logo: nodejs,
      },
      {
        name: "Adobe Photoshop",
        para: "Explore Photoshop's generative AI features powered by Adobe Firefly.",
        logo: ps,
      },
      {
        name: "React js",
        para: " Pete Hunt’s guide to the React ecosystem.",
        logo: reactjs,
      },
      {
        name: "Sketch",
        para: "Thinking about moving from Figma? You’re not alone.",
        logo: sketch,
      },
      {
        name: "Python",
        para: "The core of extensible programming is defining functions.",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Web development involves the creation and maintenance of websites and web applications using various programming languages such as Java, Python, and JavaScript",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "UX articles don’t cover the SEO side of things as often as they should, but this article on Entrepreneur shows why UX and UI design is so important. SEO and UX go together when creating any type of content since no one will share something that just feels awkward.",
        logo: services_logo2,
      },
      {
        title: "API Integration",
        para: "Connect front-end applications with back-end services using RESTful APIs or GraphQL. Implement features like user authentication, payment processing, or data fetching.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Kasper",
        image: project1,
        link: "https://codeaprogram-portfolio.web.app/",
      },
      {
        title: "Admin Dashboard",
        image: project2,
        link: "https://admin-dashboard-68262.web.app/",
      },
      {
        title: "Creative Website",
        image: project3,
        link: "https://tailwindcss.com/",
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Working with Rashid was an absolute pleasure! They transformed our outdated website into a modern, responsive, and user-friendly platform.”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“Rashid is an incredibly talented front-end developer. Their expertise in React and CSS made our team's projects stand out. They are a great team player, always willing to share knowledge and help others.”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“Rashid has a natural talent for front-end development. Their ability to quickly grasp complex concepts and apply them to real-world projects is impressive. I have no doubt they will excel in their career as a developer.”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“Rashid delivered a stunning website for my small business. They were professional, communicative, and went above and beyond to ensure the site met all my needs”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Highly motivated and detail-oriented Front-End Developer with a passion for creating responsive and user-friendly web applications. Proficient in HTML, CSS, JavaScript, and modern frameworks like React",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "rashidreda",
        icon: BsInstagram,
        link: "https://www.instagram.com/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
