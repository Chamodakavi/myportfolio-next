"use client";
import React from "react";
import { motion } from "framer-motion";
function HeroIntro() {
  return (
    <section id="hero-intro" className="my-30">
      <div className="container mx-auto px-2">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-2xl md:text-4xl font-light leading-relaxed max-w-4xl justify-self-end"
        >
          <p>
            A creative partner passionate about value design. We make brand and
            digital relevant beyond the aesthetics — one case at a time.
          </p>
          <button className="group uppercase text-2xl flex items-center cursor-pointer">
            <span>Read</span>
            <div className="h-[2px] bg-black w-12 transition-all duration-500 group-hover:w-0 mx-2 hover:mx-0"></div>

            <span>More</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroIntro;
