/**
 * @copyright 2024 YogeshYKG
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { ReactLenis } from 'lenis/react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


/** Imports */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Referals from "./components/Referals/Referals";
import Contact from "./components/ContactMe/Contact";
import Footer from "./components/Footer/Footer";
import MyApps from "./components/MyApps";
import ProjectShowcase from './components/ProjectShowCase/ProjectShowCase';

/** Parallax in Header and Hero */
import { Parallax } from "react-parallax";
import imgparallex2 from "../public/images/ParallaxImg/img2.jpg";
import imgparallex8 from "../public/images/ParallaxImg/img8.jpg";
import imgparallex10 from "../public/images/ParallaxImg/img10.jpg";
import imgparallex12 from "../public/images/ParallaxImg/img12.jpg";
import imgparallex17 from "../public/images/ParallaxImg/img17.png";
import imgparallex18 from "../public/images/ParallaxImg/img18.png";
/** App Component */

const App = () => {
    useGSAP(()=>{
        const elements = gsap.utils.toArray('.reveal-up');
        elements.forEach((elements) => {
            gsap.to(elements, {
                scrollTrigger: {
                    trigger: elements,
                    start: '-200 bottom',
                    end: 'bottom 80%',
                    scrub: true,
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
            })
        });
    });

    return (
        // <RouterProvider router={router}/>
        <ReactLenis root>
            
            <div style={{ position: "relative" }}>
            <Header />
            <Hero />
            </div>
            <main>
            
            <div style={{ position: "relative" }}>
                <About />
                <Skills />
            </div>
            
            <div style={{ position: "relative" }}>
                <MyApps />
            </div>
            
            <div style={{ position: "relative" }}>
                <Work />
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
            
        </ReactLenis>
    )
}

export default App;