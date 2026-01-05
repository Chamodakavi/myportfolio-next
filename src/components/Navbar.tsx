"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface typeprop {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const HoverLink = ({ href, children, className = "" }: typeprop) => {
  return (
    <Link href={href} className={`relative w-fit block ${className}`}>
      <motion.div initial="initial" whileHover="hovered" className="relative">
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<any>, {
                className: `${className} ${
                  (child as React.ReactElement<any>).props.className || ""
                }`.trim(),
              })
            : child
        )}
        <motion.span
          variants={{
            initial: { scaleX: 0 },
            hovered: { scaleX: 1 },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute left-0 bottom-0 w-full h-[2px] bg-current origin-left"
        />
      </motion.div>
    </Link>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // Track current section

  useEffect(() => {
    const sections = ["home", "hero-intro", "work", "contact"]; // Your section IDs
    let ticking = false;

    const updateActiveSection = () => {
      let current = "";
      const scrollY = window.scrollY + 100; // Navbar offset

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollY) {
          current = section;
        }
      });

      if (current !== activeSection) {
        setActiveSection(current);
        window.history.replaceState(null, "", `#${current}`); // Update URL
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-5 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 bg-white/70 backdrop-blur-md shadow-md rounded-full"
      >
        <Link
          href="#home"
          className={`
            text-[20px] sm:text-[30px] font-bold tracking-tight z-50 
            ${isOpen ? "text-white" : "text-black"}
            ${activeSection === "work" ? "text-white" : ""}
            `}
        >
          <h1>ChamodaHapuarachchi</h1>
        </Link>

        {/* Desktop Menu - Active state styling */}
        <div className="hidden md:flex items-center md:gap-5 lg:gap-8 md:text-[18px] lg:text-[25px] font-medium tracking-wide">
          <HoverLink
            className={activeSection === "work" ? "text-white" : "text-black"}
            href="#work"
          >
            Work
          </HoverLink>
          <HoverLink
            className={activeSection === "work" ? "text-white" : "text-black"}
            href="#projects"
          >
            Studio
          </HoverLink>
          <HoverLink
            className={activeSection === "work" ? "text-white" : "text-black"}
            href="#navbarcard"
          >
            Why Me
          </HoverLink>
          <HoverLink
            className={activeSection === "work" ? "text-white" : "text-black"}
            href="#contact"
          >
            Contact
          </HoverLink>
        </div>

        <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu
              size={24}
              // Wrap the logic in ${} so it evaluates
              className={`cursor-pointer ${
                activeSection === "work" ? "text-white" : "text-black"
              }`}
            />
          )}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black text-white flex flex-col justify-center items-center gap-8 text-2xl font-light z-40"
            onClick={() => setIsOpen(false)}
          >
            <HoverLink href="#work">Work</HoverLink>
            <HoverLink href="#projects">Projects</HoverLink>
            <HoverLink href="#navbarcard">NavbarCard</HoverLink>
            <HoverLink href="#contact">Contact</HoverLink>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
