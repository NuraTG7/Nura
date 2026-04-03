import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const SocialSidebar = () => {
  return (
    <div className="hidden md:flex flex-col items-center fixed left-0 top-0 h-full w-16 border-r border-glass bg-primary z-30 justify-center">
      <div className="flex flex-col gap-6 text-textMuted">
        <a href="https://www.linkedin.com/in/arun-nehru-nura14/" target="_blank" rel="noreferrer" className="hover:text-accent hover:scale-110 transition-all p-2">
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com/NuraTG7" target="_blank" rel="noreferrer" className="hover:text-accent hover:scale-110 transition-all p-2">
          <FaGithub size={20} />
        </a>
        <a href="https://leetcode.com/u/ArunNehru404/" target="_blank" rel="noreferrer" className="hover:text-accent hover:scale-110 transition-all p-2">
          <SiLeetcode size={20} />
        </a>
        <a href="https://www.instagram.com/nura_404/" target="_blank" rel="noreferrer" className="hover:text-accent hover:scale-110 transition-all p-2">
          <FaInstagram size={20} />
        </a>
        <a href="https://www.youtube.com/@NuraTG-vw7vn" target="_blank" rel="noreferrer" className="hover:text-accent hover:scale-110 transition-all p-2">
          <FaYoutube size={20} />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;
