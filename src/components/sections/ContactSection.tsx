import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import { contacts } from '@/data/portfolio'

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
}

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="contact"
      ref={ref}
      className="py-28"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <p className="section-label justify-center mb-4">Contact</p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-5"
            style={{ color: 'var(--text-primary)' }}
          >
            Let's build something interesting.
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            I'm interested in building, learning, and solving challenging engineering problems.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
          {contacts.map((contact, i) => {
            const Icon = iconMap[contact.icon] ?? Mail

            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
                className="flex items-center gap-4 p-5 rounded-xl border flex-1 group"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--bg-border)',
                  transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(34,211,238,0.3)'
                  el.style.transform = 'translateY(-2px)'
                  el.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--bg-border)'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                }}
              >
                <div
                  className="p-2.5 rounded-lg shrink-0"
                  style={{ backgroundColor: 'rgba(34,211,238,0.08)' }}
                >
                  <Icon size={17} style={{ color: 'var(--accent)' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-sm font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {contact.label}
                  </p>
                  <p
                    className="text-xs truncate mt-0.5"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {contact.handle}
                  </p>
                </div>
                <ArrowUpRight
                  size={14}
                  style={{ color: 'var(--text-muted)', flexShrink: 0 }}
                  className="group-hover:text-cyan-400 transition-colors"
                />
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
