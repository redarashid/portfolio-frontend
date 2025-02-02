import Navbar from "./Layouts/Navbar";
import Hero from "./components/Hero";
import Hireme from "./components/Hireme";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import Contect from "./components/Contect";
import { useEffect } from "react";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Hireme />
      <Contect />
    </div>
  );
}

export default App;
