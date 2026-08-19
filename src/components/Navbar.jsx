import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Menu, X } from 'lucide-react'
import { toggleMobileMenu, closeMobileMenu } from '../store/uiSlice'
import ThemeToggle from './ThemeToggle'
import profile from '../data/profile'

const tabs = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
]

function Tab({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      onClick={onClick}
      className={({ isActive }) =>
        `group relative flex items-center gap-2 rounded-t-lg px-4 py-2.5 font-mono text-sm transition-colors ${
          isActive
            ? 'bg-surface-light dark:bg-surface-dark text-ink-light dark:text-ink-dark'
            : 'text-ink-light/50 dark:text-ink-dark/50 hover:text-ink-light dark:hover:text-ink-dark'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span
            className={`h-1.5 w-1.5 rounded-full ${isActive ? 'bg-coral' : 'bg-transparent'}`}
          />
          {label}
          {isActive && (
            <span className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-violet via-coral to-sunny" />
          )}
        </>
      )}
    </NavLink>
  )
}

export default function Navbar() {
  const dispatch = useDispatch()
  const mobileMenuOpen = useSelector((s) => s.ui.mobileMenuOpen)

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink-light/10 bg-app-light/90 backdrop-blur-md dark:border-ink-dark/10 dark:bg-app-dark/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <NavLink to="/" className="flex items-center gap-2 py-3 font-display text-lg font-bold">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet to-coral font-mono text-xs text-white">
            {profile.name.split(' ').map((n) => n[0]).join('')}
          </span>
          {profile.name}
        </NavLink>

        {/* Desktop tabs */}
        <nav className="hidden items-end gap-1 sm:flex">
          {tabs.map((tab) => (
            <Tab key={tab.to} {...tab} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          {profile.openToWork && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-mint/10 px-3 py-1 font-mono text-xs font-medium text-mint-dark dark:text-mint-light">
              <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse" />
              Open to work
            </span>
          )}
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => dispatch(toggleMobileMenu())}
            aria-label="Toggle menu"
            className="p-2"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="flex flex-col gap-1 border-t-2 border-ink-light/10 px-4 pb-4 pt-2 dark:border-ink-dark/10 sm:hidden">
          {tabs.map((tab) => (
            <Tab key={tab.to} {...tab} onClick={() => dispatch(closeMobileMenu())} />
          ))}
        </nav>
      )}
    </header>
  )
}
