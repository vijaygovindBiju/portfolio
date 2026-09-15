import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { techStack, currentFocus } from '@/data/portfolio'

export default function TechStackSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="stack"
      ref={ref}
      className="py-28"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start">

          {/* ── Tech Stack ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <p className="section-label mb-4">Technologies</p>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                What I work with
              </h2>
              <p
                className="text-base leading-relaxed max-w-xl"
                style={{ color: 'var(--text-secondary)' }}
              >
                Grouped by domain. No percentage bars — proficiency shows through projects.
              </p>
            </motion.div>

            <div className="space-y-8">
              {techStack.map((group, i) => (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                >
                  <p
                    className="font-mono text-[10px] tracking-[0.2em] uppercase mb-3"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(item => (
                      <span
                        key={item}
                        className="inline-flex items-center px-3 py-1.5 rounded-md border font-mono text-xs"
                        style={{
                          backgroundColor: 'var(--bg-card)',
                          borderColor: 'var(--bg-border)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Currently Building ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-8">
              <p className="section-label mb-4">Currently Building</p>
              <h3
                className="text-xl font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                Active focus areas
              </h3>
            </div>

            <div className="space-y-3">
              {currentFocus.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                  className="flex items-start gap-4 p-4 rounded-lg border"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--bg-border)',
                  }}
                >
                  {/* Status dot + number */}
                  <div className="flex flex-col items-center gap-1.5 mt-0.5 shrink-0">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: 'var(--accent)' }}
                    />
                    <span
                      className="font-mono text-[10px]"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold mb-0.5"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.label}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
