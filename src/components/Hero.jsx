import { motion } from 'framer-motion';
import { profile } from '../data.js';
import heroImg from '../assets/hero-skyscrapers.jpg';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <header id="top" className="border-b border-line">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-3xl px-7 pt-24 pb-16"
      >
        <motion.p
          variants={item}
          className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-accent"
        >
          Real Estate & Finance
        </motion.p>

        <motion.h1
          variants={item}
          className="mb-4 text-5xl font-bold leading-[1.12] tracking-tight text-navy sm:text-6xl"
        >
          {profile.name}
        </motion.h1>

        {/* Accent rule — draws itself across */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
          className="mb-5 h-[3px] w-16 origin-left bg-gradient-to-r from-navy via-accent to-sky"
        />

        <motion.p variants={item} className="mb-6 max-w-xl text-lg text-steel">
          {profile.headline}
        </motion.p>

        <motion.p variants={item} className="mb-9 text-sm tracking-wide text-steel">
          {profile.location}
          <span className="mx-3 text-line">·</span>
          {profile.school}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            href={profile.linkedin}
            target="_blank"
            rel="noopener"
            className="inline-block border border-navy bg-navy px-7 py-3 text-[0.85rem] uppercase tracking-[0.08em] text-white transition-colors hover:bg-sapphire hover:border-sapphire"
          >
            LinkedIn
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="inline-block border border-navy px-7 py-3 text-[0.85rem] uppercase tracking-[0.08em] text-navy transition-colors hover:bg-alice"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Hero image — full-bleed skyscraper shot */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-64 w-full overflow-hidden sm:h-80"
      >
        <img
          src={heroImg}
          alt="Looking up at modern skyscrapers"
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
      </motion.div>
    </header>
  );
}
