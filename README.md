# Portfolio v2

Premium personal developer portfolio — **Linux terminal × modern developer tool × engineering laboratory**.

Built with React + TypeScript + Vite + Tailwind CSS + Framer Motion.

---

## Quick Start

```bash
# Install (uses npmmirror due to registry config)
NODE_TLS_REJECT_UNAUTHORIZED=0 npm install

# Dev server
NODE_TLS_REJECT_UNAUTHORIZED=0 npm run dev

# Production build
NODE_TLS_REJECT_UNAUTHORIZED=0 npm run build
```

---

## Design System

| Token            | Dark             | Light      |
|------------------|------------------|------------|
| Background       | `#0B1120`        | `#F8FAFC`  |
| Secondary BG     | `#111827`        | `#F1F5F9`  |
| Card             | `#151F32`        | `#FFFFFF`  |
| Primary Text     | `#F8FAFC`        | `#0F172A`  |
| Secondary Text   | `#A7B3C7`        | `#475569`  |
| Accent (cyan)    | `#22D3EE`        | `#0891B2`  |
| Accent (amber)   | `#F59E0B`        | `#D97706`  |

**70% neutrals / 20% surfaces / 10% accent** — cyan is used selectively.

---

## Project Structure

```
src/
├── App.tsx                          # Router + providers
├── main.tsx                         # Entry point
├── index.css                        # Global CSS + design tokens (CSS custom properties)
│
├── types/
│   └── index.ts                     # Project, ArchNode, TechGroup, FocusItem
│
├── data/
│   └── portfolio.ts                 # ← ALL CONTENT HERE — edit this file
│
├── context/
│   └── ThemeContext.tsx              # Dark/light theme (persisted to localStorage)
│
├── components/
│   ├── layout/
│   │   ├── Layout.tsx               # Page wrapper with Framer Motion transitions
│   │   ├── Navbar.tsx               # Sticky nav with scroll-aware styling
│   │   └── Footer.tsx               # Footer with social links
│   │
│   └── sections/
│       ├── HeroSection.tsx          # Hero + architecture stack diagram
│       ├── ProjectsSection.tsx      # 4 numbered project cards
│       ├── HowIBuildSection.tsx     # Engineering philosophy + workflow
│       ├── TechStackSection.tsx     # Tech groups + currently building
│       ├── AboutSection.tsx         # Engineering-focused bio
│       └── ContactSection.tsx       # GitHub · LinkedIn · Email
│
└── pages/
    ├── HomePage.tsx                 # Composes all sections
    └── ProjectDetailPage.tsx        # Per-project detail with SVG arch diagrams
```

---

## Personalizing

### 1. Replace placeholders (global find & replace)
```
yourusername   → your actual GitHub username
yourprofile    → your LinkedIn slug
your@email.com → your email address
Your Name      → your actual name
```

Files to update:
- [`src/data/portfolio.ts`](src/data/portfolio.ts) — all project content, links
- [`src/components/layout/Navbar.tsx`](src/components/layout/Navbar.tsx) — name in logo
- [`src/components/layout/Footer.tsx`](src/components/layout/Footer.tsx) — social links
- [`index.html`](index.html) — page title + meta description

### 2. Resume
Drop your PDF at `public/resume.pdf`.

### 3. Add a project
In [`src/data/portfolio.ts`](src/data/portfolio.ts), add to the `projects` array:

```typescript
{
  id: 'my-project',           // URL: /projects/my-project
  number: '05',               // Editorial number shown on card
  title: 'My Project',
  tagline: 'One-line descriptor',
  identity: 'netra',          // 'netra' | 'music' | 'terminal' | 'ai'
  accentColor: '#22D3EE',     // Card identity color
  category: 'Rust · Linux',
  status: 'in-progress',      // 'active' | 'in-progress' | 'experimental'
  description: '...',          // Homepage card description
  longDescription: '...',      // Detail page overview
  problem: '...',
  whyBuilt: '...',
  architecture: '...',
  technologies: ['Rust', 'Linux'],
  challenges: ['Challenge 1', ...],
  learnings: ['Learning 1', ...],
  githubUrl: 'https://github.com/...',
  // Optional: demoUrl, architectureNodes
}
```

### 4. Add project screenshots
Create `public/projects/<id>/` and add images.
Update the detail page screenshot section to show them.

---

## Deployment

Build output: `dist/`

**Vercel**: Push to GitHub → Import → Deploy (zero config)
**Netlify**: Connect repo → Deploy (set build command: `npm run build`)
**Cloudflare Pages**: Same as Netlify

> Note: If building locally with npm registry issues, set `strict-ssl=false` in `~/.npmrc` and prefix commands with `NODE_TLS_REJECT_UNAUTHORIZED=0`.
