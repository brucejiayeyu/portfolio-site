import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, profile } from '../data.js';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -58, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="sticky top-0 z-20 border-b border-line bg-white/90 backdrop-blur"
    >
      <div className="mx-auto flex h-[58px] max-w-3xl items-center justify-between px-7">
        <a href="#top" className="text-[0.82rem] font-bold tracking-[0.14em] text-navy">
          {profile.name.toUpperCase()}
        </a>

        {/* Desktop links */}
        <ul className="hidden gap-7 sm:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-[0.82rem] uppercase tracking-[0.06em] text-steel transition-colors hover:text-navy"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center text-navy sm:hidden"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-navy transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 bg-navy transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-navy transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-line bg-white sm:hidden"
          >
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-7 py-3 text-[0.85rem] uppercase tracking-[0.06em] text-steel transition-colors hover:bg-alice hover:text-navy"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
