import React from "react";
import ProjectCard from "../ProjectCard";

const projects = [
  {
    id: 4,
    image: "/images/p-1.png",
    title: "A web application to discover and explore travel destinations",
    techStack: "React.js · Express.js · MongoDB · Material UI",
    description:
      "A travel discovery platform that helps users explore destinations with personalized itineraries and real-time weather and air quality data. Built with secure authentication, data validation, and safe API key handling on the backend.",
    liveDemo: "https://destination-checker-full-stack-x22i.vercel.app/",
  },
  {
    id: 2,
    image: "/images/p-2.png",
    title:
      "Car Wash Website - A web application for car wash shops to showcase their services and allow customers to book appointments online",
    techStack: "React.js · MySQL · Bootstrap",
    description:
      "A full-stack car wash and appointment booking system, with a React frontend and MySQL backend handling real-time reservation scheduling.",
    liveDemo: "https://19-car-wash-bootstrap.vercel.app/",
  },
  {
    id: 3,
    image: "/images/p-3.png",
    title:
      "PerfumeApp - A web aplication for perfume lovers to discover and explore perfumes",
    techStack: "Next.js · Chakra UI",
    description:
      "A fragrance e-commerce site built around brand aesthetics and user retention, using Chakra UI to create an accessible, visually engaging design system.",
    liveDemo: "https://perfume-app-ten.vercel.app/",
  },
  {
    id: 1,
    image: "/images/event-pl.png",
    title: "Event Planner & Management Web Application",
    techStack: "React.js Next.js Tailwind CSS",
    description:
      "A full-featured event planning platform featuring event scheduling, vendor discovery, guest management, and custom booking workflows with a clean, modern interface.",
    liveDemo: "https://event-planner-eta-roan.vercel.app/",
  },
  {
    id: 5,
    image: "/images/p-5.png",
    title: "Furniro - Modern Furniture & Home Decor E-Commerce Platform",
    techStack: "React.js Next.js Tailwind CSS",
    description:
      "A full-featured e-commerce frontend showcasing furniture collections, product filtering and sorting, interactive cart management, and a clean, responsive interior design aesthetic.",
    liveDemo: "https://furniro-blond.vercel.app/",
  },
  {
    id: 6,
    image: "/images/p-6.png",
    title: "Modern Gym & Fitness Center Web Application",
    techStack: "html · css · javascript",
    description:
      "A responsive fitness platform featuring dynamic workout programs, membership pricing tiers, trainer profiles, and an interactive BMI calculator with smooth modern UI animations.",
    liveDemo: "https://gym1-orcin-delta.vercel.app/",
  },
];

function Projects() {
  return (
    <section id="work" className="py-10 bg-brandFont">
      <div className="container mx-auto text-white px-10">
        <h2 className="uppercase text-md md:text-[26px] pb-5">
          Recent Creations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:mt-10 md:gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
              techStack={project.techStack}
              description={project.description}
              liveDemo={project.liveDemo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
