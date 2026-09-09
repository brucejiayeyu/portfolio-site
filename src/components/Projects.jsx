import { useEffect, useRef, useState } from 'react';
import SectionLabel from './SectionLabel.jsx';
import { propertyProject } from '../data.js';
import propertyImg from '../assets/property.jpg';

const pdfUrl = `${import.meta.env.BASE_URL}${propertyProject.pdf}`;

/**
 * Toggle `inView` once the section content scrolls into the viewport.
 * Uses IntersectionObserver when available, plus a scroll/resize fallback
 * so content is never left hidden if the observer is unavailable or misses.
 */
function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    let obs = null;
    const reveal = () => {
      if (!done) {
        done = true;
        setInView(true);
      }
    };
    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) reveal();
    };

    if ('IntersectionObserver' in window) {
      obs = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && reveal()),
        { rootMargin: '-40px', threshold: 0.1 }
      );
      obs.observe(el);
    }

    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check, { passive: true });
    check();

    return () => {
      obs?.disconnect();
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, [ref]);
  return inView;
}

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
    <path d="M12 3v12" />
    <path d="M6 11l6 6 6-6" />
    <path d="M4 21h16" />
  </svg>
);

export default function Projects() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef);

  return (
    <section id="projects" className="border-b border-line bg-alice/40">
      {/* Label container matches the max-w-3xl alignment of every other section */}
      <div className="mx-auto max-w-3xl px-7 pt-16">
        <SectionLabel>Projects</SectionLabel>
      </div>

      {/* Content spans wider to fill the horizontal space */}
      <div ref={sectionRef} className="mx-auto max-w-6xl px-7 pb-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          {/* Left — property image + overview */}
          <div className={inView ? 'animate-fade-up' : 'opacity-0'}>
            <div className="group aspect-[640/405] overflow-hidden rounded-xl border border-line shadow-sm">
              <img
                src={propertyImg}
                alt="7320 East Belleview Street — 21-unit townhouse community in South Scottsdale"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-navy">{propertyProject.name}</h3>
              <p className="mt-1.5 text-[0.85rem] font-semibold uppercase tracking-[0.16em] text-accent">
                {propertyProject.location}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-steel">{propertyProject.overview}</p>

              <a
                href={pdfUrl}
                download="Bruce-Yu-Pitch-2026.pdf"
                className="group mt-6 inline-flex items-center gap-2.5 border border-navy bg-navy px-6 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-sapphire hover:border-sapphire"
              >
                <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                  <DownloadIcon />
                </span>
                Download Full Analysis
              </a>
            </div>
          </div>

          {/* Right — analysis highlights */}
          <div className="flex flex-col gap-5">
            {propertyProject.highlights.map((h, i) => (
              <div
                key={h.title}
                className={inView ? 'animate-fade-up' : 'opacity-0'}
                style={{ animationDelay: `${0.15 + i * 0.1}s` }}
              >
                <article className="rounded-xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md sm:p-7">
                  <h4 className="mb-2.5 text-[0.85rem] font-semibold uppercase tracking-[0.16em] text-accent">
                    {h.title}
                  </h4>
                  <p className="text-base leading-relaxed text-steel">{h.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
