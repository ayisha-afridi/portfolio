import React from "react";
import Resume from "/src/assets/AyishaAfridi_Resume.pdf";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 h-full flex items-center justify-between md:grid md:grid-cols-[1fr,3fr,1fr]">
        {/* Logo/Branding */}
        <div className="md:justify-self-start">
          <a
            href="/"
            className="text-xl font-semibold text-white hover:text-blue-100 transition-colors"
          >
            Ayisha Afridi
          </a>
        </div>

        {/* Main Navigation */}
        <nav className="hidden md:block md:justify-self-center">
          <Navbar />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Navbar mobile />
        </div>

        {/* Resume Download */}
        <div className="md:justify-self-end">
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2.5 rounded-xl bg-zinc-800/80 hover:bg-zinc-700/80 text-blue-100 hover:text-white transition-all border border-zinc-700 hover:border-blue-200/30 text-sm font-medium shadow-sm"
            aria-label="Download Resume"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
