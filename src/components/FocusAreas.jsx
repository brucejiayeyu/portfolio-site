import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel.jsx';
import Reveal from './Reveal.jsx';
import { focusAreas } from '../data.js';

/** New in v2: focus-area chips with a subtle staggered pop-in. */
export default function FocusAreas() {
  return (
    <section id="focus" className="border-b border-line bg-alice/60">
      <div className="mx-auto max-w-3xl px-7 py-16">
        <SectionLabel>Focus Areas</SectionLabel>
        <div className="flex flex-wrap gap-3">
          {focusAreas.map((area, i) => (
            <motion.span
              key={area}
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: 0.05 * i, ease: 'backOut' }}
              whileHover={{ y: -3, borderColor: 'var(--color-accent)' }}
              className="cursor-default rounded-full border border-ice bg-white px-5 py-2 text-[0.85rem] font-medium text-navy shadow-sm"
            >
              {area}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
