import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiTarget, FiBox, FiCalendar, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const stats = [
  { label: "Prize Wins", value: "21", icon: <FiAward className="text-accent" /> },
  { label: "Events Participated", value: "28", icon: <FiTarget className="text-blue-500" /> },
  { label: "Colleges & Universities", value: "12", icon: <FiBox className="text-purple-500" /> },
  { label: "Journey", value: "2025–2026", icon: <FiCalendar className="text-green-500" /> },
];

const galleryImages = Array.from({ length: 18 }, (_, i) => {
  const index = i + 1;
  let ext = 'jpg';
  if (index === 4) ext = 'JPG';
  if (index >= 15 && index <= 17) ext = 'png';
  if (index === 18) ext = 'jpeg';
  return `/Nura/gallery/gallery (${index}).${ext}`;
});

const timelineData = [
  {
    title: "Code Relay",
    content: "Secured 1st Prize in the fast-paced coding relay event at CAPTCHA’26, Dhanalakshmi Engineering College on 09 Apr 2026.",
    date: "09 Apr 2026",
    location: "Dhanalakshmi Engineering College",
    prize: "1st"
  },
  {
    title: "Website Prompting",
    content: "Won 2nd Prize in the website prompting challenge at AURISTRA’26, Takshashila University on 27 Mar 2026.",
    date: "27 Mar 2026",
    location: "Takshashila University",
    prize: "2nd"
  },
  {
    title: "Tech Interview",
    content: "Achieved 2nd Prize in the technical interview round conducted at Talesynic 2K26, Kings Engineering College on 13 Mar 2026.",
    date: "13 Mar 2026",
    location: "Kings Engineering College",
    prize: "2nd"
  },
  {
    title: "Shadow Debug",
    content: "Secured 1st Prize in the debugging event at Talesynic 2K26, Kings Engineering College on 13 Mar 2026.",
    date: "13 Mar 2026",
    location: "Kings Engineering College",
    prize: "1st"
  },
  {
    title: "Coding Event – Infynex’26",
    content: "Won 1st Prize in the coding competition held at Infynex’26, Velammal Engineering College on 04 Mar 2026.",
    date: "04 Mar 2026",
    location: "Velammal Engineering College",
    prize: "1st"
  },
  {
    title: "Coding Event – CRYPTONIX’26",
    content: "Secured 1st Prize in the coding event at CRYPTONIX’26, Thangavelu Engineering College on 28 Feb 2026.",
    date: "28 Feb 2026",
    location: "Thangavelu Engineering College",
    prize: "1st"
  },
  {
    title: "Technical Quiz",
    content: "Achieved 1st Prize in the technical quiz at CRYPTONIX’26, Thangavelu Engineering College on 28 Feb 2026.",
    date: "28 Feb 2026",
    location: "Thangavelu Engineering College",
    prize: "1st"
  },
  {
    title: "Paper Presentation",
    content: "Won 2nd Prize for presenting a technical paper at CRYPTONIX’26, Thangavelu Engineering College on 28 Feb 2026.",
    date: "28 Feb 2026",
    location: "Thangavelu Engineering College",
    prize: "2nd"
  },
  {
    title: "Tech Bingo",
    content: "Secured 1st Prize in the technical puzzle event at Juno 2K26, Guru Nanak College on 26 Feb 2026.",
    date: "26 Feb 2026",
    location: "Guru Nanak College",
    prize: "1st"
  },
  {
    title: "Overall Champion",
    content: "Awarded Runner-up Overall Champion at Juno 2K26, Guru Nanak College on 26 Feb 2026.",
    date: "26 Feb 2026",
    location: "Guru Nanak College",
    prize: "2nd"
  },
  {
    title: "Debugging",
    content: "Secured 1st Prize in the debugging event at Juno 2K26, Guru Nanak College on 25 Feb 2026.",
    date: "25 Feb 2026",
    location: "Guru Nanak College",
    prize: "1st"
  },
  {
    title: "Tech Quiz – Juno 2K26",
    content: "Won 1st Prize in the technical quiz event at Juno 2K26, Guru Nanak College on 24 Feb 2026.",
    date: "24 Feb 2026",
    location: "Guru Nanak College",
    prize: "1st"
  },
  {
    title: "Interstellar Code Rush",
    content: "Secured 1st Prize in the coding challenge at Cisbosium’26, Sri Sairam Engineering College on 09 Feb 2026.",
    date: "09 Feb 2026",
    location: "Sri Sairam Engineering College",
    prize: "1st"
  },
  {
    title: "Coders Chemistry",
    content: "Won 3rd Prize in the coding event at TROJANS’26, Chennai Institute of Technology on 05 Feb 2026.",
    date: "05 Feb 2026",
    location: "Chennai Institute of Technology",
    prize: "3rd"
  },
  {
    title: "Build Together Hackathon",
    content: "Secured a position in a 2-day inter-college hackathon hosted by Sri Sairam Engineering College on 18–19 Feb 2026.",
    date: "18–19 Feb 2026",
    location: "Sri Sairam Engineering College",
    prize: "Position"
  },
  {
    title: "Retro Code Chronicles",
    content: "Secured 3rd Prize in the coding challenge at INNOVATA’25 on 13 Oct 2025.",
    date: "13 Oct 2025",
    location: "INNOVATA’25",
    prize: "3rd"
  },
  {
    title: "Full Throttle Code",
    content: "Won 3rd Prize in the coding competition at Infovist 2025, Sri Sairam Engineering College on 28 Oct 2025.",
    date: "28 Oct 2025",
    location: "Sri Sairam Engineering College",
    prize: "3rd"
  },
  {
    title: "Astrology-IQ",
    content: "Achieved 2nd Prize in the IQ-based technical event at Slice V25, Loyola College of Engineering on 23 Aug 2025.",
    date: "23 Aug 2025",
    location: "Loyola College of Engineering",
    prize: "2nd"
  },
  {
    title: "Crossword Challenge",
    content: "Won 1st Prize in the technical crossword event organized by the Bureau of Indian Standards on 15 Apr 2025.",
    date: "15 Apr 2025",
    location: "Bureau of Indian Standards",
    prize: "1st"
  },
  {
    title: "BugCode",
    content: "Secured 3rd Prize in the coding event at Cisbosium, RMK Engineering College on 17 Mar 2025.",
    date: "17 Mar 2025",
    location: "RMK Engineering College",
    prize: "3rd"
  },
  {
    title: "MYSTIQ (IQ Challenge)",
    content: "Won 2nd Prize in the IQ-based challenge at Cisbosium, RMK Engineering College on 17 Mar 2025.",
    date: "17 Mar 2025",
    location: "RMK Engineering College",
    prize: "2nd"
  }
];

const getPrizeStyles = (prize) => {
  switch (prize) {
    case '1st': return 'prize-gold';
    case '2nd': return 'prize-silver';
    case '3rd': return 'prize-bronze';
    default: return 'border-glass';
  }
};

const Excellence = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    AOS.refresh();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
        setZoomLevel(1);
      }
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const handleZoom = (e) => {
    e.stopPropagation();
    setZoomLevel(prev => prev >= 3 ? 1 : prev + 0.5);
  };

  return (
    <div className="min-h-screen text-textMain pb-20 overflow-x-hidden">
      {/* Back Button */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <Link to="/achievements" className="inline-flex items-center gap-2 text-textMuted hover:text-accent transition-colors group">
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Achievements</span>
        </Link>
      </motion.div>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-6 bg-gradient-to-r from-textMain to-accent bg-clip-text text-transparent w-fit">
          Competitive <span className="text-accentSecondary">Excellence</span>
        </h1>
        <p className="text-lg md:text-xl text-textMuted max-w-5xl leading-relaxed">
          A journey of consistency, growth, and competitive excellence across coding contests, technical events, hackathons, and symposiums from <span className="text-textMain font-semibold">2025 to 2026</span>. This section showcases my achievements, award-winning performances, and participation across multiple colleges and universities, reflecting my passion for problem-solving, innovation, and continuous learning.
        </p>
      </motion.section>

      {/* Statistics Row */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="p-6 rounded-2xl bg-secondary/30 backdrop-blur-md border border-black dark:border-white flex flex-col items-center text-center group cursor-default"
          >
            <div className="text-3xl mb-4 p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
              {stat.icon}
            </div>
            <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
            <p className="text-sm text-textMuted uppercase tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </section>

      {/* Gallery Section */}
      <section className="mb-24">
        <h2 className="text-3xl font-display font-bold uppercase tracking-widest mb-10 text-center">
          Visual <span className="text-accent">Mementos</span>
        </h2>
        
        {/* Scrollable Container with 4x2 Grid Concept */}
        <div className="relative">
          <div className="max-h-[520px] overflow-y-auto custom-scrollbar p-6 rounded-[2rem] bg-secondary/5 border-2 inverse-border backdrop-blur-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.map((src, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 4) * 0.05 }}
                  whileHover={{ scale: 1.03, zIndex: 10 }}
                  className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 cursor-zoom-in group/item"
                  onClick={() => setSelectedImage(src)}
                >
                  <img 
                    src={src} 
                    alt={`Gallery ${idx + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <FiTarget className="text-xl" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4 md:p-10 backdrop-blur-2xl"
            onClick={() => {
              setSelectedImage(null);
              setZoomLevel(1);
            }}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-8 right-8 text-white/50 hover:text-white text-5xl font-thin z-[110] transition-all"
              onClick={() => {
                setSelectedImage(null);
                setZoomLevel(1);
              }}
            >
              &times;
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full flex items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                drag={zoomLevel > 1}
                dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
                dragElastic={0.1}
                animate={{ scale: zoomLevel }}
                src={selectedImage}
                alt="Selected Achievement"
                className={`max-w-full max-h-[90vh] object-contain transition-transform duration-300 ease-out shadow-2xl rounded-lg ${zoomLevel > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'}`}
                onClick={handleZoom}
                onWheel={(e) => {
                  if (e.deltaY < 0) setZoomLevel(prev => Math.min(prev + 0.1, 4));
                  else setZoomLevel(prev => Math.max(prev - 0.1, 1));
                }}
              />
              
              {/* Controls UI overlay (subtle) */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 pointer-events-none">
                <div className="px-5 py-2.5 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-white/40 text-[10px] font-bold tracking-[0.3em] uppercase">
                  {zoomLevel > 1 ? 'Drag to pan • Scroll to zoom' : 'Click to zoom • Scroll to zoom'}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Timeline Section */}
      <section>
        <h2 className="text-3xl font-display font-bold uppercase tracking-widest mb-16 text-center">
          Continuous <span className="text-accent">Growth</span>
        </h2>
        
        <div className="relative">
          {/* Continuous Center Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-[3.5px] animated-red-yellow-line z-0 rounded-full opacity-90 hidden md:block"></div>
          
          {/* Mobile Center Line */}
          <div className="absolute left-[-1px] top-4 bottom-4 w-[3.5px] animated-red-yellow-line z-0 rounded-full opacity-90 md:hidden"></div>

          {timelineData.map((item, idx) => (
            <div 
              key={idx}
              className={`relative mb-12 md:mb-24 md:flex items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Card */}
              <div 
                className="ml-8 md:ml-0 md:w-[45%] z-10"
                data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}
              >
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className={`animated-border-box group ${getPrizeStyles(item.prize)} cursor-default transition-all duration-300`}
                >
                  <div className="animated-border-content p-8 bg-secondary/90 dark:bg-black/90 backdrop-blur-xl">
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-4 tracking-tighter">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-textMain to-textMain group-hover:from-accent group-hover:to-accentSecondary bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_2px] pb-1 w-fit mb-3">
                      {item.title}
                    </h3>
                    <p className="text-textMuted text-sm leading-relaxed mb-4">
                      {item.content}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-textMuted/60">
                        <FiBox className="text-accent/40" />
                        <span>{item.location}</span>
                      </div>
                      {item.prize !== 'par' && item.prize !== 'Position' && (
                        <div className="text-xs font-bold uppercase tracking-widest text-accent">
                          {item.prize} Prize
                        </div>
                      )}
                      {item.prize === 'Position' && (
                        <div className="text-xs font-bold uppercase tracking-widest text-accent">
                          Secured Position
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Timeline Node */}
              <div className="absolute left-[-11px] md:left-1/2 md:-translate-x-1/2 top-0 w-6 h-6 rounded-full bg-accent border-4 border-primary z-10 shadow-[0_0_15px_rgba(239,68,68,0.5)] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Excellence;
