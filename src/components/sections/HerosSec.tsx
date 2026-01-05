"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function HerosSec() {
  const [showAesthetics, setShowAesthetics] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAesthetics((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="hero" className="pt-20 lg:pt-40">
        <div className="container relative mx-auto px-4 h-[80vh] flex flex-col justify-center">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="absolute top-30 sm:top-40 md:top-20 lg:top-10 left-4 text-md md:text-[24px] font-light"
          >
            <p>Not just a portfolio.</p>
            <p>A Connection between</p>
          </motion.div>

          {/* Animation Container */}
          <div className="w-full max-w-6xl flex items-center gap-4 md:gap-8">
            {/* TEXT PART */}
            <div className="relative min-w-fit">
              <AnimatePresence mode="wait">
                {showAesthetics ? (
                  <motion.p
                    key="aesthetics"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-6xl md:text-8xl lg:text-[152px] font-[300] tracking-tighter text-black leading-none whitespace-nowrap"
                  >
                    Aesthetics
                  </motion.p>
                ) : (
                  <motion.p
                    key="strategy"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-6xl md:text-8xl lg:text-[152px] font-[300] tracking-tighter text-black leading-none whitespace-nowrap"
                  >
                    Strategy
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="relative flex items-center w-full"
            >
              <div className="relative z-10"></div>
              <motion.div
                className="line absolute right-10 md:right-20 top-1/2 h-[5px] bg-black -translate-y-1/2"
                initial={false}
                animate={{
                  width: showAesthetics
                    ? "clamp(5rem, 15vw, 25rem)"
                    : "clamp(8rem, 30vw, 34rem)",
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              {/* THE AMPERSAND */}
              <div className="res-font ml-auto text-6xl md:text-8xl lg:text-[100px] font-light text-black z-10">
                &amp;
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            className="block absolute right-7 md:right-12 bottom-4 md:bottom-12 w-0 h-0 2xl:-right-40"
          >
            <Link
              href={"#hero-intro"}
              className="absolute bottom-0 left-0 rotate-270 origin-bottom-left text-sm font-bold tracking-widest uppercase flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span className="flex items-center">
                <ChevronLeft size={19} className="-mr-1" />
                <span className="h-[2px] w-10 bg-black"></span>
              </span>
              <span className="transition-all duration-300 hover:tracking-[5px]">
                Scroll
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default HerosSec;
