/**
 * @copyright 2025 ayishaafridi
 * @license Apache-2.0
 */

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react"; // Importing icons

const Footer = () => {
  return (
    <div className="py-10 flex items-center justify-center">
      <footer className="flex flex-col items-center justify-center w-full py-6">
        <p className="text-gray-100 text-lg sm:text-xl">
          Built and Designed by Ayisha Afridi
        </p>

        <div className="flex gap-8 mt-6">
          <a
            href="https://github.com/ayisha-afridi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-200 hover:text-rose-300 transition-colors"
            aria-label="GitHub"
          >
            <Github size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/ayisha-afridi-540b77321/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-200 hover:text-rose-300 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={30} />
          </a>
          <a
            href="mailto:ayishaafridi4@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-200 hover:text-rose-300 transition-colors"
            aria-label="Gmail"
          >
            <Mail size={30} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
