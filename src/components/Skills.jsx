import SectionLabel from './SectionLabel.jsx';
import Reveal from './Reveal.jsx';
import { skills } from '../data.js';

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line">
      <div className="mx-auto max-w-3xl px-7 py-16">
        <SectionLabel>Skills</SectionLabel>
        <div className="space-y-6">
          {skills.map((g, i) => (
            <Reveal key={g.label} delay={0.06 * i}>
              <p className="mb-3 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-navy">{g.label}</p>
              <ul className="flex flex-wrap gap-2.5">
                {g.items.map((s) => (
                  <li key={s} className="rounded-full border border-line bg-alice/50 px-4 py-1.5 text-[0.88rem] text-navy">
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
