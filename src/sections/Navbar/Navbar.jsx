import React, { useState, useMemo } from "react";
import Resume from "/src/assets/AyishaAfridi_Resume2025.pdf";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { id: 1, text: "About", to: "about" },
      { id: 2, text: "Projects", to: "projects" },
      { id: 3, text: "Experience", to: "experience" },
      { id: 4, text: "Education", to: "education" },
    ],
    []
  );

  const variants = {
    open: { clipPath: "circle(1200px at 43px 43px)" },
    closed: {
      clipPath: "circle(20px at 41px 37px)",
      transition: { duration: 0.5 },
    },
    transition: { type: "spring" },
  };

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

  const resumeLink = (
    <a
      href={Resume}
      target="_blank"
      rel="noopener noreferrer"
      className="text-base bg-zinc-900/50 hover:bg-zinc-950 text-rose-200/80 hover:text-maroon-300/80 hover:underline px-4 py-2 rounded-2xl cursor-pointer"
    >
      Resume
    </a>
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

        {resumeLink}
      </motion.div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden justify-between bg-zinc-900/35 sticky top-0 z-50">
        <motion.div animate={menuOpen ? "open" : "closed"}>
          <motion.div
            variants={variants}
            onClick={toggleMenu}
            className="bg-zinc-950/95 w-1/3 h-screen text-white fixed z-10"
          >
            <div className="px-7 py-6">
              {menuOpen ? (
                <IoCloseSharp size={25} />
              ) : (
                <AiOutlineMenu size={25} />
              )}
            </div>

            {menuOpen && (
              <div className="flex flex-col justify-center items-center">
                <nav className="space-y-6 text-white text-base mt-10">
                  {navItems.map((item) => (
                    <Link
                      key={item.id}
                      to={item.to}
                      smooth
                      duration={500}
                      offset={-70}
                      className="block hover:text-maroon-300 hover:underline duration-200 cursor-pointer"
                      onClick={toggleMenu}
                    >
                      {item.text}
                    </Link>
                  ))}
                </nav>

                <a
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base bg-maroon-300/75 hover:bg-maroon-500/90 text-white hover:underline px-4 py-2 rounded-full mt-8 cursor-pointer"
                >
                  Resume
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>

        <div className="text-xl font-bold flex items-center py-6 px-4">
          <span className="text-white">Ayisha</span>
          <span className="text-blue-200/85">Afridi</span>
        </div>
      </div>
    </>
  );
};

export default React.memo(Navbar);
