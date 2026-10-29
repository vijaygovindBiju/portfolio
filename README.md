# Developer Portfolio v2 ⚡

> **Personal Engineering Laboratory × Linux Terminal Aesthetics × Modern Web Architecture**

[![React](https://img.shields.io/badge/React-18.3-61DAFB.svg?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF.svg?style=flat&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.18-0055FF.svg?style=flat&logo=framer)](https://www.framer.com/motion/)
[![Live Demo](https://img.shields.io/badge/Demo-vijaygovindbiju.github.io-success.svg?style=flat&logo=githubpages)](https://vijaygovindbiju.github.io/portfolio/)

---

## 📌 Overview

A fast, accessible, dark-mode first personal developer portfolio built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Designed around a high-contrast Linux terminal aesthetic inspired by modern developer systems tooling and engineering dashboards.

- 🌐 **Live URL:** [https://vijaygovindbiju.github.io/portfolio/](https://vijaygovindbiju.github.io/portfolio/)
- 🎨 **Design Concept:** 70% deep neutral surfaces, 20% card containers, 10% vivid cyan/amber accents.
- ⚡ **Zero Bloat:** Pure client-side static bundle optimized for GitHub Pages and edge CDNs.

---

## 🚀 Key Features

- **💫 Fluid Page Transitions:** Accelerated animations and route transitions powered by [Framer Motion](https://www.framer.com/motion/).
- **🌓 Dynamic Theme Support:** Persisted dark/light mode switching using CSS custom properties and `localStorage`.
- **📱 Fully Responsive:** Adaptive navigation header, collapsible mobile menu, and responsive project cards.
- **🏗️ Interactive Architecture Diagrams:** Deep-dive project pages featuring SVG component diagrams and engineering decision notes.
- **🔍 SEO & Performance Optimized:** Pre-configured OpenGraph metadata, structured JSON-LD, and sub-second asset bundling via Vite.

---

## 🎨 Design System & Color Tokens

| Token | Dark Mode | Light Mode | Application |
| :--- | :--- | :--- | :--- |
| **Primary Background** | `#0B1120` | `#F8FAFC` | Core viewport body |
| **Secondary Surface** | `#111827` | `#F1F5F9` | Elevated sections, headers, sidebars |
| **Card Background** | `#151F32` | `#FFFFFF` | Project & telemetry cards |
| **Primary Text** | `#F8FAFC` | `#0F172A` | Headings, titles, high-emphasis text |
| **Secondary Text** | `#A7B3C7` | `#475569` | Descriptions, metadata, timestamps |
| **Cyan Accent** | `#22D3EE` | `#0891B2` | Primary buttons, active tabs, links |
| **Amber Accent** | `#F59E0B` | `#D97706` | Status indicators, highlights |

---

## 🛠️ Quick Start

### Prerequisites
- **Node.js 18+** & `npm`

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/vijaygovindBiju/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start local Vite development server
npm run dev

# Run TypeScript type check and production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📂 Project Structure

```text
src/
├── App.tsx                          # Router definition and theme provider
├── main.tsx                         # React 18 DOM mount point
├── index.css                        # Tailwind directives and CSS token variables
│
├── types/
│   └── index.ts                     # TypeScript interfaces (Project, TechGroup, ArchNode)
│
├── data/
│   └── portfolio.ts                 # Central data registry for projects, skills, and bio
│
├── context/
│   └── ThemeContext.tsx             # Dark/Light theme state and persistence
│
├── components/
│   ├── layout/
│   │   ├── Layout.tsx               # Animated page wrapper
│   │   ├── Navbar.tsx               # Sticky header with active scroll awareness
│   │   └── Footer.tsx               # Social profiles and license notice
│   │
│   └── sections/
│       ├── HeroSection.tsx          # Terminal hero & architecture stack
│       ├── ProjectsSection.tsx      # Showcase cards with tech badges
│       ├── HowIBuildSection.tsx     # Engineering principles and workflow
│       ├── TechStackSection.tsx     # Skills taxonomy and focus areas
│       ├── AboutSection.tsx         # Detailed bio and engineering background
│       └── ContactSection.tsx       # Links & email contact form
│
└── pages/
    ├── HomePage.tsx                 # Composed single-page portfolio view
    └── ProjectDetailPage.tsx        # In-depth architectural case studies
```

---

## 🚀 Deployment

The production bundle builds to `dist/` and is deployed directly to **GitHub Pages**:

```bash
npm run build
```

Compatible out-of-the-box with **Vercel**, **Cloudflare Pages**, and **Netlify** with zero configuration required.

---

## 📄 License

This portfolio codebase is open-source and licensed under the **[MIT License](LICENSE)**.
