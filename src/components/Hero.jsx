// Local asset import — Vite bundles this file and gives us a final URL.
import heroBanner from '../assets/banner-stack.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24"
    >
      <div>
        {/* Two-tone heading: plain text, then a line that uses the shared brand gradient */}
        <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          Build Your Ideal
          <br />
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="mt-6 max-w-md text-lg text-slate-500">
          Explore frontend, backend, database, and tooling options, compare them side by
          side, and put together the stack that fits your next project.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#technologies"
            className="btn-brand btn bg-brand-gradient rounded-lg px-6 normal-case"
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className="btn btn-outline rounded-lg border-slate-300 px-6 normal-case text-slate-700 hover:border-slate-900 hover:bg-transparent hover:text-slate-900"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Banner image — no card, border, or shadow behind it, so it sits
          flush against the page's white background with no visible edge */}
      <div className="relative mx-auto h-72 w-72 md:h-96 md:w-96">
        <img
          src={heroBanner}
          alt="Isometric illustration of a glowing tech stack with circuit boards"
          className="relative h-full w-full object-contain"
        />
      </div>
    </section>
  )
}
