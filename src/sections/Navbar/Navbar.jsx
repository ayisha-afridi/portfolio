import React, { useState, useMemo } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = useMemo(() => [
    { id: 1, text: "About", to: "about" },
    { id: 2, text: "Projects", to: "projects" },
    { id: 3, text: "Experience", to: "experience" },
    { id: 4, text: "Education", to: "education" },
  ], []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const renderNavLink = ({ id, text, to }) => (
    <Link
      key={id}
      to={to}
      smooth
      duration={500}
      offset={-70}
      className="text-rose-200/80 hover:text-maroon-300/90 hover:underline cursor-pointer"
    >
      {text}
    </Link>
  );

  return (
    <>
      {/* Desktop Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full px-8 py-4 hidden md:flex justify-between items-center sticky top-0 z-50 bg-zinc-900/35 backdrop-blur-sm"
      >
        <div className="lg:text-base font-bold flex items-center">
          <span className="text-white">Ayisha </span>
          <span className="text-rose-200/85">Afridi</span>
        </div>

        <nav className="hidden md:flex items-center space-x-16">
          {navItems.map(renderNavLink)}
        </nav>

        <a
          href="/src/assets/AyishaAfridi_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base bg-zinc-900/50 hover:bg-zinc-950 text-rose-200/80 hover:text-maroon-300/80 hover:underline px-4 py-2 rounded-2xl cursor-pointer"
        >
          Resume
        </a>
      </motion.div>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        {/* Fixed Header with Menu Button and Logo */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/35 backdrop-blur-sm px-4 py-6 flex justify-between items-center">
          {/* Menu Toggle Button - Fixed Position */}
          <button
            onClick={toggleMenu}
            className="relative z-50 text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <IoCloseSharp size={25} />
            ) : (
              <AiOutlineMenu size={25} />
            )}
          </button>

          {/* Logo */}
          <div className="text-xl font-bold flex items-center">
            <span className="text-white">Ayisha </span>
            <span className="text-blue-200/85">Afridi</span>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/60 z-40"
                onClick={toggleMenu}
              />

              {/* Slide-in Menu */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 left-0 bottom-0 w-4/5 max-w-sm bg-zinc-950/95 z-40 overflow-y-auto"
              >
                <div className="flex flex-col justify-center items-center h-full px-8">
                  {/* Navigation Links */}
                  <nav className="space-y-6 text-white text-lg">
                    {navItems.map((item) => (
                      <Link
                        key={item.id}
                        to={item.to}
                        smooth
                        duration={500}
                        offset={-70}
                        className="block hover:text-maroon-300 hover:underline duration-200 cursor-pointer text-center"
                        onClick={toggleMenu}
                      >
                        {item.text}
                      </Link>
                    ))}
                  </nav>

                  {/* Resume Button */}
                  <a
                    href="/src/assets/AyishaAfridi_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base bg-maroon-300/75 hover:bg-maroon-500/90 text-white hover:underline px-6 py-3 rounded-full mt-10 cursor-pointer inline-block"
                    onClick={toggleMenu}
                  >
                    Resume
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default React.memo(Navbar);
