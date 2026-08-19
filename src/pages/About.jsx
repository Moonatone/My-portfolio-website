import WindowChrome from '../components/WindowChrome'
import SkillBar from '../components/SkillBar'
import TimelineItem from '../components/TimelineItem'
import profile from '../data/profile'
import skills from '../data/skills'
import experience from '../data/experience'

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold sm:text-4xl">About me</h1>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <WindowChrome path="~/bio.md">
          <div className="space-y-4 p-6 text-ink-light/80 dark:text-ink-dark/80">
            {profile.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 20)} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
            <p className="pt-2 font-mono text-xs text-ink-light/40 dark:text-ink-dark/40">
              {profile.location}
            </p>
          </div>
        </WindowChrome>

        <WindowChrome path="~/skills.json">
          <div className="grid gap-6 p-6 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.group}>
                <h3 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wide text-ink-light/50 dark:text-ink-dark/50">
                  {group.group}
                </h3>
                <div className="space-y-3.5">
                  {group.items.map((item) => (
                    <SkillBar
                      key={item.name}
                      name={item.name}
                      level={item.level}
                      color={group.color}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </WindowChrome>
      </div>

      <div className="mt-14">
        <h2 className="mb-8 text-2xl font-bold sm:text-3xl">Experience &amp; education</h2>
        <WindowChrome path="~/experience.log">
          <div className="p-6 sm:p-8">
            {experience.map((item, i) => (
              <TimelineItem key={item.id} item={item} isLast={i === experience.length - 1} />
            ))}
          </div>
        </WindowChrome>
      </div>
    </section>
  )
}
