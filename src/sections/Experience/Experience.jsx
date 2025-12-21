/**
 * @copyright 2025 Ayisha Afridi
 * @license Apache-2.0
 */

import React from "react";

const Experience = () => {
  const experience = [
    {
      title: "K-12 Math Tutor",
      company: "A-Star Learning Inc.",
      duration: "Sep 2025 – Present",
      location: "Calgary, Canada",
      description: [
        "Assessed student knowledge gaps and developed personalized learning plans to improve comprehension.",
        "Explained complex mathematical concepts using relatable, real-world examples to increase student engagement and retention.",
        "Collaborated with instructional staff to align tutoring methods with company goals and curriculum standards.",
      ],
      technologies: [],
    },
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
      degree: "Bachelor of Science in Computer Science",
      isUniversity: true,
      schools: [
        {
          name: "University of Calgary",
          location: "Calgary, Canada",
          duration: "September 2025 - Present",
        },
        {
          name: "Prince Mohammad Bin Fahd University",
          location: "Khobar, Saudi Arabia",
          duration: "August 2023 - May 2025",
        },
      ],
      gpa: "3.92",
      courses: [
        "Data Structures",
        "Algorithms",
        "Computer Organisation and Architecture",
        "Web Programming",
        "Computer Science I",
        "Computer Science II",
        "Mathematical Reasoning and Algorithmic Thinking",
        "Database",
      ],
    },
    {
      degree: "High School Diploma",
      school: "Nelson Mandela High School & CBe-learn",
      duration: "Sep 2019 - Jun 2023",
      location: "Calgary, Canada",
      isUniversity: false,
      description: [],
      courses: [],
    },
  ];

  return (
    <>
      {/* Experience Section */}
      <section id="experience" className="py-6 sm:py-12">
        <div className="max-w-7xl mx-auto px-8 sm:px-16">
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
      <section id="education" className="py-6 sm:py-12">
        <div className="max-w-7xl mx-auto px-8 sm:px-16">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 bg-gradient-to-l from-white to-gray-200 bg-clip-text text-transparent leading-relaxed">
            Education
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-zinc-900/45 rounded-lg p-4 sm:p-6 shadow-lg transform transition-all hover:scale-[1.015] border border-blue-300/45 hover:border-rose-200 group"
              >
                {/* Degree Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-sky-100 mb-3 sm:mb-4 group-hover:text-rose-200 transition-colors">
                  {edu.degree}
                </h3>

                {/* University Format (with multiple institutions) */}
                {edu.isUniversity ? (
                  <>
                    {/* Schools List */}
                    <div className="space-y-4 mb-8 sm:mb-8">
                      {edu.schools.map((school, schoolIndex) => (
                        <div key={schoolIndex} className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                          <div className="flex-1">
                            <p className="text-base sm:text-lg text-blue-200 group-hover:text-rose-300 transition-colors font-medium">
                              {school.name}
                            </p>
                            <p className="text-sm sm:text-base text-gray-400">
                              {school.location}
                            </p>
                          </div>
                          <p className="text-sm sm:text-base text-gray-300 mt-1 sm:mt-0 sm:text-right">
                            {school.duration}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* GPA */}
                    {edu.gpa && (
                      <p className="text-sm sm:text-base text-gray-100 mb-2">
                        <span className="font-medium">GPA:</span> {edu.gpa}
                      </p>
                    )}

                    {/* Relevant Coursework */}
                    {edu.courses && edu.courses.length > 0 && (
                      <div className="mt-3">
                        <p className="text-sm sm:text-base text-gray-100 font-medium mb-4">
                          Relevant Coursework:
                        </p>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {edu.courses.map((course, idx) => (
                            <span
                              key={idx}
                              className="bg-slate-700/50 text-white px-2.5 py-1 rounded-full text-xs sm:text-sm hover:scale-[1.05] hover:bg-slate-700/45 hover:text-blue-300 transition-all"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  /* High School Format - Original Layout */
                  <>
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                      <div className="mb-2 sm:mb-0">
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
                        {edu.description.map((desc, descIndex) => (
                          <li key={descIndex} className="list-disc ml-4 sm:ml-6 py-1">
                            {desc}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
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
