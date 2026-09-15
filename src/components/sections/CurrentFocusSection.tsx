import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { currentFocus } from '@/data/portfolio'

export default function CurrentFocusSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="focus" className="py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-mono text-accent uppercase tracking-widest mb-3">Currently Building</p>
            <h2 className="text-2xl font-semibold dark:text-white text-gray-900 mb-8">
              What I'm focused on right now
            </h2>
          </motion.div>

          <div className="space-y-3">
            {currentFocus.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4 p-4 rounded-lg border border-surface-border bg-surface-elevated hover:border-accent/30 transition-colors"
              >
                <span className="mt-0.5 text-accent font-mono text-sm shrink-0">0{i + 1}</span>
                <div>
                  <p className="text-sm font-medium dark:text-white text-gray-900">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
