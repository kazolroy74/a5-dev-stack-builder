import { useState } from 'react'
import logo from '../assets/logo.svg'

const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    // sticky + top-0 + z-40 keeps the navbar pinned while the page scrolls
    <header className="sticky top-0 z-40 border-b border-base-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ---------- DESKTOP NAVBAR (md and up) ---------- */}
        {/* logo left | links center | Sign In / Sign Up right */}
        <nav className="hidden items-center justify-between py-4 md:flex">
          <Logo />

          <ul className="flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link, index) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={index === 0 ? 'text-pink-600' : 'transition hover:text-slate-900'}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a href="#signin" className="text-sm font-medium text-slate-700">
              Sign In
            </a>
            <button className="btn-brand btn bg-brand-gradient rounded-full px-5 text-sm normal-case">
              Sign Up
            </button>
          </div>
        </nav>

        {/* ---------- MOBILE NAVBAR (below md) ---------- */}
        {/* hamburger left | logo center | Sign In / Sign Up right */}
        <nav className="grid grid-cols-3 items-center py-3 md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="btn btn-ghost btn-sm justify-self-start px-2"
          >
            {isMenuOpen ? (
              <span className="text-2xl leading-none">✕</span>
            ) : (
              <span className="flex flex-col gap-1">
                <span className="block h-0.5 w-5 bg-slate-900" />
                <span className="block h-0.5 w-5 bg-slate-900" />
                <span className="block h-0.5 w-5 bg-slate-900" />
              </span>
            )}
          </button>

          <div className="justify-self-center">
            <Logo compact />
          </div>

          <div className="flex items-center justify-end gap-2 justify-self-end">
            <a href="#signin" className="text-xs font-medium text-slate-700">
              Sign In
            </a>
            <button className="btn-brand btn btn-xs bg-brand-gradient rounded-full px-3 normal-case">
              Sign Up
            </button>
          </div>
        </nav>

        {/* Mobile dropdown menu — only rendered when the hamburger is open */}
        {isMenuOpen && (
          <div className="border-t border-base-200 py-3 md:hidden">
            <ul className="flex flex-col gap-3 text-sm font-medium text-slate-600">
              {navLinks.map((link, index) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={index === 0 ? 'text-pink-600' : 'transition hover:text-slate-900'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

function Logo({ compact = false }) {
  return (
    <a href="#" className="flex items-center gap-2">
      <img src={logo} alt="Dev Stack logo" className="h-8 w-8 rounded-lg" />
      {/* On the compact mobile logo we still show the name, just tighter */}
      <span className={`font-extrabold text-slate-900 ${compact ? 'text-base' : 'text-lg'}`}>
        Dev
        <span className="bg-brand-gradient bg-clip-text text-transparent">Stack</span>
      </span>
    </a>
  )
}
