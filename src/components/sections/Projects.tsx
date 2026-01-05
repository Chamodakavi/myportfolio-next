import React from "react";
import ProjectCard from "../ProjectCard";

const projects = [
  {
    id: 1,
    image: "/images/p-1.png",
    title: "A web application to discover and explore travel destinations",
    techStack: "React.js Express.js MongoDB Material UI",
    description:
      " provides detailed information, personalized itineraries, and real-time weather and air quality data.",
  },
  {
    id: 2,
    image: "/images/p-2.png",
    title: "A web application to discover and explore travel destinations",
    techStack: "React.js Express.js MongoDB Material UI",
    description:
      " provides detailed information, personalized itineraries, and real-time weather and air quality data.",
  },
  {
    id: 3,
    image: "/images/p-3.png",
    title: "A web application to discover and explore travel destinations",
    techStack: "React.js Express.js MongoDB Material UI",
    description:
      " provides detailed information, personalized itineraries, and real-time weather and air quality data.",
  },
  {
    id: 4,
    image: "/images/p-4.jpeg",
    title: "A web application to discover and explore travel destinations",
    techStack: "React.js Express.js MongoDB Material UI",
    description:
      " provides detailed information, personalized itineraries, and real-time weather and air quality data.",
  },
  {
    id: 5,
    image: "/images/p-5.png",
    title: "A web application to discover and explore travel destinations",
    techStack: "React.js Express.js MongoDB Material UI",
    description:
      " provides detailed information, personalized itineraries, and real-time weather and air quality data.",
  },
  {
    id: 6,
    image: "/images/p-6.png",
    title: "A web application to discover and explore travel destinations",
    techStack: "React.js Express.js MongoDB Material UI",
    description:
      " provides detailed information, personalized itineraries, and real-time weather and air quality data.",
  },
];

function Projects() {
  return (
    <section id="work" className="py-10 bg-brandFont">
      <div className="container mx-auto text-white px-2">
        <h2 className="uppercase text-md md:text-[26px] pb-5">
          Recent Creations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:mt-10 md:gap-15">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
              techStack={project.techStack}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
