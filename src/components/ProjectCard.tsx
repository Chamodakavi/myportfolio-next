import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  techStack: string;
  description: string;
}

function ProjectCard({
  image,
  title,
  techStack,
  description,
}: ProjectCardProps) {
  return (
    <div className="my-8 bg-transparent">
      <img
        className="transition-transform duration-500 hover:scale-[1.1]"
        src={image}
        alt="M1 radio project"
      />
      <div className="py-4">
        <h3 className="text-xl font-medium text-white leading-12">{title}</h3>
        <p className="my-1 text-sm text-gray-400">{techStack}</p>
        <p className="leading-7">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
