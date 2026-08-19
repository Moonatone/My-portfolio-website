import useInView from '../hooks/useInView'

const barColor = {
  violet: 'bg-violet',
  coral: 'bg-coral',
  mint: 'bg-mint',
  sunny: 'bg-sunny',
}

export default function SkillBar({ name, level, color = 'violet' }) {
  const [ref, isInView] = useInView({ threshold: 0.4 })

  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-baseline justify-between font-mono text-xs">
        <span className="text-ink-light/80 dark:text-ink-dark/80">{name}</span>
        <span className="text-ink-light/40 dark:text-ink-dark/40">
          {isInView ? level : 0}%
        </span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-ink-light/[0.07] dark:bg-ink-dark/[0.1]">
        <div
          className={`h-full rounded-full transition-all duration-[1200ms] ease-out ${barColor[color]}`}
          style={{ width: isInView ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}
