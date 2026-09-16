import { motion } from 'framer-motion'
import { ArrowRight, Github } from 'lucide-react'

const GITHUB_URL = 'https://github.com/vijaygovindBiju'

// ─── Architecture Stack Diagram ───────────────────────────────────────────────
const STACK_LAYERS = [
  { label: 'USER',            sub: 'input / interaction',    accent: false },
  { label: 'INTERFACE',       sub: 'UI · widgets · state',   accent: false },
  { label: 'APPLICATION',     sub: 'logic · services · API', accent: true  },
  { label: 'DATA / LOGIC',    sub: 'models · pipelines',     accent: false },
  { label: 'SYSTEM / SERVER', sub: 'OS · kernel · drivers',  accent: false },
]

function ArchDiagram() {
  return (
    <div className="relative w-full flex flex-col items-center gap-0 select-none" aria-hidden="true">
      {STACK_LAYERS.map((layer, i) => {
        const isAccent = layer.accent
        const delay = i * 0.12

        return (
          <motion.div
            key={layer.label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + delay, ease: 'easeOut' }}
            className="flex flex-col items-center w-full"
          >
            <div
              className="w-full rounded-lg px-5 py-3 flex items-center justify-between transition-all duration-300"
              style={{
                backgroundColor: isAccent ? 'rgba(34, 211, 238, 0.08)' : 'var(--bg-card)',
                border: `1px solid ${isAccent ? 'rgba(34, 211, 238, 0.3)' : 'var(--bg-border)'}`,
              }}
            >
              <div>
                <span
                  className="font-mono text-xs font-semibold tracking-widest"
                  style={{ color: isAccent ? 'var(--accent)' : 'var(--text-primary)' }}
                >
                  {layer.label}
                </span>
                <span
                  className="font-mono text-xs ml-3"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {layer.sub}
                </span>
              </div>
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: isAccent ? 'var(--accent)' : 'var(--bg-elevated)',
                  border: isAccent ? 'none' : '1px solid var(--bg-border)',
                }}
              />
            </div>

            {i < STACK_LAYERS.length - 1 && (
              <motion.div
                className="flex flex-col items-center my-0.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + delay }}
              >
                <div className="w-px h-4" style={{ backgroundColor: 'var(--bg-border)' }} />
                <motion.div
                  animate={{ y: [0, 2, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.3, ease: 'easeInOut' }}
                  style={{ color: 'var(--accent)', opacity: 0.5 }}
                >
                  ↓
                </motion.div>
                <div className="w-px h-2" style={{ backgroundColor: 'var(--bg-border)' }} />
              </motion.div>
            )}
          </motion.div>
        )
      })}

      <div
        className="mt-4 font-mono text-[10px] tracking-widest uppercase"
        style={{ color: 'var(--text-muted)', opacity: 0.6 }}
      >
        software architecture
      </div>
    </div>
  )
}

// ─── Portrait Card ─────────────────────────────────────────────────────────────
function PortraitCard() {
  return (
    <div
      className="rounded-2xl border overflow-hidden relative"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--bg-border)',
      }}
    >
      {/* Terminal header bar */}
      <div
        className="flex items-center gap-1.5 px-4 py-3 border-b"
        style={{ borderColor: 'var(--bg-border)', backgroundColor: 'var(--bg-elevated)' }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-80" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400 opacity-80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500 opacity-80" />
        <span
          className="ml-3 font-mono text-xs"
          style={{ color: 'var(--text-muted)' }}
        >
          vijaygovind-biju
        </span>
      </div>

      {/* Photo — upper-body crop via object-position */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '3/4', maxHeight: '420px' }}>
        <img
          src="/assets/vijaygovind-biju.jpg"
          alt="Portrait of Vijaygovind Biju"
          className="w-full h-full"
          style={{
            objectFit: 'cover',
            objectPosition: 'center top',
            // Subtle darkening overlay handled by the ::after div below
          }}
        />
        {/* Gradient fade at bottom to blend into card bg */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, var(--bg-card) 0%, transparent 100%)',
          }}
          aria-hidden="true"
        />
        {/* Very subtle vignette on background edges to suppress busy BG */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 60px 20px var(--bg-card)',
            opacity: 0.4,
          }}
          aria-hidden="true"
        />
      </div>

      {/* Name / role caption at bottom */}
      <div className="px-5 pb-5 pt-1">
        <p
          className="text-sm font-semibold"
          style={{ color: 'var(--text-primary)' }}
        >
          Vijaygovind Biju
        </p>
        <p
          className="font-mono text-xs mt-0.5"
          style={{ color: 'var(--accent)' }}
        >
          Software Engineer · AI Engineer
        </p>
      </div>
    </div>
  )
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Introduction"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />

      {/* Radial highlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% -5%, rgba(34,211,238,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px] gap-12 xl:gap-16 items-center">

          {/* ── Left: text ── */}
          <div>
            {/* Identity badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 mb-6 px-3 py-1.5 rounded-full border"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--bg-border)' }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: 'var(--accent)' }}
              />
              <span
                className="font-mono text-xs tracking-wide"
                style={{ color: 'var(--text-secondary)' }}
              >
                SOFTWARE ENGINEER · AI ENGINEER
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl xl:text-[3.4rem] font-bold leading-[1.12] tracking-tight mb-5"
              style={{ color: 'var(--text-primary)' }}
            >
              I build software{' '}
              <span className="text-gradient-cyan">from the system up.</span>
            </motion.h1>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg leading-relaxed mb-8 max-w-[560px]"
              style={{ color: 'var(--text-secondary)' }}
            >
              Software Engineer focused on systems, Linux, AI, and Flutter.
              I learn by building software and understanding what happens underneath the abstractions.
            </motion.p>

            {/* Area tags */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {['Rust', 'Linux / D-Bus', 'Flutter', 'Python', 'AI Engineering'].map(tag => (
                <span key={tag} className="chip-neutral chip">
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="btn-primary"
              >
                View Projects
                <ArrowRight size={15} />
              </button>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github size={15} />
                GitHub
              </a>
            </motion.div>
          </div>

          {/* ── Right: portrait + arch diagram stacked ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="hidden lg:flex flex-col gap-4"
          >
            {/* Real photo portrait */}
            <PortraitCard />

            {/* Compact arch diagram below the portrait */}
            <div
              className="rounded-xl p-4 border"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--bg-border)' }}
            >
              <div
                className="flex items-center gap-1.5 mb-3 pb-3 border-b"
                style={{ borderColor: 'var(--bg-border)' }}
              >
                <div className="w-2 h-2 rounded-full bg-red-500 opacity-70" />
                <div className="w-2 h-2 rounded-full bg-amber-400 opacity-70" />
                <div className="w-2 h-2 rounded-full bg-green-500 opacity-70" />
                <span className="ml-2 font-mono text-[10px]" style={{ color: 'var(--text-muted)' }}>
                  architecture.diagram
                </span>
              </div>
              <ArchDiagram />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="font-mono text-[10px] tracking-widest uppercase"
            style={{ color: 'var(--text-muted)', opacity: 0.5 }}
          >
            scroll
          </motion.div>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut', delay: 0.15 }}
            style={{ color: 'var(--text-muted)', opacity: 0.4, fontSize: '0.65rem' }}
          >
            ▼
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
