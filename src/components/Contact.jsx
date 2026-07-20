import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel.jsx';
import Reveal from './Reveal.jsx';
import { profile } from '../data.js';

export default function Contact() {
  return (
    <section id="contact" className="bg-navy text-white">
      <div className="mx-auto max-w-3xl px-7 py-20">
        <Reveal>
          <div className="mb-6 flex items-center gap-4 text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-sky">
            <span>Contact</span>
            <span className="h-px flex-1 bg-white/15" />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mb-4 max-w-xl text-3xl font-semibold leading-snug">
            Let's talk finance.
          </h2>
          <p className="mb-8 max-w-xl text-[0.98rem] text-ice/90">
            Open to conversations about internship opportunities in investment banking,
            commercial real estate, capital markets, and financial services. The fastest way to reach me is through LinkedIn.
          </p>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            href={profile.linkedin}
            target="_blank"
            rel="noopener"
            className="inline-block border border-white bg-white px-7 py-3 text-[0.85rem] uppercase tracking-[0.08em] text-navy transition-colors hover:bg-ice hover:border-ice"
          >
            Connect on LinkedIn
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
