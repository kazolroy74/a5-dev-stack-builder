import { useState } from 'react'

// Renders a row of 5 stars, filling them based on the rating (e.g. 4.8 -> 4 full + 1 half-ish, simplified to rounded).
function Stars({ rating }) {
  const fullStars = Math.round(rating)
  return (
    <span className="flex items-center gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < fullStars ? 'opacity-100' : 'opacity-25'}>
          ★
        </span>
      ))}
    </span>
  )
}

export default function TechCard({ tech, isSelected, onAdd }) {
  const [iconFailed, setIconFailed] = useState(false)

  return (
    <div
      className={`card relative bg-white shadow-sm transition ${
        isSelected
          ? 'border-2 border-pink-500 shadow-lg shadow-pink-100 ring-2 ring-pink-100'
          : 'border border-base-200 hover:shadow-md'
      }`}
    >
      {isSelected && (
        <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-pink-500 text-xs font-bold text-white shadow">
          ✓
        </span>
      )}  <div className="card-body gap-3 p-6">
        <div className="flex items-start justify-between">
          {/* Icon, with a text-avatar fallback in case the icon URL fails to load */}
          {iconFailed ? (
            <span className="bg-brand-gradient grid h-10 w-10 place-items-center rounded-lg text-sm font-bold text-white">
              {tech.name.slice(0, 2).toUpperCase()}
            </span>
          ) : (
            <img
              src={tech.icon}
              alt={`${tech.name} logo`}
              className="h-10 w-10 object-contain"
              onError={() => setIconFailed(true)}
            />
          )}

          <span className="badge badge-outline badge-sm font-medium text-slate-600">
            {tech.badge}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900">{tech.name}</h3>
        <p className="text-sm leading-relaxed text-slate-500">{tech.description}</p>

        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-500">
          {/* Category chip */}
          <span className="rounded-md bg-base-200 px-2 py-1 font-medium">{tech.category}</span>
          {/* Difficulty */}
          <span>{tech.difficulty}</span>
          {/* Rating with stars */}
          <span className="ml-auto flex items-center gap-1 font-semibold text-slate-700">
            <Stars rating={tech.rating} />
            {tech.rating.toFixed(1)}
          </span>
        </div>

        <button
          onClick={() => onAdd(tech)}
          disabled={isSelected}
          className={`btn mt-2 rounded-lg normal-case ${
            isSelected
              ? 'btn-disabled border-none bg-green-100 text-green-700'
              : 'btn-brand bg-brand-gradient'
          }`}
        >
          {isSelected ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  )
}
