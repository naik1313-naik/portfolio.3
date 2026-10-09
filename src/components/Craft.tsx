import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { capabilities } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';

export default function Craft() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <SectionHeading
        kicker="Five disciplines"
        title="My Craft"
        aside={<p className="max-w-xs text-sm text-mist">Every capability is a stack of technique and taste. Open a line to inspect what runs underneath.</p>}
      />

      <div className="gutter">
        <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
          {capabilities.map((cap, i) => {
            const isOpen = open === i;
            return (
              <div
                key={cap.index}
                className={`border-b border-white/10 transition-colors duration-500 last:border-b-0 ${isOpen ? 'bg-white/[0.05]' : 'hover:bg-white/[0.02]'}`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-center gap-5 px-4 py-6 text-left sm:px-7 md:gap-8 md:py-7"
                >
                  <span className={`font-sans text-xs font-bold tracking-[0.24em] transition-colors duration-300 ${isOpen ? 'text-crimson-2' : 'text-smoke'}`}>
                    {cap.index}
                  </span>
                  <span
                    className={`flex-1 font-display text-2xl tracking-wide transition-colors duration-300 group-hover:text-crimson-2 sm:text-3xl md:text-4xl ${
                      isOpen ? 'text-bone' : 'text-bone/90'
                    }`}
                  >
                    {cap.name}
                  </span>
                  <motion.span
                    aria-hidden
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-lg transition-colors duration-300 ${
                      isOpen ? 'border-crimson-2 text-crimson-2' : 'border-white/20 text-mist group-hover:border-crimson-2/60 group-hover:text-bone'
                    }`}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-6 pr-4 sm:pl-[4.4rem] sm:pr-24">
                        <p className="max-w-2xl text-sm leading-relaxed text-bone/75 md:text-base">{cap.description}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {cap.chips.map((chip) => (
                            <span key={chip} className="glass rounded-full px-3 py-1.5 text-xs font-medium text-bone">
                              {chip}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-[11px] uppercase tracking-[0.28em] text-smoke">— the listenable stack, no filler</p>
      </div>
    </>
  );
}