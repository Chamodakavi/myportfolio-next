"use client";

import React from "react";

function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-gray-200 py-16 px-8 font-sans text-gray-900"
    >
      <div className="container px-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-[65px] font-bold mb-12 leading-tight">
            For any enquiries,or just to say hello.
          </h2>

          <div className="flex flex-col gap-8">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                Mobile Number
              </p>
              <p className="block text-lg font-medium border-b-2 border-transparent hover:border-gray-900 transition-colors duration-300 pb-1">
                +94 70 4986 326
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                OFFICE
              </p>
              <address className="not-italic text-lg font-medium border-b-2 border-transparent hover:border-gray-900 transition-colors duration-300 pb-1">
                Hapuarachchi Service Station, Western Province, Sri Lanka
              </address>
            </div>

            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                GENERAL ENQUIRIES
              </p>
              <a
                href="chamodakavishka03@gmail.com"
                className="block text-lg font-medium border-b-2 border-transparent hover:border-gray-900 transition-colors duration-300 pb-1"
              >
                chamodakavishka03@gmail.com
              </a>
            </div>
          </div>
          {/* <div className="mt-6">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
              Linkedin
            </p>
            <a
              href="mailto:internship@andstudio.lt"
              className="block text-lg font-medium border-b-2 border-transparent hover:border-gray-900 transition-colors duration-300 pb-1"
            >
              www.linkedin.com/in/chamodahapuarachchi03
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
