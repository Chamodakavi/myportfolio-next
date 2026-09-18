"use client";

import React from "react";
import { motion } from "framer-motion";
interface ProjectCardProps {
  image: string;
  title: string;
  techStack: string;
  description: string;
  liveDemo: string;
}

function ProjectCard({
  image,
  title,
  techStack,
  description,
  liveDemo,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="my-8 bg-transparent"
    >
      <a href={liveDemo} target="_blank" rel="noopener noreferrer">
        <img
          className="transition-transform duration-500 hover:scale-[1.1]"
          src={image}
          alt="M1 radio project"
        />
      </a>
      <div className="py-4">
        <h3 className="text-xl font-medium text-white leading-8">{title}</h3>
        <p className="my-1 text-sm text-gray-400">{techStack}</p>
        <p className="leading-7  text-gray-400">{description}</p>
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300 group"
        >
          <span>Live Demo</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
