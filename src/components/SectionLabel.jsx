import Reveal from './Reveal.jsx';

export default function SectionLabel({ children }) {
  return (
    <Reveal>
      <div className="mb-8 flex items-center gap-4 text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-accent">
        <span>{children}</span>
        <span className="h-px flex-1 bg-line" />
      </div>
    </Reveal>
  );
}
