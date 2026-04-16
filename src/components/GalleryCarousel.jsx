import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const defaultImages = [
  '/Nura/gallery/gallery (1).jpg',
  '/Nura/gallery/gallery (2).jpg',
  '/Nura/gallery/gallery (3).jpg',
  '/Nura/gallery/gallery (4).JPG',
  '/Nura/gallery/gallery (5).jpg',
  '/Nura/gallery/gallery (6).jpg',
  '/Nura/gallery/gallery (7).jpg',
  '/Nura/gallery/gallery (8).jpg',
  '/Nura/gallery/gallery (9).jpg',
  '/Nura/gallery/gallery (10).jpg',
  '/Nura/gallery/gallery (11).jpg',
  '/Nura/gallery/gallery (12).jpg',
  '/Nura/gallery/gallery (13).jpg',
  '/Nura/gallery/gallery (14).jpg',
  '/Nura/gallery/gallery (15).png',
  '/Nura/gallery/gallery (16).png',
  '/Nura/gallery/gallery (17).png',
  '/Nura/gallery/gallery (18).jpeg',
];

const GalleryCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const throttleRef = useRef(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % defaultImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % defaultImages.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + defaultImages.length) % defaultImages.length);

  const handleWheel = (e) => {
    if (throttleRef.current) return;
    if (Math.abs(e.deltaX) > 20 || Math.abs(e.deltaY) > 50) {
      throttleRef.current = true;
      if (e.deltaX > 0 || e.deltaY > 0) handleNext();
      else handlePrev();
      setTimeout(() => { throttleRef.current = false; }, 600);
    }
  };

  const offsets = isMobile ? [0] : [-1, 0, 1, 2];
  
  // Calculate width percentage for the slider
  const progressPercentage = ((activeIndex) / (defaultImages.length - 1)) * 100;

  return (
    <div className="w-full flex flex-col items-center justify-center py-16 px-4 overflow-hidden relative border-t border-glass bg-primary">
      <h2 className="text-4xl font-display font-bold uppercase tracking-widest text-textMain mb-12 text-center" data-aos="fade-up">
        Highlight <span className="text-accentSecondary">Gallery</span>
      </h2>

      <motion.div 
        className="flex gap-4 lg:gap-8 items-center justify-center w-full min-h-[400px] lg:min-h-[500px] cursor-grab active:cursor-grabbing touch-pan-y"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.8}
        onWheel={handleWheel}
        onDragEnd={(e, { offset }) => {
          if (offset.x < -20) {
            handleNext();
          } else if (offset.x > 20) {
            handlePrev();
          }
        }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {offsets.map((offset) => {
            const index = (activeIndex + offset + defaultImages.length) % defaultImages.length;
            const src = defaultImages[index];
            const isCenterKey = offset === 0 || offset === 1;
            const isCenter = isMobile ? true : isCenterKey;
            
            // Interaction logic
            const onClickFn = () => {
              if (offset === -1) handlePrev();
              if (offset === 2) handleNext();
            };

            return (
              <motion.div
                layout
                key={src}
                onClick={onClickFn}
                initial={{ opacity: 0, scale: 0.5, x: offset > 0 ? 50 : -50 }}
                animate={{ 
                  opacity: 1, 
                  scale: isCenter ? 1 : 0.7, 
                  x: 0 
                }}
                exit={{ opacity: 0, scale: 0.5, x: offset > 0 ? -50 : 50 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={`shrink-0 overflow-hidden rounded-2xl ${offset === -1 || offset === 2 ? 'cursor-pointer' : 'cursor-default'}
                  ${isCenter ? 'w-[90vw] md:w-[450px] lg:w-[550px] h-[300px] lg:h-[350px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] z-10 border border-glass' 
                  : 'w-[200px] lg:w-[280px] h-[150px] lg:h-[200px] opacity-60 hover:opacity-100 z-0'}
                `}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden bg-secondary border border-glass">
                  <img src={src} className="w-full h-full object-cover rounded-xl" alt="Gallery frame" />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Progress Slider at the bottom */}
      <div className="w-full max-w-md mx-auto mt-8 h-2 bg-glass rounded-full overflow-hidden shrink-0">
        <div 
          className="h-full bg-gradient-to-r from-accent to-accentSecondary transition-all duration-500 ease-out"
          style={{ width: `${Math.max(5, progressPercentage)}%` }} /* Default min-width 5% to always show some progress */
        ></div>
      </div>
      
    </div>
  );
};

export default GalleryCarousel;
