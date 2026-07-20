import SectionLabel from './SectionLabel.jsx';
import Reveal from './Reveal.jsx';
import { about } from '../data.js';

export default function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto max-w-3xl px-7 py-16">
        <SectionLabel>About</SectionLabel>
        {about.map((p, i) => (
          <Reveal key={i} delay={0.08 * i}>
            <p className={`max-w-2xl ${i > 0 ? 'mt-4' : ''}`}>{p}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
