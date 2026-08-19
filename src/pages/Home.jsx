import { Link } from 'react-router-dom'
import { ArrowRight, Download, MapPin, Briefcase, Clock } from 'lucide-react'
import WindowChrome from '../components/WindowChrome'
import ProjectCard from '../components/ProjectCard'
import profile from '../data/profile'
import projects from '../data/projects'

export default function Home() {
  const featured = projects.slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-16 sm:pt-24">
        <div className="blob -left-24 -top-24 h-72 w-72 bg-violet" />
        <div className="blob right-0 top-32 h-64 w-64 bg-coral" style={{ animationDelay: '2s' }} />
        <div className="blob left-1/3 bottom-0 h-56 w-56 bg-sunny" style={{ animationDelay: '4s' }} />

        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="animate-fade-up">
            {profile.openToWork && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-mint/10 px-3 py-1 font-mono text-xs font-medium text-mint-dark dark:text-mint-light">
                <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse" />
                Open to work
              </span>
            )}
            <h1 className="mt-4 text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
              Hi, I&apos;m {profile.name.split(' ')[0]}.
              <br />
              <span className="bg-gradient-to-r from-violet via-coral to-sunny bg-clip-text text-transparent">
                I love to develop and create.
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-ink-light/70 dark:text-ink-dark/70">
              {profile.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-ink-light px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:animate-wiggle dark:bg-white dark:text-ink-light"
              >
                View my projects <ArrowRight className="h-4 w-4" />
              </Link>
              
            </div>
          </div>

          {/* Terminal-style intro */}
          <WindowChrome path="~/about-me.sh" className="animate-fade-up" >
            <div className="space-y-2 p-5 font-mono text-sm leading-relaxed">
              <p className="text-mint-dark dark:text-mint">
                $ whoami
              </p>
              <p className="text-ink-light/80 dark:text-ink-dark/80">
                &gt; {profile.name} — {profile.role}
              </p>
              <p className="mt-3 text-mint-dark dark:text-mint">
                $ cat mission.txt
              </p>
              <p className="text-ink-light/80 dark:text-ink-dark/80">
                &gt; Looking for my next role as a software engineer.
              </p>
              <p className="mt-3 text-mint-dark dark:text-mint">
                $ status
                <span className="animate-blink">_</span>
              </p>

            </div>
          </WindowChrome>
        </div>

        {/* What I'm looking for */}
        <div className="relative mx-auto mt-14 max-w-6xl">
          <WindowChrome path="~/looking-for.json">
            <div className="grid gap-6 p-6 sm:grid-cols-2">
              <div className="flex items-start gap-2">
                <Briefcase className="mt-0.5 h-5 w-5 shrink-0 text-violet" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-light/50 dark:text-ink-dark/50">
                    Roles
                  </p>
                  <p className="text-sm">{profile.lookingFor.roles.join(', ')}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-coral" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-light/50 dark:text-ink-dark/50">
                    Setup
                  </p>
                  <p className="text-sm">{profile.lookingFor.setup.join(', ')}</p>
                </div>
              </div>

            </div>
          </WindowChrome>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-bold sm:text-3xl">Featured projects</h2>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 font-mono text-sm text-violet hover:underline dark:text-violet-light"
          >
            view all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>
    </div>
  )
}
