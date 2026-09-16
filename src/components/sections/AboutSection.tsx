import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      ref={ref}
      className="py-28"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label mb-4">About</p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6 leading-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              Vijaygovind Biju
              <br />
              <span className="text-gradient-cyan">Building toward Software & AI Engineering.</span>
            </h2>

            <div
              className="space-y-4 text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              <p>
                I learn by building software and understanding how the systems underneath it work.
                My current focus is software engineering, Linux systems, Rust, Flutter, and AI engineering.
              </p>
              <p>
                I enjoy taking projects from architecture and implementation through debugging and iteration.
                I care about understanding what happens beneath the abstractions — D-Bus, PTYs, audio graphs,
                kernel interfaces — because that understanding makes better software at every layer above.
              </p>
              <p>
                I write Rust to think carefully about ownership and resource management. I build Flutter
                applications with deliberate architecture. I study machine learning to understand what
                AI engineering actually requires in practice.
              </p>
              <p>
                I use AI coding agents as development tools — for boilerplate, refactoring, and
                implementation. Architecture and engineering decisions remain mine.
              </p>
            </div>
          </motion.div>

          {/* Right — facts panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-4"
          >
            {/* Approach bullets */}
            <div
              className="p-6 rounded-xl border"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--bg-border)' }}
            >
              <p
                className="font-mono text-[10px] tracking-widest uppercase mb-4"
                style={{ color: 'var(--accent)' }}
              >
                How I approach work
              </p>
              <ul className="space-y-3">
                {[
                  'Learn by building, not by reading',
                  'Understand systems, not just abstractions',
                  'Architecture before implementation',
                  'Work close to the underlying technology',
                  'Build real things, not tutorial projects',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <span style={{ color: 'var(--accent)' }} className="mt-0.5 shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Direction */}
            <div
              className="p-5 rounded-xl border"
              style={{
                backgroundColor: 'rgba(34,211,238,0.04)',
                borderColor: 'rgba(34,211,238,0.15)',
              }}
            >
              <p
                className="font-mono text-[10px] tracking-widest uppercase mb-3"
                style={{ color: 'var(--accent)' }}
              >
                Direction
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Building toward{' '}
                <strong style={{ color: 'var(--text-primary)' }}>Software Engineering</strong> and{' '}
                <strong style={{ color: 'var(--text-primary)' }}>AI Engineering</strong> — combining
                systems thinking with machine learning and production software design.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
