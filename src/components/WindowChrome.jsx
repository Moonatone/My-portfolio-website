export default function WindowChrome({ path, children, className = '' }) {
  return (
    <div
      className={`rounded border-2 border-ink-light/10 dark:border-ink-dark/10 bg-surface-light dark:bg-surface-dark overflow-hidden shadow-lg shadow-violet/5 ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-2.5 bg-ink-light/[0.03] dark:bg-ink-dark/[0.04] border-b-2 border-ink-light/10 dark:border-ink-dark/10">

        {path && (
          <span className="ml-2 truncate font-mono text-xs text-ink-light/50 dark:text-ink-dark/50">
            {path}
          </span>
        )}
      </div>
      <div>{children}</div>
    </div>
  )
}
