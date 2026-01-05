"use client";

import React from "react";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="my-8 bg-transparent"
    >
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
    </motion.div>
  );
}

export default ProjectCard;
