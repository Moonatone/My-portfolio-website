import { Briefcase, GraduationCap } from 'lucide-react'
import useInView from '../hooks/useInView'

export default function TimelineItem({ item, isLast = false }) {
  const [ref, isInView] = useInView({ threshold: 0.3 })
  const Icon = item.kind === 'education' ? GraduationCap : Briefcase
  const dot = item.kind === 'education' ? 'bg-mint' : 'bg-coral'

  return (
    <div ref={ref} className="relative flex gap-5 pb-10 last:pb-0">
      {!isLast && (
        <span className="absolute left-[15px] top-9 h-[calc(100%-2rem)] w-0.5 bg-ink-light/10 dark:bg-ink-dark/10" />
      )}
      <span
        className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${dot} text-white transition-transform duration-500 ${isInView ? 'scale-100' : 'scale-0'}`}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div
        className={`flex-1 pt-0.5 transition-all duration-500 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}
      >
        <span className="font-mono text-xs text-ink-light/40 dark:text-ink-dark/40">
          {item.date}
        </span>
        <h4 className="mt-0.5 font-semibold">{item.title}</h4>
        <p className="text-sm text-violet dark:text-violet-light">{item.org}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-light/70 dark:text-ink-dark/70">
          {item.description}
        </p>
      </div>
    </div>
  )
}
