import { useDispatch, useSelector } from 'react-redux'
import { Sun, Moon } from 'lucide-react'
import { toggleTheme } from '../store/themeSlice'

export default function ThemeToggle() {
  const dispatch = useDispatch()
  const mode = useSelector((s) => s.theme.mode)
  const isDark = mode === 'dark'

  return (
    <button
      type="button"
      onClick={() => dispatch(toggleTheme())}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="relative flex h-9 w-16 items-center rounded-full bg-ink-light/10 dark:bg-ink-dark/15 px-1 transition-colors hover:bg-ink-light/15 dark:hover:bg-ink-dark/20"
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full bg-white dark:bg-surface-dark shadow-md transition-transform duration-300 ${isDark ? 'translate-x-7' : 'translate-x-0'}`}
      >
        {isDark ? (
          <Moon className="h-4 w-4 text-violet-light" />
        ) : (
          <Sun className="h-4 w-4 text-sunny-dark" />
        )}
      </span>
    </button>
  )
}
