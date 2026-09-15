import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'
import { projects } from '@/data/portfolio'
import type { ArchNode, Project } from '@/types'

// ─── Architecture Diagram ─────────────────────────────────────────────────────

const nodeTypeStyle: Record<string, { bg: string; border: string; text: string }> = {
  input:    { bg: 'rgba(34,211,238,0.08)',  border: 'rgba(34,211,238,0.35)',  text: '#22D3EE' },
  process:  { bg: 'rgba(99,102,241,0.08)', border: 'rgba(99,102,241,0.35)', text: '#818CF8' },
  output:   { bg: 'rgba(34,197,94,0.08)',  border: 'rgba(34,197,94,0.35)',  text: '#22C55E' },
  storage:  { bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.35)', text: '#F59E0B' },
  external: { bg: 'rgba(100,116,139,0.1)', border: 'rgba(100,116,139,0.3)', text: '#94A3B8' },
}

function ArchitectureDiagram({
  nodes,
  accentColor,
}: {
  nodes: ArchNode[]
  accentColor: string
}) {
  if (!nodes.length) return null

  const W = 500
  const H = 320

  const getPos = (node: ArchNode) => ({
    x: (node.x / 100) * W,
    y: (node.y / 100) * H,
  })

  return (
    <div
      className="w-full overflow-x-auto rounded-xl border p-1"
      style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--bg-border)' }}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full max-w-full"
        style={{ minHeight: '220px' }}
        aria-label="Architecture diagram"
        role="img"
      >
        {/* Edges */}
        {nodes.map(node =>
          node.connections.map(targetId => {
            const target = nodes.find(n => n.id === targetId)
            if (!target) return null
            const from = getPos(node)
            const to = getPos(target)

            return (
              <g key={`${node.id}-${targetId}`}>
                <line
                  x1={from.x}
                  y1={from.y + 10}
                  x2={to.x}
                  y2={to.y - 10}
                  stroke={`${accentColor}25`}
                  strokeWidth="1.5"
                  strokeDasharray="5 3"
                />
                {/* Arrow head */}
                <polygon
                  points={`${to.x},${to.y - 8} ${to.x - 4},${to.y - 14} ${to.x + 4},${to.y - 14}`}
                  fill={`${accentColor}40`}
                />
              </g>
            )
          })
        )}

        {/* Nodes */}
        {nodes.map(node => {
          const pos = getPos(node)
          const style = nodeTypeStyle[node.type] ?? nodeTypeStyle.process

          return (
            <g key={node.id} transform={`translate(${pos.x},${pos.y})`}>
              {/* Node box */}
              <rect
                x={-56}
                y={-14}
                width={112}
                height={28}
                rx={5}
                fill={style.bg}
                stroke={style.border}
                strokeWidth={1}
              />
              {/* Label */}
              <text
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={10}
                fontFamily="'JetBrains Mono', monospace"
                fontWeight="500"
                fill={style.text}
              >
                {node.label}
              </text>
              {/* Type indicator dot */}
              <circle
                cx={-44}
                cy={-7}
                r={2.5}
                fill={style.text}
                opacity={0.7}
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}

// ─── Section Block ─────────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2
        className="text-xl font-bold pb-3 border-b"
        style={{ color: 'var(--text-primary)', borderColor: 'var(--bg-border)' }}
      >
        {title}
      </h2>
      {children}
    </section>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((p: Project) => p.id === id)

  if (!project) return <Navigate to="/" replace />

  const statusLabel = {
    active: 'Active',
    'in-progress': 'In Progress',
    experimental: 'Experimental',
  }[project.status]

  const statusColor = {
    active: '#22C55E',
    'in-progress': '#22D3EE',
    experimental: '#F59E0B',
  }[project.status]

  return (
    <div
      className="min-h-screen pt-24 pb-24"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="section-container">
        <div className="max-w-3xl">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm mb-10 group"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'
              }}
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to portfolio
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-14"
          >
            {/* ── Header ── */}
            <header className="space-y-5">
              {/* Number + status */}
              <div className="flex items-center gap-4">
                <span
                  className="font-mono text-4xl font-bold"
                  style={{ color: `${project.accentColor}30` }}
                >
                  {project.number}
                </span>
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: statusColor }}
                  />
                  <span
                    className="font-mono text-xs tracking-wide"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {statusLabel}
                  </span>
                </div>
              </div>

              {/* Title */}
              <div>
                <h1
                  className="text-4xl sm:text-5xl font-bold mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {project.title}
                </h1>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {project.tagline}
                </p>
              </div>

              {/* Category */}
              <p
                className="font-mono text-sm"
                style={{ color: project.accentColor }}
              >
                {project.category}
              </p>

              {/* CTA buttons */}
              <div className="flex gap-3 flex-wrap pt-1">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <Github size={15} />
                    View on GitHub
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                )}
              </div>
            </header>

            {/* ── Overview ── */}
            <Section title="Overview">
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {project.longDescription}
              </p>
            </Section>

            {/* ── Problem ── */}
            <Section title="The Problem">
              <div
                className="p-5 rounded-lg border-l-2"
                style={{
                  backgroundColor: `${project.accentColor}06`,
                  borderLeftColor: `${project.accentColor}50`,
                }}
              >
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {project.problem}
                </p>
              </div>
            </Section>

            {/* ── Why Built ── */}
            <Section title="Why I Built It">
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {project.whyBuilt}
              </p>
            </Section>

            {/* ── Architecture ── */}
            <Section title="Architecture">
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                {project.architecture}
              </p>
              {project.architectureNodes && project.architectureNodes.length > 0 && (
                <ArchitectureDiagram
                  nodes={project.architectureNodes}
                  accentColor={project.accentColor}
                />
              )}
            </Section>

            {/* ── Technologies ── */}
            <Section title="Technologies">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg border font-mono text-sm"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--bg-border)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Section>

            {/* ── Engineering Challenges ── */}
            <Section title="Engineering Challenges">
              <div className="space-y-4">
                {project.challenges.map((challenge, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-4 rounded-lg border"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--bg-border)',
                    }}
                  >
                    <span
                      className="font-mono text-sm font-semibold shrink-0 mt-0.5"
                      style={{ color: project.accentColor }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            {/* ── Learnings ── */}
            <Section title="What I Learned">
              <ul className="space-y-3">
                {project.learnings.map((learning, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-base leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <span
                      className="shrink-0 mt-1 text-xs"
                      style={{ color: project.accentColor }}
                    >
                      ›
                    </span>
                    {learning}
                  </li>
                ))}
              </ul>
            </Section>

            {/* ── Screenshots Placeholder ── */}
            <Section title="Screenshots / Demo">
              <div
                className="rounded-xl border border-dashed p-16 text-center"
                style={{
                  borderColor: 'var(--bg-border)',
                  backgroundColor: 'var(--bg-secondary)',
                }}
              >
                <p
                  className="font-mono text-sm mb-2"
                  style={{ color: 'var(--text-muted)', opacity: 0.6 }}
                >
                  screenshots and demo media
                </p>
                <p
                  className="text-xs"
                  style={{ color: 'var(--text-muted)', opacity: 0.4 }}
                >
                  Add images to{' '}
                  <code
                    className="px-1.5 py-0.5 rounded text-[11px]"
                    style={{ backgroundColor: 'var(--bg-elevated)' }}
                  >
                    public/projects/{project.id}/
                  </code>
                </p>
              </div>
            </Section>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
