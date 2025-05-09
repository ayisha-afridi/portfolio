/**
 * @copyright 2025 ayishaafridi
 * @license Apache-2.0
 */

/* sections */
import Navbar from "./sections/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Experience from "./sections/Experience/Experience";
import Footer from "./sections/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Footer />
      </main>
    </>
  );
};

export default App;
