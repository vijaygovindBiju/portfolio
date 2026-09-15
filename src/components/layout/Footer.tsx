import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="border-t"
      style={{ borderColor: 'var(--bg-border)', backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="section-container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
          <span
            className="font-mono text-xs font-medium"
            style={{ color: 'var(--accent)' }}
          >
            ~/portfolio
          </span>
          <span
            className="text-xs"
            style={{ color: 'var(--text-muted)' }}
          >
            Built with React · TypeScript · Vite · Tailwind · Framer Motion
          </span>
        </div>

        <div className="flex items-center gap-1">
          {[
            { icon: Github, label: 'GitHub',   href: 'https://github.com/yourusername' },
            { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
            { icon: Mail,   label: 'Email',    href: 'mailto:your@email.com' },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-md transition-colors"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.color = 'var(--accent)'
                ;(e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-elevated)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'
                ;(e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
              }}
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
      <div className="section-container pb-5 text-center">
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          &copy; {year} — Your Name
        </p>
      </div>
    </footer>
  )
}
