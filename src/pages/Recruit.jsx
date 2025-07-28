import React from "react";
import Navbar from "../components/NavbarCmpnts/Navbar";
import { motion } from "framer-motion";
import Intro from "../components/AsRecruiterPage/Intro";
import Skills from "../components/AsRecruiterPage/Skills/RecruitpageSkills";
import ResumeSection from "../components/AsRecruiterPage/ResumeSection/ResumeSection";
import WhyHireMe from "../components/AsRecruiterPage/WhyHireMe";
import MainPage from "../components/AsRecruiterPage/ContactCmpnts/MainPage";
import { Helmet } from "react-helmet";

export default function Recruit() {
  return (
    <>
      <Helmet>
        <title>Recruit | SatyaDev</title>
        <meta
          name="description"
          content="This is the recruiteme page of my portfolio."
        />
        <meta name="keywords" content="React, Portfolio, Developer" />
        <meta property="og:title" content="Recruit | SatyaDev" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:url" content="https://satyadev/Project.com" />
      </Helmet>
      <div className="relative min-h-screen bg-black text-white">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.02)_1px,_transparent_1px)] [background-size:30px_30px]" />
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1a1a2e]/60 to-[#0f0f0f]/80" />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <Navbar bg="" />

            <section className="flex justify-center items-center lg:pt-44 md:pt-36 sm:pt-20 pt-20">
              <Intro />
            </section>

            <section>
              <Skills />
            </section>

            <section>
              <WhyHireMe />
            </section>

            <section>
              <ResumeSection />
            </section>

            <section>
              <MainPage />
            </section>
          </div>
        </motion.div>
      </div>
    </>
  );
}
