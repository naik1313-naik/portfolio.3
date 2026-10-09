# SUMEET — THE SERIES

A cinematic, streaming-inspired portfolio for **Sumeet Naik**: engineering student at the seam of software, data and AI.
Every section is an episode, every project is an Original, and the whole site plays like a series.

> A personal portfolio with a fictional streaming-platform look. It is not affiliated with Netflix or any other streaming service and uses none of their logos.

The site is a fresh build (this repo) that merges content from Sumeet's two previous portfolios:
the blueprint-style portfolio (`portfolio`) and the creative studio site (`portfolio.2`).

## Run it locally

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

Production build:

```bash
npm run build
npm run preview
```

The static site is written to `dist/` and can be deployed as-is to Vercel, Netlify, GitHub Pages or any static host.

## Updating the content

**All content lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).** Every component reads from it.

| To change… | Edit |
| --- | --- |
| Name, intro, email, LinkedIn, GitHub | `profile` |
| A project, or a new one | `projects` (add an object; it appears in Originals, the overlay, and the counts) |
| Achievements / certifications | `achievements`, `certifications` |
| Skills and their "where it's used" notes | `skillCategories`, `skillEvidence` |
| Craft accordion (five disciplines) | `capabilities` |
| Seasons and episodes (My Journey) | `seasons` |
| Top 10 row | `topPicks` |
| GitHub repo archive | see below |
| ▶ Play Intro highlight reel | `introSlides` |
| Profile order (Recruiter / Developer / Creative / Sumeet) | `viewerProfiles` |
| Opening studio card text | `profile.originalLabel` |

**GitHub archive:** `src/data/repos.ts` holds the 13 public repos (name, summary, language, topics, demo links). Re-run the GitHub API sync there to refresh.

**Photo:** replace `public/assets/portrait.jpg` (1100×1100 square JPEG, subject centred). It is used for the hero (desktop shows a Three.js portrait orb, mobile shows the flat cutout), the profile avatars, About and the opening titles.

## What's inside

```
src/
  data/portfolio.ts        ← single source of truth (profile, projects, seasons, skills, …)
  data/repos.ts            ← GitHub repository archive
  App.tsx                  ← stages: opening → profile select → home; overlays
  components/
    OpeningSequence        ← black → studio card → SUMEET → THE SERIES → portrait → ▶ PLAY
    ProfileSelector        ← "Who's watching?" (changes section order only)
    Navbar                 ← hide-on-scroll nav, profile switcher, mobile menu
    Hero                   ← billboard: desktop 3D portrait orb, particles, light streaks, floating chips
    Orb                    ← React Three Fiber portrait orb (points cloud, orbit rings, parallax)
    PlayIntro              ← ▶ Play Intro: zoom into portrait → highlight reel (pause, ← →, tap zones)
    ContinueWatching       ← cards with real "watched" progress bars
    About                  ← The Pilot
    Craft                  ← The five disciplines, accordion
    Seasons / EpisodeCard  ← My Journey as seasons and episodes
    Originals / ProjectCard← pinned horizontal sequence on desktop, swipe rail on touch
    ProjectModal           ← full-screen project overlay with a shared-element transition
    Repos                  ← The Bench: GitHub archive rail with Live / GitHub links
    TopPicks               ← Top 10-style row
    Skills                 ← skill genres; each card shows where the skill appears
    Achievements           ← award-poster cards + certification rail (links to credentials)
    FinalCTA               ← TO BE CONTINUED… + working contact form (FormSubmit) + links
    CustomCursor, fx.tsx   ← cursor states, magnetic buttons, 3D tilt, text reveals, particles
  hooks/                   ← Lenis smooth scroll + scroll lock, media queries, watch progress
```

**Stack:** React 18, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion 11, Lenis, Three.js + React Three Fiber.

## Accessibility and performance

- `prefers-reduced-motion` is respected: smooth scroll, the custom cursor, tilt, particles, grain and the pinned horizontal scroll turn off, and the opening jumps straight to its final frame. The 3D orb also stills itself.
- Hover effects only run on devices with a precise pointer. Touch devices get tap interactions and native swipe rails.
- The custom cursor appears only with a mouse or trackpad.
- Overlays close with Esc, and the highlight reel supports Space and the ← → keys.
- The 3D orb is desktop-only; mobile gets the flat portrait. Overlays are code-split, and particles pause when they're off screen.

## Keyboard shortcuts

- **Opening:** Enter or Esc skips it.
- **Play Intro:** Space pauses, ← and → change slides, Esc closes.
- **Project overlay:** Esc closes.