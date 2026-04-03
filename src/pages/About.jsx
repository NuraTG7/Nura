import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import GalleryCarousel from '../components/GalleryCarousel';

const About = () => {
  return (
    <div className="animate-fade-in pb-12">
      <div className="flex items-center gap-4 mb-12">
        <Link to="/" className="text-textMuted hover:text-accent transition-colors text-2xl">←</Link>
        <h1 className="text-3xl font-display font-bold text-textMain">About Me</h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 mb-20 items-center">
        {/* Personal Image */}
        <div className="lg:col-span-1 flex justify-center order-2 lg:order-1">
          <div className="w-full flex justify-center items-center">
            <img 
              src="/arun_about.png" 
              alt="Arun Nehru" 
              className="w-full max-w-[300px] lg:max-w-[400px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Description & Stats */}
        <div className="lg:col-span-2 order-1 lg:order-2 flex flex-col justify-center">
          <div className="bg-secondary/20 border border-glass p-8 rounded-2xl relative overflow-hidden mb-8 shadow-sm">
            <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
            <p className="text-lg text-textMuted leading-relaxed">
              Passionate AI & Data Science student with experience in AI-driven applications, web development, and problem-solving using Data Structures and Algorithms. Skilled in Python and modern web technologies, with exposure to computer vision and RAG-based systems.
            </p>
            
            <a 
              href="/Arun_Nehru_Resume.pdf" 
              download="Arun_Nehru_Resume.pdf"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-1 transition-all"
            >
              <FaDownload /> Download Resume
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-secondary/40 border border-glass p-4 rounded-xl text-center shadow-sm">
              <h4 className="text-2xl font-bold text-accent mb-1">183</h4>
              <span className="text-xs text-textMuted">Students Trained</span>
            </div>
            <div className="bg-secondary/40 border border-glass p-4 rounded-xl text-center shadow-sm">
              <h4 className="text-2xl font-bold text-accent mb-1">3</h4>
              <span className="text-xs text-textMuted">Internships</span>
            </div>
            <div className="bg-secondary/40 border border-glass p-4 rounded-xl text-center shadow-sm">
              <h4 className="text-2xl font-bold text-accent mb-1">4</h4>
              <span className="text-xs text-textMuted">Client Projects</span>
            </div>
            <div className="bg-secondary/40 border border-glass p-4 rounded-xl text-center shadow-sm">
              <h4 className="text-2xl font-bold text-accent mb-1">20</h4>
              <span className="text-xs text-textMuted">Symposium Wins</span>
            </div>
          </div>
        </div>
      </div>

      <GalleryCarousel />
    </div>
  );
};

export default About;
