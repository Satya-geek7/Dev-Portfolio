import React, { useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/NavbarCmpnts/Navbar";
import HeroSection from "../components/HomePageCmpnts/HeroSection";
import SkillSection from "../components/HomePageCmpnts/SkillsSection";
import AboutSection from "../components/HomePageCmpnts/AboutSection";
import useScrollTrigger from "../Hooks/UseScrollTrigger";
import ContactSection from "../components/HomePageCmpnts/ContactSecn/ContactSection";
import { Helmet } from "react-helmet";

export default function Home() {
  const skillTrigger = useScrollTrigger(100);
  const AboutTrigger = useScrollTrigger(1300);

  const skillRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const sectionRefs = {
      skills: skillRef,
      about: aboutRef,
      contact: contactRef,
    };

    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>SatyaDev | Frontend Developer</title>
        <meta
          name="description"
          content="This is the homepage of my portfolio."
        />
        <meta name="keywords" content="React, Portfolio, Developer" />
        <meta property="og:title" content="SatyaDev | Frontend Developer" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:url" content="https://satyadev.com" />
      </Helmet>
      <div className="relative min-h-screen w-full text-white overflow-hidden bg-[#0c0c0c]">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.02)_1px,_transparent_1px)] [background-size:30px_30px] z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/60 to-[#0f0f0f]/80 z-0"></div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          <Navbar bg="" />

          <main className="max-w-[1300px] px-4 sm:px-6 lg:px-12 mx-auto pt-8 lg:space-y-36">
            <section id="hero-section">
              <HeroSection onScroll={scrollToSection} />
            </section>

            <section ref={skillRef} id="skill-section">
              <SkillSection trigger={skillTrigger} />
            </section>

            <section ref={aboutRef} id="about-section">
              <AboutSection trigger={AboutTrigger} />
            </section>

            <section ref={contactRef} id="contact-section">
              <ContactSection />
            </section>
          </main>
        </motion.div>
      </div>
    </>
  );
}
