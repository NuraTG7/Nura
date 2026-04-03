import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/experience', label: 'Experience' },
  { path: '/skills', label: 'My Skills' },
  { path: '/achievements', label: 'Achievements' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-40 bg-primary/80 backdrop-blur-md border-b border-glass">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
        
        {/* Spinning Pokeball Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/pokeball.svg" 
            alt="Pokeball Logo" 
            className="w-12 h-12 animate-spin-slow" 
          />
          <span className="font-display font-bold text-xl tracking-tight leading-none text-textMain hover:text-accent transition-colors">
            Arun Nehru
          </span>
        </Link>

        {/* Desktop Navbar with moving line */}
        <div className="hidden lg:flex flex-1 justify-center">
          <div className="flex gap-2 items-center bg-secondary/50 p-2 rounded-full border border-glass relative">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.path}
                  to={link.path}
                  className={`relative px-5 py-2 text-sm font-medium transition-colors z-10 ${isActive ? 'text-bg-primary' : 'text-textMuted hover:text-textMain'}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-textMain rounded-full z-[-1]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className={isActive ? 'text-primary border-transparent' : ''}>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Theme Switch Pill & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="relative w-14 h-8 rounded-full bg-secondary border border-glass flex items-center px-1 transition-all cursor-pointer"
            aria-label="Toggle Theme"
          >
            <motion.div 
              className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-[12px] shadow-sm"
              animate={{ x: theme === 'dark' ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {theme === 'dark' ? <FaMoon className="text-black" /> : <FaSun className="text-black" />}
            </motion.div>
          </button>

          <button 
            className="lg:hidden text-textMain hover:text-accent transition-colors z-50 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-primary z-40 flex flex-col justify-center items-center h-screen"
          >
            <div className="flex flex-col gap-8 items-center text-center">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-2xl font-display font-bold mb-4 text-textMain">Home</Link>
              {links.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-display font-medium transition-colors ${location.pathname === link.path ? 'text-accent' : 'text-textMuted hover:text-textMain'}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
