import logo from '../assets/logo.svg'

const footerColumns = [
  { title: 'Product', links: ['Home', 'Technologies', 'Projects'] },
  { title: 'Company', links: ['About', 'Contact', 'Careers'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms of Service'] },
]

export default function Footer() {
  return (
    <footer className="border-t border-base-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Dev Stack logo" className="h-8 w-8 rounded-lg" />
            <span className="text-lg font-extrabold text-slate-900">
              Dev<span className="bg-brand-gradient bg-clip-text text-transparent">Stack</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-slate-500">
            Curated tools, technologies, and resources for developers building modern
            software.
          </p>
          <div className="mt-4 flex gap-4 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-slate-900">GitHub</a>
            <a href="#" className="hover:text-slate-900">Twitter</a>
            <a href="#" className="hover:text-slate-900">LinkedIn</a>
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">
              {column.title}
            </h4>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-slate-500">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-slate-900">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-base-200 px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-600">Privacy</a>
            <a href="#" className="hover:text-slate-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
