import SectionLabel from './SectionLabel.jsx';
import Reveal from './Reveal.jsx';
import { education } from '../data.js';

export default function Education() {
  return (
    <section id="education" className="border-b border-line">
      <div className="mx-auto max-w-3xl px-7 py-16">
        <SectionLabel>Education</SectionLabel>
        <Reveal>
          <div className="rounded-lg border border-line bg-alice/50 p-6">
            <p className="text-[1.02rem] font-semibold text-navy">{education.degree}</p>
            <p className="text-[0.95rem]">{education.school}</p>
            <p className="mt-1.5 text-[0.9rem] text-steel">{education.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
