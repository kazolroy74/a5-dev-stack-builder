export default function StackSidebar({ stack, onRemove, onRemoveAll }) {
  return (
    <div className="card sticky top-24 h-fit border border-base-200 bg-white shadow-sm">
      <div className="card-body gap-4 p-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
          <p className="text-sm text-slate-400">
            {stack.length} Technology Selected
          </p>
        </div>

        {stack.length === 0 ? (
          <p className="rounded-lg bg-base-200/60 p-4 text-center text-sm text-slate-400">
            No technologies selected yet. Add one from the list.
          </p>
        ) : (
          // 1-column list, as specified
          <ul className="flex flex-col gap-2">
            {stack.map((tech) => (
              <li
                key={tech.id}
                className="flex items-center justify-between rounded-lg border border-base-200 px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <img src={tech.icon} alt="" className="h-6 w-6 object-contain" />
                  <div>
                    <p className="text-sm font-semibold leading-tight text-slate-900">
                      {tech.name}
                    </p>
                    <p className="text-xs leading-tight text-slate-400">{tech.category}</p>
                  </div>
                </div>

                <button
                  aria-label={`Remove ${tech.name}`}
                  onClick={() => onRemove(tech)}
                  className="text-slate-400 transition hover:text-error"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={onRemoveAll}
          disabled={stack.length === 0}
          className="btn btn-outline btn-error mt-2 rounded-lg normal-case disabled:border-base-200 disabled:text-slate-300"
        >
          Remove All
        </button>
      </div>
    </div>
  )
}
