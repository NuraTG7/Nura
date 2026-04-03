import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-full">
      {/* Hero */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between py-12 lg:py-24 gap-12">
        <div className="w-full lg:w-1/2 space-y-8" data-aos="fade-up">
          <motion.h1 
            className="text-5xl lg:text-7xl font-display font-bold text-textMain tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Say hi, I'm <br />
            <span className="text-accent text-transparent bg-clip-text bg-gradient-to-r from-accent to-accentSecondary">
              Arun Nehru
            </span>
          </motion.h1>
          
          <p className="text-xl text-textMuted font-medium">
            AI & Data Science Engineer <span className="text-accent">|</span> Full-Stack Web Developer
          </p>

          <div className="flex gap-4">
            <Link to="/projects" className="px-8 py-3 bg-textMain text-primary font-semibold rounded-lg hover:shadow-[0_0_20px_var(--accent)] transition-all">
              View My Work
            </Link>
            <a href="#contact" className="px-8 py-3 border border-glass bg-secondary/30 text-textMain font-semibold rounded-lg hover:bg-glass transition-all text-center">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-16" data-aos="fade-left">
          <motion.div 
            className="relative w-80 h-80 lg:w-[420px] lg:h-[420px] flex justify-center items-center"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accentSecondary/20 rounded-full blur-3xl animate-pulse"></div>
            <img 
              src="/arun_home.png" 
              alt="Arun Nehru" 
              className="w-full h-full object-contain relative z-10 drop-shadow-2xl" 
            />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-glass bg-secondary/20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center" data-aos="fade-up" data-aos-delay="0">
            <h3 className="text-4xl font-display font-bold text-accent mb-2">183</h3>
            <p className="text-sm text-textMuted font-medium tracking-wide">Students Trained</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-4xl font-display font-bold text-accent mb-2">3</h3>
            <p className="text-sm text-textMuted font-medium tracking-wide">Internships</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-4xl font-display font-bold text-accent mb-2">4</h3>
            <p className="text-sm text-textMuted font-medium tracking-wide">Client Projects</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-4xl font-display font-bold text-accent mb-2">20+</h3>
            <p className="text-sm text-textMuted font-medium tracking-wide">National Hackathons</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-secondary/30 rounded-3xl p-8 lg:p-16 border border-glass mt-12 mb-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-display font-bold mb-6 text-textMain">Get in Touch</h2>
            <div className="space-y-4 text-textMuted">
              <p>Email: <a href="mailto:arunnehru143here@gmail.com" className="text-textMain hover:text-accent font-medium">arunnehru143here@gmail.com</a></p>
              <p>Phone: <a href="tel:+916369857257" className="text-textMain hover:text-accent font-medium">+91 6369-857-257</a></p>
              <p className="mt-6 font-medium text-textMain/70">📍 Chennai, Tamil Nadu, India</p>
            </div>
          </div>

          <div className="lg:w-2/3">
            <form className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input type="text" placeholder="Name" className="w-full bg-primary border border-glass rounded-lg px-4 py-3 focus:outline-none focus:border-accent text-textMain" />
                <input type="email" placeholder="Email" className="w-full bg-primary border border-glass rounded-lg px-4 py-3 focus:outline-none focus:border-accent text-textMain" />
              </div>
              <textarea placeholder="Message" rows="4" className="w-full bg-primary border border-glass rounded-lg px-4 py-3 focus:outline-none focus:border-accent text-textMain resize-none"></textarea>
              <button type="submit" onClick={(e) => e.preventDefault()} className="bg-accent text-primary font-bold py-3 px-8 rounded-lg self-start hover:opacity-80 transition-opacity">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
