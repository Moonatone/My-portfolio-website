import { Github, Linkedin, Mail } from 'lucide-react'
import profile from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink-light/10 dark:border-ink-dark/10 mt-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-mono text-xs text-ink-light/50 dark:text-ink-dark/50">
          {'// built with React, Redux Toolkit & Tailwind CSS'}
        </p>
        <div className="flex items-center gap-3">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-light/5 text-ink-light/60 transition-all hover:-translate-y-0.5 hover:bg-violet/10 hover:text-violet dark:bg-ink-dark/10 dark:text-ink-dark/60 dark:hover:text-violet-light"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-light/5 text-ink-light/60 transition-all hover:-translate-y-0.5 hover:bg-coral/10 hover:text-coral dark:bg-ink-dark/10 dark:text-ink-dark/60 dark:hover:text-coral-light"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={profile.social.email}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-light/5 text-ink-light/60 transition-all hover:-translate-y-0.5 hover:bg-sunny/10 hover:text-sunny-dark dark:bg-ink-dark/10 dark:text-ink-dark/60 dark:hover:text-sunny"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
