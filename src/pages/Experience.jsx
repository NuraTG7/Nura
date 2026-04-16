import { useState } from 'react';

const experiences = [
  {
    company: "BigsiBucks Innovation",
    url: "https://bigbucksinnovation.com/",
    role: "UI/UX & Web Design Trainer",
    type: "Internship",
    duration: "2025 (2 Months)",
    domain: "Web Design & Development",
    work: [
      "Mentored 70+ students in UI/UX design principles, wireframing, and prototyping",
      "Contributed to 2 client projects, including Medrenaline (website for Kilpauk Medical College)",
      "Guided students in usability testing and iterative design processes"
    ]
  },
  {
    company: "PK Placement Services",
    url: "https://pkcareers.in/",
    role: "App Development & DSA Trainer",
    type: "Internship",
    duration: "2026 (3 Months)",
    domain: "Mobile App Development & Algorithms",
    work: [
      "Trained 70+ students in React Native and Flutter mobile development",
      "Trained in Data Structures & Algorithms using Java",
      "Built deep learning-based pneumonia detection model (94% accuracy)"
    ]
  },
  {
    company: "iTech Solutions",
    url: "https://itechindia.co/",
    role: "Cyber Security Intern",
    type: "Internship",
    duration: "2026 (3 Months)",
    domain: "Cybersecurity & Network Security",
    work: [
      "Studied network security protocols and vulnerability assessment",
      "Applied threat modeling techniques and documented protection mechanisms",
      "Analyzed security threats and assisted in internal system security audits"
    ]
  }
];

const Experience = () => {
  // Only company-card hover triggers cross-card effects
  const [companyHoveredIdx, setCompanyHoveredIdx] = useState(null);

  return (
    <div className="animate-fade-in max-w-5xl mx-auto pb-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-display font-bold uppercase tracking-widest text-textMain mb-4">
          Professional <span className="text-accent">Experience</span>
        </h1>
      </div>

      <div className="relative">
        {/* Continuous Center line (Desktop) */}
        <div className="rgb-line hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-red-500 via-green-500 to-blue-500 -translate-x-1/2 rounded-full opacity-70"></div>
        {/* Continuous Left line (Mobile) */}
        <div className="rgb-line md:hidden absolute left-4 top-4 bottom-4 w-[2px] bg-gradient-to-b from-red-500 via-green-500 to-blue-500 rounded-full opacity-70"></div>

        <div className="space-y-16">
          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            const isCompanyHovered = companyHoveredIdx === idx;

            return (
              <div
                key={idx}
                className="relative flex flex-col md:flex-row items-stretch justify-between"
              >
                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:flex absolute left-1/2 -ml-[9px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-red-500 dark:bg-green-500 items-center justify-center z-10 shadow-[0_0_15px_#ef4444] dark:shadow-[0_0_15px_#22c55e]">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                {/* Timeline Dot (Mobile) */}
                <div className="md:hidden absolute left-4 -ml-[5px] top-8 w-3 h-3 rounded-full bg-red-500 dark:bg-green-500 shadow-[0_0_10px_#ef4444] dark:shadow-[0_0_10px_#22c55e] z-10"></div>

                {/* ── COMPANY CARD ── */}
                <div className={`md:w-5/12 pl-12 md:pl-0 mb-4 md:mb-0 flex items-center ${isLeft ? 'md:justify-end md:pr-12' : 'md:order-2 md:pl-12 md:justify-start'}`}>
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                    onMouseEnter={() => setCompanyHoveredIdx(idx)}
                    onMouseLeave={() => setCompanyHoveredIdx(null)}
                  >
                    <div
                      className="exp-company-border animated-border-box w-full cursor-pointer"
                      style={{
                        transform: isCompanyHovered ? 'scale(1.05)' : 'scale(1)',
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      <div className="animated-border-content p-6 w-full border border-black dark:border-transparent transition-all duration-500">
                        <h3 className="text-2xl font-bold text-black dark:text-green-400 mb-1 flex items-center gap-3">
                          {exp.company}
                        </h3>
                        <h4 className="text-gray-700 dark:text-gray-200 text-lg font-medium">{exp.role}</h4>
                        <div className="mt-4 flex flex-wrap gap-2 items-center">
                          <span className="px-3 py-1 bg-white dark:bg-black border border-black dark:border-white rounded font-bold text-xs text-black dark:text-white uppercase">
                            {exp.type}
                          </span>
                          <span className="px-3 py-1 bg-white dark:bg-black border border-black dark:border-white rounded font-bold text-xs text-black dark:text-white uppercase">
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                {/* ── DESCRIPTION CARD ── */}
                <div className={`md:w-5/12 pl-12 md:pl-0 flex items-center ${isLeft ? 'md:order-2 md:pl-12' : 'md:pr-12'}`}>
                  <div
                    className={`desc-card w-full rounded-[1.1rem] backdrop-blur hover:backdrop-blur-xl bg-secondary/40 hover:bg-secondary/60 border border-black dark:border-purple-500 p-6 shadow-md hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)] dark:hover:shadow-[0_8px_32px_rgba(168,85,247,0.3)] transition-colors duration-300 ${isCompanyHovered ? 'company-hovered' : ''}`}
                  >
                    <h5 className="text-sm font-bold uppercase tracking-widest text-red-600 dark:text-purple-400 mb-4 border-b border-black/10 dark:border-purple-500/30 pb-2">
                      {exp.domain}
                    </h5>
                    <ul className="space-y-3">
                      {exp.work.map((w, i) => (
                        <li key={i} className="text-sm text-black dark:text-white flex items-start gap-3 leading-relaxed font-medium">
                          <span className="mt-1 text-red-500 dark:text-purple-400">▹</span>
                          <span>{w}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
