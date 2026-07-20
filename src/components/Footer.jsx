import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChevronUp = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M6 15l6-6 6 6" />
  </svg>
);

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="bg-navy-dark text-white/60">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-7 py-8 text-[0.8rem] tracking-wide">
        <span>© 2026 Bruce Yu. All rights reserved.</span>
        <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
          Back to top <ChevronUp className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Floating back-to-top, appears after scrolling */}
      <AnimatePresence>
        {showTop && (
          <motion.a
            href="#top"
            aria-label="Back to top"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 right-6 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-colors hover:bg-royal"
          >
            <ChevronUp />
          </motion.a>
        )}
      </AnimatePresence>
    </footer>
  );
}
