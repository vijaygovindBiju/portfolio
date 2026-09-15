import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '@/data/portfolio'
import type { Project } from '@/types'

// ─── Status badge ─────────────────────────────────────────────────────────────
const STATUS = {
  active:        { label: 'Active',       color: '#22C55E' },
  'in-progress': { label: 'In Progress',  color: '#22D3EE' },
  experimental:  { label: 'Experimental', color: '#F59E0B' },
}

// ─── Single Project Card ──────────────────────────────────────────────────────
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const status = STATUS[project.status]

  const borderClass = {
    netra:    'card-border-netra',
    music:    'card-border-music',
    terminal: 'card-border-terminal',
    ai:       'card-border-ai',
  }[project.identity]

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className={`group rounded-xl overflow-hidden border relative ${borderClass}`}
      style={{
        backgroundColor: 'var(--bg-card)',
        borderLeftColor: 'var(--bg-border)',
        borderRightColor: 'var(--bg-border)',
        borderBottomColor: 'var(--bg-border)',
        transition: 'transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(-3px)'
        el.style.boxShadow = '0 12px 32px rgba(0,0,0,0.35)'
        el.style.borderLeftColor = `${project.accentColor}28`
        el.style.borderRightColor = `${project.accentColor}28`
        el.style.borderBottomColor = `${project.accentColor}28`
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = 'none'
        el.style.borderLeftColor = 'var(--bg-border)'
        el.style.borderRightColor = 'var(--bg-border)'
        el.style.borderBottomColor = 'var(--bg-border)'
      }}
    >
      <div className="p-7">
        {/* Header row */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-baseline gap-3">
            {/* Editorial number */}
            <span
              className="font-mono text-3xl font-bold leading-none"
              style={{ color: `${project.accentColor}30` }}
            >
              {project.number}
            </span>
            <div>
              <h3
                className="text-xl font-bold leading-tight"
                style={{ color: 'var(--text-primary)' }}
              >
                {project.title}
              </h3>
              <p
                className="font-mono text-xs mt-0.5"
                style={{ color: project.accentColor, opacity: 0.9 }}
              >
                {project.category}
              </p>
            </div>
          </div>

          {/* Status + arrow */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-1.5">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: status.color }}
              />
              <span
                className="font-mono text-[10px] tracking-wide"
                style={{ color: 'var(--text-muted)' }}
              >
                {status.label}
              </span>
            </div>
            <Link
              to={`/projects/${project.id}`}
              aria-label={`View ${project.title} details`}
              className="p-1.5 rounded-md transition-colors"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.color = project.accentColor
                ;(e.currentTarget as HTMLElement).style.backgroundColor = `${project.accentColor}15`
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'
                ;(e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
              }}
            >
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Description */}
        <p
          className="text-base leading-relaxed mb-5"
          style={{ color: 'var(--text-secondary)' }}
        >
          {project.description}
        </p>

        {/* Engineering challenge callout */}
        <div
          className="mb-5 p-3.5 rounded-lg border-l-2"
          style={{
            backgroundColor: `${project.accentColor}08`,
            borderLeftColor: `${project.accentColor}50`,
          }}
        >
          <p
            className="font-mono text-[10px] tracking-widest uppercase mb-1"
            style={{ color: project.accentColor, opacity: 0.8 }}
          >
            Engineering challenge
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {project.challenges[0]}
          </p>
        </div>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 5).map(tech => (
            <span
              key={tech}
              className="inline-flex items-center px-2.5 py-1 rounded font-mono text-[11px] border"
              style={{
                backgroundColor: 'var(--bg-elevated)',
                borderColor: 'var(--bg-border)',
                color: 'var(--text-secondary)',
              }}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span
              className="inline-flex items-center px-2.5 py-1 rounded font-mono text-[11px]"
              style={{ color: 'var(--text-muted)' }}
            >
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>

        {/* CTA buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          <Link
            to={`/projects/${project.id}`}
            className="btn-ghost text-xs"
            style={{ color: project.accentColor }}
            onMouseEnter={e => {
              ;(e.currentTarget as HTMLElement).style.backgroundColor = `${project.accentColor}12`
            }}
            onMouseLeave={e => {
              ;(e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
            }}
          >
            View Details
            <ArrowRight size={12} />
          </Link>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'
                ;(e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-elevated)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'
                ;(e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
              }}
            >
              <Github size={12} />
              GitHub
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs"
              style={{ color: 'var(--text-muted)' }}
            >
              <ExternalLink size={12} />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="projects"
      ref={ref}
      className="py-28"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label mb-4">Featured Projects</p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            What I've built
          </h2>
          <p
            className="text-lg max-w-2xl leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Real projects with real engineering decisions. Each one built to understand something deeply —
            not to fill a portfolio with technology names.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
