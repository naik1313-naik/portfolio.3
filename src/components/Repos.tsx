import { useRef } from 'react';
import { motion } from 'framer-motion';
import { repos } from '../data/repos';
import { profile } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';
import { PosterBackdrop } from './Poster';
import { RailButtons } from './Rail';

const HUES = ['#4cc9ff', '#46e3a8', '#ffb547', '#b98bff', '#ff8a5c', '#ff3d5a'];

export default function Repos() {
  const rail = useRef<HTMLDivElement>(null);
  const active = repos.filter((r) => !r.archived);

  return (
    <>
      <SectionHeading
        kicker="The open bench"
        title="The Bench"
        aside={
          <a href={profile.links.github} target="_blank" rel="noreferrer" data-cursor="link" className="group text-sm text-mist hover:text-bone">
            {active.length} public repos · github.com/naik1313-naik{' '}
            <span className="inline-block transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
          </a>
        }
      />

      <div className="group/rail relative">
        <div ref={rail} className="rail gutter flex snap-x snap-mandatory gap-3 overflow-x-auto py-8 sm:gap-4">
          {repos.map((repo, i) => {
            const hue = HUES[i % HUES.length];
            return (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '0px -2% 0px 0px' }}
                transition={{ duration: 0.7, delay: Math.min(i, 6) * 0.05, ease: EASE }}
                className="group relative aspect-[4/5] w-[68vw] shrink-0 snap-start overflow-hidden rounded-2xl text-left ring-1 ring-white/10 transition duration-500 hover:ring-white/30 hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.8)] sm:w-[42vw] md:w-[30vw] lg:w-[22vw] xl:w-[19vw]"
              >
                <div className="absolute inset-0 transition-transform duration-[1.4s] ease-[var(--ease-cine)] group-hover:scale-[1.07]">
                  <PosterBackdrop palette={{ from: '#0a0c12', via: hue, to: '#06070a', accent: hue }}>
                    <div className="absolute inset-0 flex flex-col justify-end p-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-bone/70">
                        {i + 1}. {repo.lang}
                      </span>
                    </div>
                  </PosterBackdrop>
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 pt-16">
                  <p className="font-display text-3xl leading-[0.9] tracking-wide text-bone">{repo.title}</p>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-bone/75">{repo.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {repo.topics.slice(0, 3).map((t) => (
                      <span key={t} className="rounded-full bg-black/40 px-2 py-0.5 text-[10px] font-medium text-bone/85 backdrop-blur">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="flex min-h-9 items-center gap-1.5 rounded-md bg-bone px-3.5 text-xs font-bold text-ink transition group-hover:bg-white">
                      GitHub ↗
                    </span>
                    {repo.demo && (
                      <span className="glass flex min-h-9 items-center rounded-md px-3.5 text-xs font-semibold text-bone">▶ Live</span>
                    )}
                  </div>
                  <p className="mt-3 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-smoke">
                    <span>{repo.updated}</span>
                    {repo.archived && <span className="text-mist">archived</span>}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
        <RailButtons rail={rail} />
      </div>
    </>
  );
}