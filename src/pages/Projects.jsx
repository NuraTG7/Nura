import { useRef, useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const projectsList = [
  {
    title: 'Sand Grain Analyser',
    desc: 'Computer vision system to classify soil types from sand grain images for coastal corrosion prevention',
    domain: 'Computer Vision',
    icon: '🔍',
    categoryColor: '#3b82f6',
    link: 'https://github.com/arun-nehru'
  },
  {
    title: 'DreamWeavers',
    desc: 'Multilingual AI chatbot for college admission queries with RFID-based faculty availability',
    domain: 'AI & Chatbots',
    icon: '🤖',
    categoryColor: '#ef4444',
    link: 'https://github.com/arun-nehru'
  },
  {
    title: 'Virtual Mouse',
    desc: 'Computer vision-based gesture control system for mouse movements',
    domain: 'MediaPipe CV',
    icon: '🖱️',
    categoryColor: '#f59e0b',
    link: 'https://github.com/arun-nehru'
  },
  {
    title: 'RAG Pipeline System',
    desc: 'Full Retrieval-Augmented Generation pipeline with query embedding, hybrid search',
    domain: 'LLM Pipeline',
    icon: '🗂️',
    categoryColor: '#8b5cf6',
    link: 'https://github.com/arun-nehru'
  },
  {
    title: 'Intelligent Tracker',
    desc: 'AI-powered financial tracking application with smart categorization',
    domain: 'Full Stack AI',
    icon: '📈',
    categoryColor: '#10b981',
    link: 'https://github.com/arun-nehru'
  }
];

const Projects = () => {
  const scrollRef = useRef(null);
  const [scrollRot, setScrollRot] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const onScroll = () => {
        // Calculate rotation and progress based on horizontal scroll
        const maxScroll = el.scrollWidth - el.clientWidth;
        const scrollFraction = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
        setScrollRot(scrollFraction * 360 * 2); // Two full spins
        setScrollProgress(scrollFraction * 100);
      };
      
      const onWheel = e => {
        if (e.deltaY !== 0) {
          el.scrollLeft += e.deltaY;
        }
      };
      
      // Initialize progress
      onScroll();
      
      el.addEventListener('scroll', onScroll, { passive: true });
      el.addEventListener('wheel', onWheel, { passive: true });
      
      // Update progress on resize since maxScroll changes
      window.addEventListener('resize', onScroll);
      
      return () => {
        el.removeEventListener('scroll', onScroll);
        el.removeEventListener('wheel', onWheel);
        window.removeEventListener('resize', onScroll);
      };
    }
  }, []);

  return (
    <div className="animate-fade-in flex flex-col h-[80vh]">
      <div className="mb-4 flex flex-col items-center shrink-0">
        <h1 className="text-4xl font-display font-bold uppercase tracking-wider text-center text-textMain mb-4 flex items-center gap-4">
          Featured <span className="text-accent">Projects</span>
        </h1>
        {/* Scrolling Pokeball */}
        <div className="w-16 h-16 pointer-events-none opacity-80" style={{ transform: `rotate(${scrollRot}deg)` }}>
          <img src="/Nura/pokeball.svg" alt="pokeball" className="w-full h-full drop-shadow-xl" />
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex-1 flex md:flex-row flex-col gap-10 overflow-x-auto md:overflow-y-hidden pb-8 scroll-hide snap-x pt-4 px-4 items-center"
        style={{ scrollBehavior: 'smooth' }}
      >
        {projectsList.map((proj, idx) => (
          <div key={idx} className="min-w-[320px] md:min-w-[380px] h-[400px] snap-center shrink-0">
            
            <div 
              className="animated-border-box h-full group"
              style={{
                '--border-bg': 'var(--text-primary)', // Black in light mode, White in dark mode
                '--static-opacity': '1',
                '--spin-opacity': '0',
                '--hover-static-opacity': '0',
                '--hover-spin-opacity': '1',
                '--spin-color-1': '#ef4444',
                '--spin-color-2': '#3b82f6'
              }}
            >
              <div className="animated-border-content flex flex-col shadow-xl overflow-hidden relative">
                
                {/* Default State (Image/Title) */}
                <div className="flex-1 flex flex-col justify-center items-center group-hover:-translate-x-full transition-transform duration-500 absolute inset-0 p-8 z-0">
                  <div className="text-6xl mb-6">{proj.icon}</div>
                  <h3 className="text-2xl font-bold text-textMain text-center">{proj.title}</h3>
                </div>

                {/* Hover State (Description/Domain) Sliding from Right */}
                <div className="flex-1 flex flex-col justify-between translate-x-full group-hover:translate-x-0 transition-transform duration-500 absolute inset-0 p-8 bg-primary z-10">
                  <div>
                    <h3 className="text-xl font-bold text-accent mb-2">{proj.title}</h3>
                    <span 
                      className="text-xs font-semibold px-2 py-1 rounded inline-block mb-4 text-primary"
                      style={{ backgroundColor: proj.categoryColor }}
                    >
                      {proj.domain}
                    </span>
                    <p className="text-textMuted text-sm leading-relaxed">{proj.desc}</p>
                  </div>
                  
                  <a 
                    href={proj.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-textMain text-primary font-bold rounded-lg hover:bg-accent hover:text-white transition-colors"
                  >
                    <FaGithub size={18} /> Source Code
                  </a>
                </div>

              </div>
            </div>

          </div>
        ))}
      </div>
      
      {/* Scroll Progress Bar */}
      <div className="w-full max-w-md mx-auto mt-4 h-2 bg-glass rounded-full overflow-hidden shrink-0 hidden md:block">
        <div 
          className="h-full bg-gradient-to-r from-accent to-accentSecondary transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Projects;
