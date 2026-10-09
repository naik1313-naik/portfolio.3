import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 * No stock imagery: every card is art-directed from its palette.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
    </div>
  );
}

/** Motif illustrations for each Original, built from the project's own architecture. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  const arc = (cx: number, cy: number, r: number, a0: number, a1: number) => {
    const p = (ang: number) => {
      const t = ((ang - 90) * Math.PI) / 180;
      return [cx + r * Math.cos(t), cy + r * Math.sin(t)];
    };
    const [x0, y0] = p(a0);
    const [x1, y1] = p(a1);
    return `M ${x0.toFixed(1)} ${y0.toFixed(1)} A ${r} ${r} 0 0 1 ${x1.toFixed(1)} ${y1.toFixed(1)}`;
  };
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="290" cy="120" r="130" fill={`url(#g-${project.id})`} />
        {project.motif === 'orbit' && (
          <g fill="none" stroke={a}>
            <circle cx="200" cy="150" r="26" strokeWidth="2" strokeOpacity="0.9" />
            <circle cx="200" cy="150" r="52" strokeWidth="1" strokeOpacity="0.5" />
            <circle cx="200" cy="150" r="80" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="6 10" />
            <path d="M200 150 L232 122" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.7" />
            <circle cx="248" cy="118" r="6" fill={a} fillOpacity="0.9" stroke="none" />
            <circle cx="142" cy="178" r="4" fill={a} fillOpacity="0.7" stroke="none" />
            <circle cx="262" cy="196" r="3" fill={a} fillOpacity="0.5" stroke="none" />
            {[0, 120, 240].map((deg) => (
              <path key={deg} d={arc(200, 150, 100, deg, deg + 70)} strokeWidth="2" strokeOpacity="0.28" />
            ))}
          </g>
        )}
        {project.motif === 'ink' && (
          <g stroke={a}>
            {[0, 1, 2, 3].map((i) => (
              <path
                key={i}
                d={`M${150 + i * 24} 70 c ${18 - i * 2} ${-26 + i * 6} ${40 - i * 4} ${26 - i * 8} ${8 + i * 6} ${44} c ${-30 + i * 6} ${-16 + i * 4} ${-14 + i * 4} ${34 - i * 8} ${34 + i * 2} ${56}`}
                fill="none"
                strokeWidth={2.6 - i * 0.5}
                strokeLinecap="round"
                strokeOpacity={0.9 - i * 0.18}
              />
            ))}
            <path d="M150 196 h108" strokeWidth="2" strokeOpacity="0.6" strokeLinecap="round" />
            <path d="M258 196 c6 -8 6 -14 2 -22" fill="none" strokeWidth="2" strokeOpacity="0.4" />
          </g>
        )}
        {project.motif === 'chart' && (
          <g fill="none" stroke={a}>
            <circle cx="210" cy="160" r="74" strokeWidth="1.4" strokeOpacity="0.35" />
            <circle cx="210" cy="160" r="48" strokeWidth="1.4" strokeOpacity="0.55" />
            <circle cx="210" cy="160" r="22" strokeWidth="2" strokeOpacity="0.9" />
            <path d="M168 124 A74 74 0 0 1 252 196" strokeWidth="2.4" strokeOpacity="0.85" strokeLinecap="round" />
            <path d="M196 100 A22 22 0 0 1 232 170" strokeWidth="2.4" strokeOpacity="0.9" strokeLinecap="round" fill={a} fillOpacity="0.18" />
            <circle cx="252" cy="196" r="4" fill={a} stroke="none" />
            <path d="M140 224 h140 M258 224 v-18" strokeWidth="1.4" strokeOpacity="0.4" strokeDasharray="3 5" />
          </g>
        )}
        {project.motif === 'token' && (
          <g fill="none" stroke={a}>
            <rect x="176" y="78" width="84" height="126" rx="10" strokeWidth="2" strokeOpacity="0.9" />
            <rect x="190" y="94" width="56" height="14" rx="4" fill={a} fillOpacity="0.35" />
            <rect x="190" y="118" width="42" height="8" rx="4" strokeWidth="1.4" strokeOpacity="0.5" />
            <rect x="190" y="134" width="54" height="8" rx="4" strokeWidth="1.4" strokeOpacity="0.3" />
            <path d="M150 141 l22 12 l22 -24" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" />
            <circle cx="150" cy="176" r="18" strokeWidth="1.6" strokeOpacity="0.45" />
            <circle cx="150" cy="176" r="7" fill={a} fillOpacity="0.7" stroke="none" />
            <path d="M176 214 a26 26 0 0 1 44 -8" strokeWidth="1.4" strokeOpacity="0.3" />
          </g>
        )}
        {project.motif === 'energy' && (
          <g fill="none" stroke={a}>
            <path d="M188 56 L146 142 h34 L168 214 L246 116 h-38 Z" strokeWidth="2.4" strokeLinejoin="round" strokeOpacity="0.95" />
            <path d="M246 214 h-92" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round" />
            {[0, 1, 2, 3].map((i) => (
              <path key={i} d={`M120 ${184 + i * 8} h${26 + i * 6}`} strokeWidth="2" strokeOpacity={0.25 + i * 0.15} strokeLinecap="round" />
            ))}
          </g>
        )}
        {project.motif === 'store' && (
          <g fill="none" stroke={a}>
            <rect x="176" y="150" width="102" height="70" rx="6" strokeWidth="2" strokeOpacity="0.9" />
            <path d="M176 226 L286 226" strokeWidth="2" strokeOpacity="0.9" strokeLinecap="round" />
            <path d="M188 150 v-12 h78 v12" strokeWidth="2" strokeOpacity="0.8" />
            <path d="M176 164 h102" strokeWidth="1.4" strokeOpacity="0.4" strokeDasharray="6 6" />
            <path d="M156 118 l26 -34 M182 84 l26 34" strokeWidth="2.6" strokeLinecap="round" strokeOpacity="0.85" />
            <circle cx="182" cy="118" r="5" fill={a} stroke="none" />
            <circle cx="208" cy="84" r="5" fill={a} stroke="none" />
            <circle cx="227" cy="192" r="8" fillOpacity="0.3" />
            <path d="M196 222 h64" strokeWidth="1.4" strokeOpacity="0.35" />
          </g>
        )}
        {project.motif === 'roles' && (
          <g fill="none" stroke={a}>
            {[0, 1, 2].map((r) =>
              [0, 1, 2].map((c) => (
                <circle
                  key={`${r}-${c}`}
                  cx={172 + c * 34}
                  cy={96 + r * 30}
                  r={10}
                  strokeWidth="1.6"
                  strokeOpacity={0.3 + ((r + c) % 3) * 0.26}
                  fill={r === c ? a : 'none'}
                  fillOpacity={r === c ? 0.28 : 'none'}
                />
              )),
            )}
            <circle cx="262" cy="96" r="16" fillOpacity="0.2" />
            <circle cx="262" cy="156" r="16" fillOpacity="0.28" />
            <circle cx="262" cy="216" r="16" fillOpacity="0.2" />
            <path d="M172 216 h90" strokeWidth="1.4" strokeOpacity="0.5" />
            <path d="M172 232 h90" strokeWidth="1.4" strokeOpacity="0.3" />
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}

/** Small fictional platform mark used in the nav and on cards. */
export function SeriesMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 24 32" className="h-[1.1em] w-auto" aria-hidden>
        <path d="M18 6c-1.8-1.8-4-2.6-6.5-2.6C7.6 3.4 5 5.6 5 9c0 7.6 14 4.6 14 11.6 0 3-2.8 5-6.4 5-3 0-5.4-1.2-7.2-3" fill="none" stroke="#e5132b" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <span className="font-sans text-[0.62em] font-bold tracking-[0.36em] text-mist">SERIES</span>
    </span>
  );
}
