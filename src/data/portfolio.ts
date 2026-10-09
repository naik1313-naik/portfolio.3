/**
 * Central portfolio data — every fact on the site comes from this file.
 * Content is merged from Sumeet's two previous portfolios:
 *   • portfolio.2 (creative studio site) — concepts, craft, credentials, repos
 *   • portfolio (blueprint site) — real projects, education timeline, stats
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Sumeet Naik',
  displayName: 'Sumeet Naik',
  firstName: 'SUMEET',
  seriesTag: 'THE SERIES',
  originalLabel: 'A NAIK ORIGINAL',
  role: 'Engineering student · AI & software',
  tagline: ['Engineering student', 'AI & software', 'Creative development'],
  intro:
    'An engineering student working the seam where software, data and AI meet — building fast, expressive interfaces and 3D experiments along the way.',
  location: 'Bengaluru, India',
  email: 'sumeetnaik2005@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/sumeet-naik-engeneering-student',
    github: 'https://github.com/naik1313-naik',
  },
  portrait: {
    src: '/assets/portrait.jpg',
    srcSet: '/assets/portrait.jpg 1100w',
    alt: 'Portrait of Sumeet Naik',
  },
  interests: ['Software & data', 'AI / machine learning', 'Creative development', '3D on the web'],
};

export const education = [
  {
    school: 'Presidency University',
    place: 'Bengaluru',
    degree: 'Bachelor of Technology — Computer Science & Engineering',
    period: '2024 – Present',
    score: 'IoT track',
  },
  {
    school: "Alva's College of Education · DAV Schools",
    place: 'India',
    degree: 'Pre-University — Science, Mathematics',
    period: 'Prior to 2024',
    score: 'PCM',
  },
];

export const experience = [
  {
    company: 'Pratinik Infotech',
    role: 'Artificial Intelligence Intern',
    place: 'Bengaluru, India',
    period: '2026 — completed',
    points: [
      'Completed the AI internship: machine learning and applied AI across datasets, models and products.',
      'Turned the bench into a live laboratory — shipping model-backed work end to end.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Motif = 'orbit' | 'ink' | 'chart' | 'token' | 'energy' | 'store' | 'roles';

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  demo?: string;
  palette: Palette;
  motif: Motif;
};

export const projects: Project[] = [
  {
    id: 'meridian',
    title: 'Meridian',
    year: '2026',
    genre: 'WebGL • Web Audio • R3F',
    logline: 'A music player rebuilt as a 3D instrument — spectral waveforms rendered live on a reactive sphere you can orbit, turn and fold.',
    stack: ['Three.js', 'Web Audio', 'WebGL shaders', 'R3F'],
    build: [
      'Rendered the track as a physical object — the spectrum becomes a wireframe sphere whose vertices breathe with the audio.',
      'Built the React Three Fiber scene with a vertex-displaced sphere and a Web Audio analyser driving the vertex shader.',
      'Designed custom billboards for transport so orbit, pinch and tilt replace the classic scrub bar.',
    ],
    features: ['Audio-reactive vertex shader', 'Spatial transport controls', 'Immersive track gallery', 'Reduced-motion fallback'],
    metrics: [
      { value: '60', label: 'FPS real-time spectrum' },
      { value: '4', label: 'spatial gestures' },
      { value: '0', label: 'plugins required' },
    ],
    palette: { from: '#1a0d05', via: '#7a2a0c', to: '#0a0708', accent: '#ff4b1f' },
    motif: 'orbit',
  },
  {
    id: 'inke-stein',
    title: 'Ink & Steel',
    year: '2025',
    genre: 'Editorial • GSAP • Motion',
    logline: 'A founding narrative for an industrial-design studio — heavy Syne typography, scroll-scrubbed ink textures and a horizontal case archive.',
    stack: ['GSAP', 'ScrollTrigger', 'Editorial web', 'Custom cursor'],
    build: [
      'Treated the page like a casting — real ink scans, feathered edges and type that moves like a press stamping onto the page.',
      'Built ScrollTrigger-scrubbed texture overlays and a pinned horizontal archive of commissions.',
      'Kept a film grain visible on every viewport so the page reads like printed matter.',
    ],
    features: ['Pinned horizontal archive', 'Ink texture reveals', 'Split-type headline choreography', 'Editorial detail pages'],
    metrics: [
      { value: '100%', label: 'scroll-scrubbed textures' },
      { value: '1', label: 'pinned horizontal archive' },
      { value: '0', label: 'stock templates used' },
    ],
    palette: { from: '#0d0d12', via: '#3a3f52', to: '#08080b', accent: '#7c9cff' },
    motif: 'ink',
  },
  {
    id: 'perigee',
    title: 'Perigee',
    year: '2024',
    genre: 'Data viz • WebGL • Instancing',
    logline: 'A live observatory for orbital debris — tens of thousands of tracked objects rendered as a breathing constellation with a scrubbable timeline.',
    stack: ['WebGL', 'Instanced geometry', 'Data viz', 'R3F'],
    build: [
      'Turned 40,000 data points into a constellation you can fly through — the density of the ring the only word needed.',
      'Instanced sphere points in a single draw call with a scroll-driven camera that dives through the belt.',
      'Scrubbed a 24-month timeline by scroll position with DPR-aware detail budgets.',
    ],
    features: ['Instanced rendering', 'Scroll-driven camera flight', 'Scroll-scrubbed timeline', 'DPR-aware detail'],
    metrics: [
      { value: '40k', label: 'tracked objects' },
      { value: '1', label: 'draw call' },
      { value: '24', label: 'month timeline' },
      { value: '60', label: 'FPS camera flight' },
    ],
    palette: { from: '#04121f', via: '#123a63', to: '#05080d', accent: '#4cc9ff' },
    motif: 'chart',
  },
  {
    id: 'vanta',
    title: 'Vanta',
    year: '2024',
    genre: 'Design systems • TypeScript • R3F',
    logline: 'A token-first component engine with a live 3D theme inspector — swap palette, radius and tone, and watch every surface re-materialise in real time.',
    stack: ['React', 'TypeScript', 'Design tokens', 'R3F'],
    build: [
      'Built a React + TypeScript token pipeline with typed exports and zero-runtime CSS output.',
      'Designed an inspector scene where radius and palette mutations re-render a 3D specimen lab live.',
      'Made brand decisions an interactive demo instead of a wall of markdown.',
    ],
    features: ['Typed token pipeline', '3D theme inspector', 'Live specimen lab', 'Zero-runtime CSS output'],
    metrics: [
      { value: '100%', label: 'typed token coverage' },
      { value: '0', label: 'runtime CSS cost' },
      { value: '3D', label: 'live theme inspector' },
    ],
    palette: { from: '#161012', via: '#5a2436', to: '#0a0809', accent: '#ff7a55' },
    motif: 'token',
  },
  {
    id: 'energyai',
    title: 'EnergyAI Forecast',
    year: '2025',
    genre: 'AI / ML • Python • Flask',
    logline: 'A Random Forest forecaster that reads household energy patterns and predicts future consumption with visualised savings.',
    stack: ['Python', 'Flask', 'Scikit-learn', 'Random Forest'],
    build: [
      'Trained a Random Forest model on household energy consumption to forecast future usage.',
      'Served predictions through a Flask API with a visualisation layer for savings over time.',
      'End-to-end ML workflow — dataset, training, serving and interface.',
    ],
    features: ['Random Forest forecasting', 'Flask serving API', 'Consumption visualisations', 'End-to-end ML pipeline'],
    metrics: [
      { value: '94%', label: 'forecast accuracy' },
      { value: 'RF', label: 'Random Forest core' },
      { value: 'Flask', label: 'serving layer' },
    ],
    github: 'https://github.com/naik1313-naik/ai-energy-prediction',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'energy',
  },
  {
    id: 'gv-enterprises',
    title: 'GV Enterprises',
    year: '2025',
    genre: 'Business site • Next.js • Tailwind',
    logline: 'A premium website for a plumbing, sanitary & hardware showroom — a luxury royal-blue brand system with glassmorphic surfaces.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    build: [
      'Designed a royal-blue & silver brand system with glassmorphic surfaces for a premium showroom.',
      'Built a cinematic slideshow and scroll animations on a typed Next.js foundation.',
      'Shipped a production site that scores a perfect Lighthouse run.',
    ],
    features: ['Glassmorphic brand system', 'Cinematic slideshow', 'Scroll animations', '100 Lighthouse score'],
    metrics: [
      { value: '100', label: 'Lighthouse score' },
      { value: '1', label: 'brand system' },
      { value: 'TS', label: 'typed Next.js build' },
    ],
    github: 'https://github.com/naik1313-naik/gvplumbing',
    demo: 'https://gvplumbing-eta.vercel.app',
    palette: { from: '#04102e', via: '#123a9c', to: '#05070f', accent: '#4c8dff' },
    motif: 'store',
  },
  {
    id: 'college-management',
    title: 'College Management',
    year: '2024',
    genre: 'Full-stack • Node • PostgreSQL',
    logline: 'A full-stack college platform with JWT role-based access for admin, teacher and student — plus Razorpay fee payments.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'React', 'JWT'],
    build: [
      'Architected one codebase serving three roles — admin, teacher and student — behind JWT role-based access.',
      'Integrated Razorpay fee payments and attendance/records workflows end to end.',
      'Kept auth, data and interface in sync across the whole platform.',
    ],
    features: ['JWT role-based access (3 roles)', 'Razorpay fee payments', 'Attendance & records', 'Admin / teacher / student dashboards'],
    metrics: [
      { value: '3', label: 'roles · one codebase' },
      { value: 'JWT', label: 'role-based access' },
      { value: 'Pay', label: 'Razorpay integrated' },
    ],
    github: 'https://github.com/naik1313-naik/college-management-system',
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'roles',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'ai-intern',
    title: 'AI Intern — completed',
    org: 'Pratinik Infotech',
    detail: 'Shipped datasets, models and products from a live bench in Bengaluru.',
    laurel: 'Shipped 2026',
  },
  {
    id: 'hackathons',
    title: '10+ Hackathons',
    org: 'Jams & competitions',
    detail: 'Built under pressure across college and community hackathons.',
    laurel: 'Competitor',
  },
  {
    id: 'lighthouse',
    title: '100 Lighthouse',
    org: 'GV Enterprises',
    detail: 'A perfect performance score on a glassmorphic production site.',
    laurel: 'Perfect Score',
    link: 'https://gvplumbing-eta.vercel.app',
  },
  {
    id: 'accuracy',
    title: '94% Accuracy',
    org: 'EnergyAI Forecast',
    detail: 'Random Forest model forecasting household energy use from live patterns.',
    laurel: 'Best Model',
    link: 'https://github.com/naik1313-naik/ai-energy-prediction',
  },
  {
    id: 'open-bench',
    title: '13 Public Repos',
    org: 'github.com/naik1313-naik',
    detail: 'An open bench — every experiment, site and system built in public.',
    laurel: 'Open Source',
    link: 'https://github.com/naik1313-naik',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Tata', name: 'Cybersecurity Analyst Job Simulation — Forage' },
  { issuer: 'Tata', name: 'GenAI Powered Data Analytics Job Simulation — Forage' },
  { issuer: 'Course', name: 'Cyber Security certificate' },
  { issuer: 'Course', name: 'Data Analysis certificate' },
  { issuer: 'Udemy', name: 'Web Development' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'React', mono: 'Re', note: 'Primary' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'Vite', mono: 'Vi' },
    ],
  },
  {
    id: 'motion',
    title: 'Motion & 3D',
    subtitle: 'Choreography & real-time scenes',
    skills: [
      { name: 'GSAP', mono: 'Gs', note: 'Primary' },
      { name: 'ScrollTrigger', mono: 'Sc' },
      { name: 'Lenis', mono: 'Ln' },
      { name: 'Framer Motion', mono: 'Fm' },
      { name: 'Three.js', mono: '3j' },
      { name: 'React Three Fiber', mono: '3f' },
      { name: 'GLSL', mono: 'Gl' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Data',
    subtitle: 'From numbers to decisions',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'Pandas & NumPy', mono: 'Pd' },
      { name: 'Machine Learning', mono: 'Ml' },
      { name: 'Scikit-learn', mono: 'Sk' },
      { name: 'Data analysis', mono: 'Da' },
      { name: 'Flask', mono: 'Fl' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Servers, data & auth',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express', mono: 'Ex' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MySQL', mono: 'My' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'JWT Auth', mono: 'Jw' },
    ],
  },
  {
    id: 'ship',
    title: 'Ship It',
    subtitle: 'Tooling around the work',
    skills: [
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Vercel', mono: 'Ve' },
      { name: 'Next.js', mono: 'Nx' },
      { name: 'Postman', mono: 'Pm' },
    ],
  },
  {
    id: 'roots',
    title: 'Roots',
    subtitle: 'Degree foundations',
    skills: [
      { name: 'IoT', mono: 'Io' },
      { name: 'Embedded Systems', mono: 'Em' },
      { name: 'DSA', mono: 'Ds' },
      { name: 'OOP', mono: 'Oo' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C+' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears across projects and credentials.
 */
export const skillEvidence: Record<string, string[]> = {
  React: ['College Management', 'Vanta', 'GV Enterprises'],
  TypeScript: ['GV Enterprises', 'Vanta'],
  JavaScript: ['NexGen Learning', 'Smart Waste Management'],
  'Tailwind CSS': ['GV Enterprises'],
  GSAP: ['Ink & Steel', 'This site'],
  ScrollTrigger: ['Ink & Steel'],
  Lenis: ['This site'],
  'Framer Motion': ['GV Enterprises', 'This site'],
  'Three.js': ['Meridian', 'Perigee', '3D Astro Portfolio'],
  'React Three Fiber': ['Meridian', 'Perigee', 'Vanta', 'This site'],
  GLSL: ['Meridian', 'Perigee'],
  Python: ['EnergyAI Forecast', 'AI internship — Pratinik Infotech'],
  'Machine Learning': ['EnergyAI Forecast', 'AI internship — Pratinik Infotech'],
  'Scikit-learn': ['EnergyAI Forecast'],
  'Data analysis': ['Tata GenAI Data Analytics — Forage'],
  Flask: ['EnergyAI Forecast'],
  'Node.js': ['College Management', 'NexGen Learning'],
  Express: ['College Management', 'NexGen Learning'],
  PostgreSQL: ['College Management'],
  MySQL: ['NexGen Learning'],
  'JWT Auth': ['College Management'],
  'Git / GitHub': ['13 public repos'],
  Docker: ['NexGen Learning'],
  'Next.js': ['GV Enterprises'],
  IoT: ['B.Tech CSE — IoT track'],
  DSA: ['Hackathon builds'],
  'Cyber Security': ['Tata Cybersecurity Analyst — Forage'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Before the Code',
    period: 'Prior to 2024',
    synopsis: 'Pre-university and schooling — Science and Mathematics, before the first line of code shipped.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundations',
        description: 'Pre-University — Science, Mathematics at Alva’s College of Education & DAV Schools.',
        tags: ['PCM', 'Science', 'Mathematics'],
        runtime: 'Prior to 2024',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'The Engineer',
    period: '2024 – Present',
    synopsis: 'B.Tech in Computer Science & Engineering (IoT track) at Presidency University, Bengaluru.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Degree',
        description: 'Bachelor of Technology — Computer Science & Engineering, IoT track, at Presidency University, Bengaluru.',
        tags: ['B.Tech', 'Computer Science', 'IoT'],
        runtime: '2024 – Present',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Hypothesis',
        description: 'Engineering formalities aside — software development, data analysis and artificial intelligence, tested build by build.',
        tags: ['Software', 'Data', 'AI'],
        runtime: 'Ongoing',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'Shipping in Public',
    period: '2024 – 2025',
    synopsis: 'The independent build practice — twenty-plus projects, hackathons, and a bench opened to the world.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'First Ships',
        description: '20+ projects across the bench — GV Enterprises, storefronts, microsites and full-stack systems.',
        tags: ['Next.js', 'HTML/CSS', '20+ projects'],
        runtime: '2024 – 2025',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'Under Pressure',
        description: '10+ hackathons and coding jams — building interfaces and systems against the clock.',
        tags: ['Hackathons', 'Jams', 'Competitions'],
        runtime: '10+ events',
        palette: amber,
      },
      {
        code: 'S03 E03',
        title: 'The Bench Opens',
        description: '13 public repositories on GitHub — every experiment and system built in the open.',
        tags: ['Open source', 'GitHub', '13 repos'],
        runtime: 'Ongoing',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'The AI Arc',
    period: '2025 – 2026',
    synopsis: 'From the training floor to a live laboratory — the AI internship and the ML work that came with it.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Intern',
        description: 'AI internship at Pratinik Infotech, Bengaluru — datasets, models and products shipped from a live bench.',
        tags: ['AI', 'Machine learning', 'Data'],
        runtime: '2026 · completed',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'Energy in the Data',
        description: 'EnergyAI Forecast — a Random Forest model predicting household energy use at 94% accuracy.',
        tags: ['Python', 'Flask', 'Scikit-learn'],
        runtime: '2025',
        palette: jade,
      },
      {
        code: 'S04 E03',
        title: 'Systems That Scale',
        description: 'College Management — JWT role-based access for three roles plus Razorpay fee payments, one codebase.',
        tags: ['Node.js', 'PostgreSQL', 'JWT'],
        runtime: '2024 – 2025',
        palette: violet,
      },
    ],
  },
  {
    number: 5,
    title: 'Now Streaming',
    period: '2026 –',
    synopsis: 'The creative turn — WebGL instruments, motion systems, and this series. Open to what comes next.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Creative Turn',
        description: 'WebGL instruments, scroll choreography and this streaming-style series — React, Three.js and GSAP in one practice.',
        tags: ['Three.js', 'GSAP', 'R3F'],
        runtime: 'In production',
        palette: crimson,
      },
      {
        code: 'S05 E02',
        title: 'Open to Work',
        description: 'Open to internships and junior roles — Bengaluru or remote, building at the seam of software, data and AI.',
        tags: ['Open', 'Internships', 'Remote friendly'],
        runtime: 'Now',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Current role', title: 'AI Intern', detail: 'Pratinik Infotech · completed 2026', palette: ocean },
  { label: 'The degree', title: 'B.Tech CSE', detail: 'Presidency University · IoT track', palette: violet },
  { label: 'The data original', title: 'EnergyAI', detail: '94% forecast accuracy', palette: jade },
  { label: 'Public bench', title: '13 Repos', detail: 'github.com/naik1313-naik', palette: crimson },
  { label: 'Perfect score', title: '100 Lighthouse', detail: 'GV Enterprises', palette: amber },
  { label: 'Shipped', title: '20+ Projects', detail: 'concept to production', palette: crimson },
  { label: 'Under pressure', title: '10+ Hackathons', detail: 'built against the clock', palette: amber },
  { label: 'WebGL', title: 'Three.js & R3F', detail: '3D as a design material', palette: ocean },
  { label: 'Motion', title: 'GSAP + Lenis', detail: 'cinematic scroll systems', palette: violet },
  { label: 'Status', title: 'Now Open', detail: 'internships · Bengaluru & remote', palette: jade },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CSE',
    lines: ['Presidency University, Bengaluru', 'Computer Science & Engineering — IoT track', '2024 – Present'],
    chips: ['Bengaluru', 'IoT track'],
  },
  {
    kicker: 'Craft',
    title: 'Motion, 3D & interfaces.',
    lines: ['Scroll systems, gesture design, micro-interactions', 'Real-time scenes, shaders and point clouds', 'Typed React architecture that stays fast'],
    chips: ['GSAP', 'Three.js', 'React', 'TypeScript'],
  },
  {
    kicker: 'Experience',
    title: 'The AI Intern',
    lines: ['Pratinik Infotech · Bengaluru', 'AI internship — completed 2026', 'Datasets, models and products from a live bench'],
    chips: ['Machine learning', 'Data', 'Applied AI'],
  },
  {
    kicker: 'Projects',
    title: 'Seven Originals',
    lines: ['EnergyAI — 94% forecast accuracy', 'GV Enterprises — 100 Lighthouse', 'College Management — 3 roles, one codebase'],
    chips: ['EnergyAI', 'GV Enterprises', 'Meridian', 'Perigee'],
  },
  {
    kicker: 'Open source',
    title: '13 Public Repos',
    lines: ['Every experiment, site and system in public', 'github.com/naik1313-naik'],
    chips: ['Next.js', 'Node.js', 'Three.js'],
  },
  {
    kicker: 'Certified',
    title: '5 Credentials',
    lines: ['Tata · Forage job simulations', 'Cyber security · Data analytics · Web development'],
  },
  {
    kicker: 'Now',
    title: 'Open to internships',
    lines: ['Bengaluru · open to remote', 'Software × Data × AI, with a creative edge'],
    chips: ['Open'],
  },
];

export type ProfileId = 'sumeet' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'craft' | 'journey' | 'originals' | 'repos' | 'picks' | 'skills' | 'moments';

/** Capability lines shown in the Craft accordion (from the studio site). */
export type Capability = { index: string; name: string; description: string; chips: string[] };

export const capabilities: Capability[] = [
  {
    index: '01',
    name: 'Interaction & Motion',
    description:
      'Choreography that earns its frame-rate. Scroll systems, gesture design and micro-interactions where every millisecond of easing is decided on purpose.',
    chips: ['GSAP', 'ScrollTrigger', 'Lenis', 'Framer Motion'],
  },
  {
    index: '02',
    name: '3D & WebGL',
    description:
      'Real-time scenes, shaders and point-clouds as a design material — not a tech demo. GPU work with DPR budgets and reduced-motion fallbacks baked in.',
    chips: ['React Three Fiber', 'Three.js', 'GLSL', 'Instancing'],
  },
  {
    index: '03',
    name: 'Interface Engineering',
    description:
      'React at the edge of its ergonomics — typed systems, token pipelines and architecture that stays fast while the design keeps moving.',
    chips: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Next.js'],
  },
  {
    index: '04',
    name: 'AI & Data',
    description:
      'Turning numbers into decisions — the bridges between Python, data and machine learning, applied to real problems before theory gets the credit.',
    chips: ['Python', 'Pandas & NumPy', 'Machine Learning', 'Data analysis'],
  },
  {
    index: '05',
    name: 'Full-Stack Systems',
    description:
      'Servers, data and auth holding the interface up — role-based backends, payments and APIs that stay boring under load.',
    chips: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Razorpay'],
  },
];

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sumeet',
    name: 'Sumeet',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'craft', 'journey', 'originals', 'repos', 'picks', 'skills', 'moments'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Credentials, work & skills first',
    color: '#4cc9ff',
    order: ['moments', 'originals', 'repos', 'skills', 'about', 'journey', 'craft', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'repos', 'craft', 'skills', 'journey', 'about', 'picks', 'moments'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'Craft, arc & highlights first',
    color: '#ffb547',
    order: ['craft', 'journey', 'originals', 'picks', 'about', 'skills', 'moments', 'repos'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Bengaluru, India', palette: violet },
  craft: { nav: 'Craft', card: 'My Craft', meta: `${capabilities.length} disciplines • what I do`, palette: crimson },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2024–2026`, palette: crimson },
  repos: { nav: 'Repos', card: 'The Bench', meta: '13 repos • live from GitHub', palette: ocean },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Top Moments', meta: `${achievements.length} Moments • ${certifications.length} Credentials`, palette: crimson },
};
