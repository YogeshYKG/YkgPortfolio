/**
 * @copyright 2024 YogeshYKG
 * @license Apache-2.0
 */

/**
 * Components
 */
import { Github, Linkedin, Twitter, Codepen, Code2 } from "lucide-react";
import { ButtonPrimary } from "../Button";
import FooterCopyright from "./FooterCopyright";

const sitemap = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#Skills" },
  { label: "MyApps", href: "#MyApps" },
  { label: "Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact me", href: "#contact" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/YogeshYKG",
    icon: <Github size={16} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gyogesh484/",
    icon: <Linkedin size={16} />,
  },
  {
    label: "Twitter X",
    href: "https://x.com/YogeshYKG",
    icon: <Twitter size={16} />,
  },
  {
    label: "CodePen",
    href: "https://codepen.io/YogeshYKG",
    icon: <Codepen size={16} />,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/user4816XH/",
    icon: <Code2 size={16} />,
  },
];

const Footer = () => {
  return (
    <>
      <div className="lineSeparator" />
      <footer className="section">
        <div className="container">
          <div className="lg:grid grid-cols-2 items-start">
            {/* Left Section */}
            <div className="mb-10">
              <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                Let&apos;s work together today!
              </h2>
              <ButtonPrimary
                href="mailto:guptayogesh484.00@gmail.com"
                label="Start Project"
                icon="chevron_right"
                classes="reveal-up"
              />
            </div>

            {/* Sitemap & Socials */}
            <div className="lg:pl-20">
              {/* Sitemap */}
              <div className="mb-8">
                <p className="font-semibold text-zinc-300 mb-3 reveal-up">
                  Sitemap
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 reveal-up">
                  {sitemap.slice(0, 4).map(({ label, href }, key) => (
                    <a
                      key={key}
                      href={href}
                      className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                    >
                      {label}
                    </a>
                  ))}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3 reveal-up">
                  {sitemap.slice(4).map(({ label, href }, key) => (
                    <a
                      key={key}
                      href={href}
                      className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div>
                <p className="font-semibold text-zinc-300 mb-3 reveal-up">
                  Socials
                </p>
                <div className="flex flex-wrap gap-4 reveal-up">
                  {socials.map(({ label, href, icon }, key) => (
                    <a
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                    >
                      {icon}
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <FooterCopyright />
        </div>
      </footer>
    </>
  );
};

export default Footer;
