import React from "react";
import SlidingHeading from "../IndvCmpnts/SlidingHeading";

const AboutSection = ({ trigger }) => {
  const shortParas = [
    "I’m a passionate and detail-oriented frontend developer with a strong foundation in React and Tailwind CSS. I love building sleek, responsive, and accessible user interfaces that deliver seamless user experiences. My approach to development is both creative and structured, allowing me to efficiently translate design ideas into production-ready components. I thrive in fast-paced environments and take pride in writing clean, scalable code that aligns with modern best practices.",
    "I’m currently seeking exciting internship opportunities where I can apply my skills and grow through real-world challenges. Alongside refining my core frontend stack, I’m diving into Next.js to enhance my full-stack capabilities and understand advanced routing, SSR, and API integration. I'm not just looking for experience—I want to add value, work with mentors, and be part of a team that shares a passion for modern web development.",
    "I’m incredibly curious about emerging technologies, especially Web3. I’m beginning to explore blockchain fundamentals, smart contracts, and decentralized app (dApp) architecture. My long-term goal is to blend strong frontend skills with blockchain knowledge to build powerful, future-ready applications. The idea of contributing to a decentralized, user-empowered internet excites me deeply, and I’m committed to continually learning and innovating in this space.",
  ];

  return (
    <section className="text-white w-full px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <SlidingHeading Txt="About" trigger={trigger} initial={0} after={0} />

        <div className="mt-24 space-y-6 text-lg leading-relaxed text-gray-300">
          {shortParas.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
