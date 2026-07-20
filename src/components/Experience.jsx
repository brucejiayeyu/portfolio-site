import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel.jsx';
import Reveal from './Reveal.jsx';
import { experience } from '../data.js';

function Entry({ e }) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="border-l-2 border-transparent py-6 pl-5 transition-colors hover:border-accent"
    >
      <div className="mb-1 flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="text-[1.02rem] font-semibold text-navy">{e.title}</h3>
        <span className="whitespace-nowrap text-[0.8rem] tracking-wide text-steel">{e.date}</span>
      </div>
      <p className="mb-2 text-[0.92rem]">{e.org}</p>
      <ul className="max-w-2xl space-y-1.5 text-[0.92rem] text-steel">
        {e.bullets.map((b, i) => (
          <li key={i} className="relative pl-5">
            <span className="absolute left-0 text-accent">—</span>
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line">
      <div className="mx-auto max-w-3xl px-7 py-16">
        <SectionLabel>Experience</SectionLabel>
        {experience.map((e, i) => (
          <Reveal key={e.title} delay={0.06 * i}>
            <Entry e={e} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
