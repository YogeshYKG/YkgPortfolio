/**
 * @copyright 2024 YogeshYKG
 * @license Apache-2.0
 */

/** Components */
import ReferalCard from "./ReferalCard";
import "../../index.css";
const referals = [
  {
    referalContent:
      "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
    name: "Sophia Ramirez",
    position: "Frontend Lead",
    imgSrc: "/images/people-1.jpg",
    company: "PixelForge",
    companyLink: "https://pixelforge.dev",
    socials: {
      linkedin: "https://linkedin.com/in/sophia-gummy",
      github: "https://github.com/gummy-sophia",
    },
  },
  {
    referalContent:
      "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
    name: "Ethan Caldwell",
    position: "Full Stack Engineer",
    imgSrc: "/images/people-2.jpg",
    company: "NexaWave",
    companyLink: "https://nexawave.io",
    socials: {
      linkedin: "https://linkedin.com/in/ethan-gummy",
      github: "https://github.com/gummy-ethan",
    },
  },
  {
    referalContent:
      "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.",
    name: "Liam Bennett",
    position: "Tech Director",
    imgSrc: "/images/people-3.jpg",
    company: "CodeCraft",
    companyLink: "https://codecraft.dev",
    socials: {
      linkedin: "https://linkedin.com/in/liam-gummy",
      github: "https://github.com/gummy-liam",
    },
  },
  {
    referalContent:
      "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.",
    name: "Noah Williams",
    position: "UI/UX Designer",
    imgSrc: "/images/people-4.jpg",
    company: "BrightWeb",
    companyLink: "https://brightweb.studio",
    socials: {
      linkedin: "https://linkedin.com/in/noah-gummy",
      github: "https://github.com/gummy-noah",
    },
  },
  {
    referalContent:
      "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
    name: "Ava Thompson",
    position: "Project Manager",
    imgSrc: "/images/people-5.jpg",
    company: "TechMosaic",
    companyLink: "https://techmosaic.ai",
    socials: {
      linkedin: "https://linkedin.com/in/ava-gummy",
      github: "https://github.com/gummy-ava",
    },
  },
  {
    referalContent:
      "Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.",
    name: "Jonathan",
    position: "CTO",
    imgSrc: "/images/people-6.jpg",
    company: "Skyline Digital",
    companyLink: "https://skylinedigital.dev",
    socials: {
      linkedin: "https://linkedin.com/in/jonathan-gummy",
      github: "https://github.com/gummy-jon",
    },
  },
];

const Referals = () => {
  return (
    <>
      <div className="lineSeparator" />
      <section id="reviews" className="section">
        <div className="container">
          <h2 className="headline-2 mb-8 reveal-up">Referrals</h2>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mb-16">
            {referals.map(
              (
                {
                  referalContent,
                  name,
                  imgSrc,
                  company,
                  position,
                  companyLink,
                  socials,
                },
                key
              ) => (
                <ReferalCard
                  key={key}
                  name={name}
                  imgSrc={imgSrc}
                  company={company}
                  position={position}
                  companyLink={companyLink}
                  content={referalContent}
                  socials={socials}
                />
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Referals;
