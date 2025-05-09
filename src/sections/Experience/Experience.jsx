/**
 * @copyright 2025 Ayisha Afridi
 * @license Apache-2.0
 */

import React from "react";

const Experience = () => {
  const experience = [
    {
      title: "Receptionist",
      company: "X-Ray and Ultrasound Clinic",
      duration: "Sep 2022 – Feb 2023",
      location: "Calgary, Canada",
      description: [
        "Assisted technicians and other receptionists to optimize workflow.",
        "Ensured smooth patient check-ins and addressed any inquiries professionally in a fast-paced environment.",
        "Worked with Velox Software Suite to store and manage patient's appointment information.",
      ],
      technologies: [],
    },
  ];

  const education = [
    {
      degree: "BSc in Computer Science",
      school: "Prince Mohammad Bin Fahd University",
      duration: "Aug 2023 - May 2027",
      location: "Khobar, Saudi Arabia",
      description: [
        "Consecutively, achieved Dean's list recognition three times.",
        "GPA: 3.94",
      ],
      courses: [
        "Data Structures",
        "Algorithms",
        "Database",
        "Systems Programming",
        "Web Programming",
        "Math. Reasoning & Alg. Thinking",
        "Computer Organization",
      ],
    },
    {
      degree: "High School Diploma",
      school: "Nelson Mandela High School & CBe-learn",
      duration: "Sep 2019 - Jun 2023",
      location: "Calgary, Canada",
      description: [],
      courses: [],
    },
  ];

  return (
    <>
      {/* Experience Section */}
      <section id="experience" className="py-6 sm:py-12">
        <div className="max-w-7xl mx-auto px-8 sm:px-32">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 bg-gradient-to-l from-white to-gray-200 bg-clip-text text-transparent leading-relaxed">
            Experience
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-zinc-900/45 rounded-lg p-4 sm:p-6 shadow-lg transform transition-all hover:scale-[1.015] border border-blue-300/45 hover:border-rose-200 group"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                  <div className="mb-3 sm:mb-0">
                    <h3 className="text-xl sm:text-2xl font-semibold text-sky-100 mb-1 sm:mb-2 group-hover:text-rose-200 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-lg sm:text-xl text-blue-200 group-hover:text-red-300 transition-colors">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-left sm:text-right w-full sm:w-auto">
                    <p className="text-gray-300 text-base sm:text-lg">
                      {exp.duration}
                    </p>
                    <p className="text-gray-400 text-base sm:text-lg">
                      {exp.location}
                    </p>
                  </div>
                </div>
                <ul className="text-gray-100 text-sm sm:text-base py-2 sm:py-6 px-4 sm:px-6">
                  {exp.description.map((desc, index) => (
                    <li key={index} className="list-disc ml-4 sm:ml-6 py-1">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-8 sm:px-32">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 bg-gradient-to-l from-white to-gray-200 bg-clip-text text-transparent leading-relaxed">
            Education
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-zinc-900/45 rounded-lg p-2 sm:p-5 shadow-lg transform transition-all hover:scale-[1.015] border border-blue-300/45 hover:border-rose-200 group"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                  <div className="mb-2 sm:mb-0">
                    <h3 className="text-xl sm:text-2xl font-semibold text-sky-100 mb-1 sm:mb-2 group-hover:text-rose-200 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-lg sm:text-xl text-blue-200 group-hover:text-rose-300 transition-colors">
                      {edu.school}
                    </p>
                  </div>
                  <div className="text-left sm:text-right w-full sm:w-auto">
                    <p className="text-gray-300 text-base sm:text-lg">
                      {edu.duration}
                    </p>
                    <p className="text-gray-400 text-base sm:text-lg">
                      {edu.location}
                    </p>
                  </div>
                </div>
                {edu.description && edu.description.length > 0 && (
                  <ul className="text-gray-100 text-sm sm:text-base py-4 px-4 sm:px-6">
                    {edu.description.map((desc, index) => (
                      <li key={index} className="list-disc ml-4 sm:ml-6 py-1">
                        {desc}
                      </li>
                    ))}
                  </ul>
                )}
                {edu.courses && edu.courses.length > 0 && (
                  <div className="flex flex-wrap gap-2 sm:gap-3 py-2">
                    {edu.courses.map((course, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-700/50 text-white px-2 py-1 rounded-full text-sm hover:scale-[1.1] hover:bg-slate-700/45 hover:text-blue-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
