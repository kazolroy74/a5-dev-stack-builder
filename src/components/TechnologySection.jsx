import { useEffect, useState } from 'react'
import TechCard from './TechCard.jsx'
import StackSidebar from './StackSidebar.jsx'

// In a real app this would be your backend's URL, e.g.
// "https://api.yourapp.com/technologies". Here it points at a JSON file
// served from /public, but it's fetched over HTTP exactly the same way —
// swap this one string and the rest of the component doesn't change.
const TECHNOLOGIES_API_URL = '/data/technologies.json'

export default function TechnologySection({ stack, onAdd, onRemove, onRemoveAll }) {
  const [technologies, setTechnologies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // AbortController lets us cancel the request if the component unmounts
    // before the fetch finishes — good practice for real API calls.
    const controller = new AbortController()

    async function loadTechnologies() {
      setIsLoading(true)
      setError(null)
      try {
        const response = await fetch(TECHNOLOGIES_API_URL, { signal: controller.signal })
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }
        const data = await response.json()
        setTechnologies(data)
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError('Could not load technologies. Please try again.')
        }
      } finally {
        setIsLoading(false)
      }
    }

    loadTechnologies()
    return () => controller.abort()
  }, [])

  const selectedIds = new Set(stack.map((tech) => tech.id))

  return (
    <section id="technologies" className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-4xl font-extrabold text-slate-900">
        Explore the{' '}
        <span className="bg-brand-gradient bg-clip-text text-transparent">Technologies</span>
      </h2>
      <p className="mt-2 text-slate-500">
        Pick the technologies you want and build your ideal stack.
      </p>

      {isLoading && (
        <div className="flex flex-col items-center justify-center gap-3 py-24 text-slate-400">
          <span className="loading loading-spinner loading-lg text-pink-500" />
          <p className="text-sm">Loading technologies…</p>
        </div>
      )}

      {!isLoading && error && (
        <div className="mx-auto mt-10 max-w-md rounded-xl border border-red-200 bg-red-50 p-6 text-center text-sm text-red-600">
          {error}
        </div>
      )}

      {!isLoading && !error && (
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* 1 column on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
            {technologies.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                isSelected={selectedIds.has(tech.id)}
                onAdd={onAdd}
              />
            ))}
          </div>

          <StackSidebar stack={stack} onRemove={onRemove} onRemoveAll={onRemoveAll} />
        </div>
      )}
    </section>
  )
}
