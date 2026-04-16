import { Link } from 'react-router-dom';

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
        {achievements.map((item, idx) => {
          const CardContent = (
            <div
              className="group bg-secondary/40 hover:bg-secondary/60 backdrop-blur hover:backdrop-blur-xl border border-red-500 dark:border-purple-500 rounded-[1.1rem] overflow-hidden hover:scale-105 hover:shadow-[0_8px_32px_rgba(239,68,68,0.25)] dark:hover:shadow-[0_8px_32_rgba(168,85,247,0.3)] transition-all duration-300 flex flex-col cursor-pointer p-8 relative h-full"
              data-aos="fade-up"
              data-aos-delay={idx * 50}
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/10 dark:bg-purple-500/10 rounded-bl-full pointer-events-none group-hover:bg-red-500/20 dark:group-hover:bg-purple-500/20 transition-colors"></div>

              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform origin-left">
                🏆
              </div>

              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-red-500 dark:text-purple-400 mb-2 bg-red-500/10 dark:bg-purple-500/10 px-2 py-1 rounded w-max">
                {item.badge}
              </span>

              <h3 className="text-xl font-bold text-textMain mb-3 leading-tight">{item.title}</h3>

              <p className="text-textMuted text-sm flex-grow">
                {item.desc}
              </p>
            </div>
          );

          if (item.title === "Competitive Programming Champion") {
            return (
              <Link to="/excellence" key={idx} className="block h-full">
                {CardContent}
              </Link>
            );
          }

          return <div key={idx}>{CardContent}</div>;
        })}
      </div>
    </div>
  );
};

export default Achievements;
