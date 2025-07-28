import React from "react";

const ProjectCard = ({ title, shortDesc, onShowMore, image }) => {
  return (
    <div className="bg-zinc-900 rounded-2xl p-4 lg:h-[350px] md:h-80 sm:h-80 h-[300px] shadow-lg hover:scale-105 lg:py-10 transition-transform duration-300 flex flex-col relative">
      <img
        src={image}
        alt={title}
        className="rounded-lg mb-4 h-40 object-cover w-full"
      />
      <h3 className="text-xl font-semibold text-rose-400 mb-2">{title}</h3>
      <p className="text-sm text-white line-clamp-3">{shortDesc}</p>

      <button
        onClick={onShowMore}
        className="text-blue-400 text-md hover:underline absolute bottom-4 left-4"
      >
        Show More
      </button>
    </div>
  );
};

export default ProjectCard;
