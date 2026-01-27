import React from "react";

const About = () => {
  const skills = [
    "Python",
    "Java",
    "C",
    "Assembly",
    "JavaScript",
    "React.js",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bash",
    "SQL",
  ];

  return (
    <section className="sm:py-4">
      <div className="max-w-7xl mx-auto px-8 sm:px-16">
        <h2
          id="about"
          className="text-3xl sm:text-4xl font-semibold py-2 mb-2 bg-gradient-to-l from-white to-gray-200 bg-clip-text text-transparent leading-relaxed"
        >
          About Me
        </h2>

        <div className="bg-zinc-900/45 rounded-lg shadow-lg p-4 sm:p-8 transform transition-all hover:scale-[1.02] group border border-blue-300/45 hover:border-rose-200">
          <p className="text-gray-100 text-base mb-8 sm:text-left">
            Hi! My name is Ayisha, and I'm currently a Computer Science student
            with a growing passion for problem-solving, continuous learning, and
            technology.
          </p>

          <p className="text-gray-100 text-base mb-8 sm:text-left">
            My goal is to work on diverse projects that challenge me and help me
            learn something new with each line of code. I'm as excited as ever
            to take on new challenges, grow as a developer, and gain a deeper
            understanding of programming and computer systems.
          </p>

          <p className="text-gray-100 text-base mb-6 sm:mb-10 sm:text-left">
            <span className="text-blue-300 mt-1"></span>
            Beyond programming, I love weightlifting, crocheting, traveling, and spending time with my siblings! 
            <br></br>
            I've found that I enjoy problem-solving in all forms, whether I'm debugging code, perfecting a stitch pattern, or working towards a new PR.          
          </p>

          <div className="w-40 h-0.5 bg-gradient-to-r from-blue-300 to-rose-300 my-4 animate-pulse"></div>


          <div>
            <h3 className="text-2xl font-semibold mb-4 sm:mb-4 text-blue-200 sm:text-left group-hover:text-rose-200 transition-colors">
              Technical Skills
            </h3>            
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-slate-700/50 text-white px-2 py-1 rounded-full text-sm hover:scale-[1.1] hover:bg-slate-700/45 hover:text-blue-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
