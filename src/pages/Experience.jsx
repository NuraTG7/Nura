const experiences = [
  {
    company: "BigsiBucks Innovation",
    role: "UI/UX & Web Design Trainer",
    type: "Internship",
    duration: "2025 (2 Months)",
    domain: "Web Design & Development",
    color: "text-accent",
    bgColor: "bg-accent",
    borderColor: "border-accent",
    work: [
      "Mentored 70+ students in UI/UX design principles, wireframing, and prototyping",
      "Contributed to 2 client projects, including Medrenaline (website for Kilpauk Medical College)",
      "Guided students in usability testing and iterative design processes"
    ]
  },
  {
    company: "PK Placement Services",
    role: "App Development & DSA Trainer",
    type: "Internship",
    duration: "2026 (3 Months)",
    domain: "Mobile App Development & Algorithms",
    color: "text-accentSecondary",
    bgColor: "bg-accentSecondary",
    borderColor: "border-accentSecondary",
    work: [
      "Trained 70+ students in React Native and Flutter mobile development",
      "Trained in Data Structures & Algorithms using Java",
      "Built deep learning-based pneumonia detection model (94% accuracy)"
    ]
  },
  {
    company: "iTech Solutions",
    role: "Cyber Security Intern",
    type: "Internship",
    duration: "2026 (3 Months)",
    domain: "Cybersecurity & Network Security",
    color: "text-blue-500",
    bgColor: "bg-blue-500",
    borderColor: "border-blue-500",
    work: [
      "Studied network security protocols and vulnerability assessment",
      "Applied threat modeling techniques and documented protection mechanisms",
      "Analyzed security threats and assisted in internal system security audits"
    ]
  }
];

const Experience = () => {
  return (
    <div className="animate-fade-in max-w-5xl mx-auto pb-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-display font-bold uppercase tracking-widest text-textMain mb-4">Professional <span className="text-accent">Experience</span></h1>
      </div>

      <div className="relative">
        {/* Continuous Center line for Desktop */}
        <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-glass -translate-x-1/2"></div>
        {/* Continuous Left line for Mobile */}
        <div className="md:hidden absolute left-4 top-4 bottom-4 w-[2px] bg-glass"></div>
        
        <div className="space-y-16">
          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className="relative flex flex-col md:flex-row items-stretch justify-between group">
                
                {/* Timeline Dot (Desktop) */}
                <div className={`hidden md:flex absolute left-1/2 -ml-[9px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full ${exp.bgColor} items-center justify-center z-10 shadow-[0_0_15px_currentColor]`}>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                
                {/* Timeline Dot (Mobile) */}
                <div className={`md:hidden absolute left-4 -ml-[5px] top-8 w-3 h-3 rounded-full ${exp.bgColor} shadow-[0_0_10px_currentColor] z-10`}></div>

                {/* Left Side Container */}
                <div className={`md:w-5/12 pl-12 md:pl-0 mb-4 md:mb-0 flex items-center ${isLeft ? 'md:justify-end md:pr-12' : 'md:order-2 md:pl-12 md:justify-start'}`}>
                  <div className="bg-glass border border-glass p-6 rounded-xl w-full hover:border-textMuted/30 transition-all shadow-md">
                    <h3 className={`text-2xl font-bold ${exp.color} mb-1 flex items-center gap-3`}>
                      {exp.company}
                    </h3>
                    <h4 className="text-textMain text-lg font-medium">{exp.role}</h4>
                    <div className="mt-4 flex flex-wrap gap-2">
                       <span className="px-3 py-1 bg-secondary border border-glass rounded font-bold text-xs text-textMuted uppercase">
                         {exp.type}
                       </span>
                       <span className="px-3 py-1 bg-secondary border border-glass rounded font-bold text-xs text-textMuted uppercase">
                         {exp.duration}
                       </span>
                    </div>
                  </div>
                </div>

                {/* Right Side Container */}
                <div className={`md:w-5/12 pl-12 md:pl-0 flex items-center ${isLeft ? 'md:order-2 md:pl-12' : 'md:pr-12'} `}>
                  <div className={`bg-secondary/40 backdrop-blur border border-glass p-6 rounded-xl w-full hover:${exp.borderColor} transition-colors shadow-md`}>
                    <h5 className={`text-xs font-bold uppercase tracking-widest ${exp.color} mb-4 border-b border-glass pb-2`}>
                      {exp.domain}
                    </h5>
                    <ul className="space-y-3">
                      {exp.work.map((w, i) => (
                        <li key={i} className="text-sm text-textMuted flex items-start gap-3 leading-relaxed font-medium">
                          <span className={`mt-1 ${exp.color}`}>▹</span>
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
