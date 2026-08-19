import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Search } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import projectsData, { categories } from '../data/projects'
import { setFilter, setSearchQuery } from '../store/projectsSlice'

export default function Projects() {
  const dispatch = useDispatch()
  const { activeFilter, searchQuery } = useSelector((s) => s.projects)

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return projectsData.filter((p) => {
      const matchesCategory = activeFilter === 'All' || p.category === activeFilter
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.stack.some((t) => t.toLowerCase().includes(q))
      return matchesCategory && matchesQuery
    })
  }, [activeFilter, searchQuery])

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Projects</h1>
      </div>

      {/* Search */}
      <div className="relative mt-8 max-w-sm">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-light/40 dark:text-ink-dark/40" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          placeholder="Search by name or tech..."
          className="w-full rounded-full border-2 border-ink-light/10 bg-surface-light py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-violet dark:border-ink-dark/10 dark:bg-surface-dark dark:focus:border-violet-light"
        />
      </div>

      {/* Category chips */}
      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => dispatch(setFilter(cat))}
            className={`rounded-full px-4 py-1.5 font-mono text-sm font-medium transition-colors ${
              activeFilter === cat
                ? 'bg-ink-light text-white dark:bg-white dark:text-ink-light'
                : 'bg-ink-light/5 text-ink-light/60 hover:bg-ink-light/10 dark:bg-ink-dark/10 dark:text-ink-dark/60 dark:hover:bg-ink-dark/15'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      ) : (
        <div className="mt-16 text-center font-mono text-sm text-ink-light/50 dark:text-ink-dark/50">
          No projects match "{searchQuery}" in {activeFilter}. Try a different search.
        </div>
      )}
    </section>
  )
}
