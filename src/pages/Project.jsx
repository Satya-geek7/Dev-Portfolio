import React, { useState } from "react";
import ProjectCard from "../components/ProjectCmpnts/ProjectCard";
import GlassModal from "../components/ProjectCmpnts/GlassModal";
import Navbar from "../components/NavbarCmpnts/Navbar";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const ProjectsDesc = [
  {
    title: "GameLog",
    shortDesc:
      "Track productivity like a game. Earn points for tasks, build streaks.",
    longDesc:
      "GameLog is a gamified productivity tool. Features daily streaks, XP points, dark mode, and charts. Built with React + Supabase.",
    image: "https://source.unsplash.com/random/400x300?game",
  },
  {
    title: "theDev",
    shortDesc:
      "A beautiful personal portfolio template built in React + Tailwind.",
    longDesc:
      "Portify is a fully customizable personal portfolio. Comes with animation, project showcase, skills, contact form, and mobile-responsiveness out of the box.",
    image: "https://source.unsplash.com/random/400x300?portfolio",
  },
  {
    title: "DevHub",
    shortDesc:
      "A developer-centric social platform to share code, projects, and ideas.",
    longDesc:
      "DevHub is built for developers to share code snippets, discover projects, and collaborate. Built using React, Framer Motion, Github API and Tailwind. Includes dark mode, markdown editor, and real-time chat.",
    image: "https://source.unsplash.com/random/400x300?code",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <Helmet>
        <title>Project | SatyaDev</title>
        <meta
          name="description"
          content="This is the projects page of my portfolio."
        />
        <meta name="keywords" content="React, Portfolio, Developer" />
        <meta property="og:title" content="Project | SatyaDev" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:url" content="https://satyadev/Project.com" />
      </Helmet>
      <div className="bg-black w-full min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.02)_1px,_transparent_1px)] [background-size:30px_30px] z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/60 to-[#0f0f0f]/80 z-0"></div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          <Navbar bg="" />
          <motion.main
            className="max-w-[1300px] mx-auto lg:pt-[300px] md:pt-[200px] sm:pt-[175px] pt-[100px] px-4 sm:px-6 md:px-8 lg:px-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              {ProjectsDesc.map((project, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <ProjectCard
                    title={project.title}
                    shortDesc={project.shortDesc}
                    image={project.image}
                    onShowMore={() => {
                      setActiveProject(project);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>

            <GlassModal
              isOpen={!!activeProject}
              onClose={() => {
                setActiveProject(null);
                const section = document.querySelector("#project-section");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
              title={activeProject?.title}
              description={activeProject?.longDesc}
            />
          </motion.main>
        </motion.div>
      </div>
    </>
  );
}
