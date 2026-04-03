const achievements = [
  {
    title: "IEEE Xtreme 2024 - Top 100 Global",
    desc: "Ranked Top 100 globally in IEEE Xtreme 2024, an international 24-hour competitive programming competition",
    badge: "Competition"
  },
  {
    title: "LeetCode Mastery",
    desc: "Solved 450+ problems on LeetCode, strengthening Data Structures & Algorithms proficiency",
    badge: "Algorithms"
  },
  {
    title: "SkillRack Excellence",
    desc: "Solved 1,700+ coding problems on Skillrack across various categories",
    badge: "Problem Solving"
  },
  {
    title: "Competitive Programming Champion",
    desc: "Winner of 12 coding contests conducted across multiple colleges",
    badge: "Champion"
  },
  {
    title: "Hackathon Winner",
    desc: "Winner of 2 hackathons, delivering innovative technical solutions under time-constrained environments",
    badge: "Hackathon"
  },
  {
    title: "Leadership in Tech Events",
    desc: "Coordinator of AIRO 4.0 & 5.0 (500+ participants), Hacktronix 1.0 & 2.0, Innova TN '25 (450+ teams)",
    badge: "Leadership"
  }
];

const Achievements = () => {
  return (
    <div className="animate-fade-in pb-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-display font-bold uppercase tracking-widest text-textMain mb-4">Milestones & <span className="text-accentSecondary">Achievements</span></h1>
        <p className="text-textMuted max-w-2xl mx-auto">Awards, participations, and recognitions driving me forward.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item, idx) => (
          <div 
            key={idx} 
            className="group bg-secondary/30 backdrop-blur border border-glass rounded-xl overflow-hidden hover:-translate-y-2 hover:border-accentSecondary hover:shadow-[0_10px_30px_rgba(255,20,147,0.15)] transition-all duration-300 flex flex-col cursor-pointer p-8 relative"
            data-aos="fade-up"
            data-aos-delay={idx * 50}
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-accentSecondary/10 rounded-bl-full pointer-events-none group-hover:bg-accentSecondary/20 transition-colors"></div>
            
            <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform origin-left">
              🏆
            </div>

            <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-accentSecondary mb-2 bg-accentSecondary/10 px-2 py-1 rounded w-max">
              {item.badge}
            </span>

            <h3 className="text-xl font-bold text-textMain mb-3 leading-tight">{item.title}</h3>
            
            <p className="text-textMuted text-sm flex-grow">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
