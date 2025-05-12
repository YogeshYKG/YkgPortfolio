/**
 * @copyright 2024 YogeshYKG
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/** Imports */
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Referals from "./components/Referals/Referals";
import Contact from "./components/ContactMe/Contact";
import Footer from "./components/Footer/Footer";
import ProjectShowcase from "./components/ProjectShowCase/ProjectShowCase";
import SkillSet from "./components/SkillSet/SkillSet";

/** App Component */

const App = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");
    elements.forEach((elements) => {
      gsap.to(elements, {
        scrollTrigger: {
          trigger: elements,
          start: "-200 bottom",
          end: "bottom 80%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  });

  return (
    <>
      <div style={{ position: "relative" }}>
        <Header />
        
      </div>
      <main>
        <div style={{ position: "relative" }}>
          <About />
          <Hero />
        </div>

        <div style={{ position: "relative" }}>
          <SkillSet />
          <ProjectShowcase />
        </div>

        <div style={{ position: "relative" }}>
          <Referals />
          <Contact />
        </div>
      </main>

      <div style={{ position: "relative" }}>
        <Footer />
      </div>
    </>
  );
};

export default App;
