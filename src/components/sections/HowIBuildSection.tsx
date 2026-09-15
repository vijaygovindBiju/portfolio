import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layers, Cpu, Code2, Bot } from 'lucide-react'
import { philosophy } from '@/data/portfolio'

const iconMap: Record<string, React.ElementType> = {
  layers: Layers,
  cpu: Cpu,
  code: Code2,
  bot: Bot,
}

// Workflow steps
const WORKFLOW = [
  { step: '01', label: 'Problem',        desc: 'What is the actual problem? Is it worth solving?' },
  { step: '02', label: 'Architecture',   desc: 'Define modules, interfaces, and responsibilities.' },
  { step: '03', label: 'Implementation', desc: 'Code that matches the design. Agents help here.' },
  { step: '04', label: 'Testing',        desc: 'Does the code do what the design intended?' },
  { step: '05', label: 'Review',         desc: 'Is the design visible in the implementation?' },
  { step: '06', label: 'Iteration',      desc: 'Real systems change. Refactor honestly.' },
]

export default function EngineeringSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="engineering"
      ref={ref}
      className="py-28"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label mb-4">Engineering Philosophy</p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            How I think about software
          </h2>
          <p
            className="text-lg max-w-2xl leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Good software is built from deliberate decisions. Here's how I approach the work.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">

          {/* Philosophy cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {philosophy.map((item, i) => {
              const Icon = iconMap[item.icon] ?? Layers
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                  className="p-5 rounded-xl border group"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--bg-border)',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,211,238,0.25)'
                  }}
                  onMouseLeave={e => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--bg-border)'
                  }}
                >
                  <div
                    className="p-2 rounded-lg inline-flex mb-3"
                    style={{ backgroundColor: 'rgba(34,211,238,0.08)' }}
                  >
                    <Icon size={16} style={{ color: 'var(--accent)' }} />
                  </div>
                  <h3
                    className="text-sm font-semibold mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {item.body}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Workflow + AI section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="space-y-6"
          >
            {/* Workflow timeline */}
            <div
              className="rounded-xl border p-6"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--bg-border)' }}
            >
              <p
                className="font-mono text-[10px] tracking-widest uppercase mb-5"
                style={{ color: 'var(--accent)' }}
              >
                Development workflow
              </p>
              <div className="space-y-0">
                {WORKFLOW.map((w, i) => (
                  <div key={w.step} className="flex gap-4 relative">
                    {/* Vertical line */}
                    {i < WORKFLOW.length - 1 && (
                      <div
                        className="absolute left-[18px] top-9 w-px bottom-0"
                        style={{ backgroundColor: 'var(--bg-border)' }}
                      />
                    )}
                    {/* Step circle */}
                    <div
                      className="relative z-10 mt-1 w-9 h-9 rounded-full flex items-center justify-center shrink-0 border"
                      style={{
                        backgroundColor: 'var(--bg-elevated)',
                        borderColor: 'var(--bg-border)',
                      }}
                    >
                      <span
                        className="font-mono text-[10px] font-semibold"
                        style={{ color: 'var(--accent)' }}
                      >
                        {w.step}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="pb-5">
                      <p
                        className="text-sm font-semibold mb-0.5"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {w.label}
                      </p>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {w.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI tools callout */}
            <div
              className="rounded-xl border p-5"
              style={{
                backgroundColor: 'rgba(34,211,238,0.04)',
                borderColor: 'rgba(34,211,238,0.18)',
              }}
            >
              <p
                className="font-mono text-xs font-semibold mb-2"
                style={{ color: 'var(--accent)' }}
              >
                On AI coding agents
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                I use coding agents as development tools — for boilerplate, refactoring, testing, and debugging.
                They accelerate implementation. They do not design systems.
              </p>
              <p
                className="text-xs font-medium border-l-2 pl-3"
                style={{
                  color: 'var(--text-primary)',
                  borderColor: 'var(--accent)',
                }}
              >
                Architecture, module boundaries, and engineering decisions remain mine.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
