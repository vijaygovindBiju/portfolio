import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'

const NAV_LINKS = [
  { label: 'Home',        href: '/' },
  { label: 'Projects',    href: '/#projects' },
  { label: 'Engineering', href: '/#engineering' },
  { label: 'About',       href: '/#about' },
  { label: 'Contact',     href: '/#contact' },
]

const GITHUB_URL = 'https://github.com/vijaygovindBiju'

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  const handleClick = (href: string) => {
    setMobileOpen(false)
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    if (href.startsWith('/#')) {
      const id = href.slice(2)
      if (location.pathname !== '/') {
        window.location.href = href
        return
      }
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const isLight = theme === 'light'

  return (
    <header
      style={{
        backgroundColor: scrolled || mobileOpen ? 'var(--nav-bg)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--bg-border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="section-container">
        <nav
          className="flex items-center justify-between h-16"
          aria-label="Main navigation"
        >
          {/* Logo — name */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
            aria-label="Go to homepage"
          >
            <span
              className="font-mono text-xs font-semibold tracking-widest uppercase"
              style={{ color: 'var(--accent)' }}
            >
              ~/
            </span>
            <span
              className="text-sm font-semibold tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              Vijaygovind Biju
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="btn-ghost text-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
              className="p-2 rounded-md transition-colors"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-elevated)'
                ;(e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
                ;(e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'
              }}
            >
              {isLight ? <Moon size={15} /> : <Sun size={15} />}
            </button>

            {/* GitHub CTA */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex btn-secondary text-sm py-1.5 px-3"
              style={{ borderColor: 'var(--bg-border)', color: 'var(--text-secondary)' }}
            >
              GitHub
            </a>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 rounded-md"
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
              style={{ color: 'var(--text-muted)' }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden overflow-hidden"
            style={{ borderTop: '1px solid var(--bg-border)', backgroundColor: 'var(--nav-bg)' }}
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {NAV_LINKS.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-left px-3 py-2.5 text-sm rounded-md transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={e => {
                    ;(e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-elevated)'
                    ;(e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'
                  }}
                  onMouseLeave={e => {
                    ;(e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
                    ;(e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'
                  }}
                >
                  {link.label}
                </button>
              ))}
              <div
                className="mt-2 pt-3"
                style={{ borderTop: '1px solid var(--bg-border)' }}
              >
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2.5 text-sm rounded-md transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
