/**
 * @copyright 2025 ayishaafridi
 * @license Apache-2.0
 */
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-start px-6 md:px-12 text-center"
    >
      <div className="container mx-auto flex flex-col items-center gap-6 pt-64 md:pt-32 lg:pt-48">
        {/* Headline1 */}
        <h2 className="headline1 leading-tight max-w-4xl mx-auto font-semibold ">
          <span className="text-white text-[clamp(2rem,9vw,4.5rem)] lg:text-6xl block mb-4 md:mb-6">
            Hello! I'm Ayisha
          </span>

          <span className="text-[clamp(1.5rem,9vw,1.5rem)] lg:text-2xl block font-normal">
            a computer science student passionate about exploring tech
          </span>
        </h2>

        <div className="flex items-center gap-2 text-zinc-300 text-base sm:text-base mt-12">
          <span className="relative w-2.5 h-2.5 rounded-full bg-blue-200/75">
            <span className="absolute inset-0 rounded-full bg-blue-100 animate-ping"></span>
          </span>
          <span>Available for work!</span>
        </div>
        {/* Social Media Links */}
        <div className="flex gap-4 sm:gap-6 mt-4">
          <a
            href="https://github.com/ayisha-afridi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-200 hover:text-rose-300 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/ayisha-afridi-540b77321/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-200 hover:text-rose-300 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </a>
          <a
            href="mailto:ayishaafridi4@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-200 hover:text-rose-300 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
