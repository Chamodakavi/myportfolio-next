"use client";

import React from "react";
import { Instagram, Facebook, Dribbble } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full py-20 bg-[#d2d2d2]">
      <div className="container mx-auto px-2">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12 pb-12 border-b border-gray-200">
          {/* Left - Logo & Text */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent tracking-tight">
                ChamodaHapuarachchi
              </span>
            </div>
            <p className="text-lg md:text-xl font-light text-gray-600 max-w-md leading-relaxed">
              Let's create something valuable together.
            </p>
          </div>

          {/* Right - Say Hello Button */}
          <button className="px-8 py-4 border-2 border-black text-lg md:text-xl font-medium tracking-wide uppercase hover:bg-black hover:text-white transition-all duration-300 whitespace-nowrap">
            Say — Hello
          </button>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center pt-12 gap-6 md:gap-0">
          {/* Left - Copyright */}
          <div className="text-sm text-gray-500">
            All rights reserved ©ChamodaHapuarachchi
          </div>

          {/* Right - Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white flex items-center justify-center transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white flex items-center justify-center transition-all duration-300"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white flex items-center justify-center transition-all duration-300"
            >
              <Dribbble size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
