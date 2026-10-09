import { useRef, useState, type FormEvent } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, Magnetic, Particles } from './fx';
import { SeriesMark } from './Poster';

export default function FinalCTA({ onReplay }: { onReplay: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollTo } = useSmoothScroll();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.2'] });
  const spacing = useTransform(scrollYProgress, [0, 1], ['0.6em', '0.02em']);
  const blur = useTransform(scrollYProgress, [0, 1], ['blur(16px)', 'blur(0px)']);
  const opacity = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  const ctas = [
    { label: "Let's Build", href: `mailto:${profile.email}?subject=${encodeURIComponent("Let's build something")}`, primary: true, cursor: 'play' },
    { label: 'LinkedIn', href: profile.links.linkedin, cursor: 'link' },
    { label: 'GitHub', href: profile.links.github, cursor: 'link' },
    { label: 'Email', href: `mailto:${profile.email}`, cursor: 'link' },
  ];

  return (
    <section id="contact" ref={ref} className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_60%,rgba(229,19,43,0.18),transparent_70%)]" />
      <Particles count={36} />

      <motion.p
        className="relative mb-6 text-[11px] font-bold uppercase tracking-[0.5em] text-crimson-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        The Next Episode
      </motion.p>
      <motion.h2
        className="relative font-display leading-[0.85] text-bone"
        style={{ fontSize: 'clamp(3.4rem, 13vw, 12rem)', letterSpacing: spacing, filter: blur, opacity }}
      >
        TO BE CONTINUED…
      </motion.h2>

      <motion.div
        className="relative mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
      >
        <p className="font-sans text-2xl font-semibold tracking-[0.2em] text-bone sm:text-3xl">{profile.displayName.toUpperCase()}</p>
        <p className="mt-2 text-xs font-semibold tracking-[0.4em] text-mist sm:text-sm">{profile.role.toUpperCase()}</p>
      </motion.div>

      <ContactForm />

      <motion.div
        className="relative mt-10 flex flex-wrap justify-center gap-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.08, delayChildren: 0.35 }}
      >
        {ctas.map((c) => (
          <motion.div key={c.label} variants={{ hidden: { opacity: 0, y: 20, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } } }}>
            <Magnetic>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                data-cursor={c.cursor}
                className={`flex min-h-12 items-center gap-2 rounded-full px-7 text-sm font-bold tracking-[0.12em] transition ${
                  c.primary ? 'bg-crimson text-white shadow-[0_0_50px_rgba(229,19,43,0.5)] hover:bg-crimson-2' : 'border border-white/25 text-bone hover:border-bone hover:bg-white/10'
                }`}
              >
                {c.primary && <span>▶</span>}
                {c.label.toUpperCase()}
                {!c.primary && <span className="text-mist">↗</span>}
              </a>
            </Magnetic>
          </motion.div>
        ))}
      </motion.div>

      <div className="relative mt-16 flex flex-wrap justify-center gap-6 text-xs font-semibold tracking-[0.24em] text-smoke">
        <button type="button" onClick={() => scrollTo(0, { offset: 0 })} className="hover:text-bone">
          ↺ WATCH AGAIN
        </button>
        <button type="button" onClick={onReplay} className="hover:text-bone">
          ▶ REPLAY OPENING
        </button>
      </div>

      <footer className="absolute inset-x-0 bottom-0 px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center">
        <div className="mb-2 text-base">
          <SeriesMark />
        </div>
        <p className="text-[11px] leading-relaxed text-smoke">
          © {new Date().getFullYear()} {profile.displayName}. A personal, streaming-inspired portfolio — not affiliated with any streaming service.
        </p>
      </footer>
    </section>
  );
}

const inputCls =
  'w-full rounded-lg border border-white/15 bg-black/30 px-4 py-3 text-sm text-bone placeholder:text-smoke/70 outline-none transition focus:border-crimson-2/70 focus:bg-black/50';

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = {};
    data.forEach((v, k) => {
      payload[k] = String(v);
    });

    setBusy(true);
    try {
      await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      setSent(true);
      form.reset();
    } catch {
      /* keep the form filled — the mailto fallback below still works */
    } finally {
      setBusy(false);
    }
  };

  if (sent) {
    return (
      <motion.div
        className="relative mt-10 w-full max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="glass rounded-2xl border border-[#46e3a8]/30 p-8 text-center">
          <motion.p animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 0.5 }} className="text-3xl">
            ✓
          </motion.p>
          <p className="mt-3 font-display text-3xl tracking-wide text-bone">The message is in the air.</p>
          <p className="mt-2 text-sm text-mist">
            I&apos;ll get back to you at your inbox soon. Want to send another?
            <button type="button" onClick={() => setSent(false)} className="ml-2 font-semibold text-crimson-2 underline underline-offset-4 hover:text-crimson">
              Compose again
            </button>
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form
      id="contact-form"
      onSubmit={onSubmit}
      className="relative mt-10 w-full max-w-xl text-left"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
    >
      <input type="hidden" name="_subject" value={`Portfolio message from ${profile.displayName} site`} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.32em] text-smoke">Pitch me — write a line</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <input required name="name" type="text" placeholder="Your name" aria-label="Your name" className={inputCls} />
        <input required name="email" type="email" placeholder="you@email.com" aria-label="Your email" className={inputCls} />
      </div>
      <textarea
        required
        name="message"
        rows={4}
        placeholder="What are we building? Internships, projects, collabs — the good stuff."
        aria-label="Message"
        className={`${inputCls} mt-3 resize-none`}
      />
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <Magnetic>
          <button
            type="submit"
            disabled={busy}
            data-cursor="play"
            className="flex min-h-12 items-center gap-2 rounded-full bg-crimson px-7 text-sm font-bold tracking-[0.12em] text-white shadow-[0_0_50px_rgba(229,19,43,0.5)] transition hover:bg-crimson-2 disabled:opacity-60"
          >
            {busy ? 'SENDING…' : 'SEND MESSAGE'}
            <span>→</span>
          </button>
        </Magnetic>
        <p className="text-xs text-smoke">
          Sent straight to{' '}
          <a href={`mailto:${profile.email}`} className="text-mist underline underline-offset-4 hover:text-bone">
            {profile.email}
          </a>
        </p>
      </div>
    </motion.form>
  );
}
