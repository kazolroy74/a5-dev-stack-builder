import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TechnologySection from './components/TechnologySection.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [stack, setStack] = useState([])

  // Called when "Add to Stack" is clicked on a card.
  function handleAdd(tech) {
    const alreadyAdded = stack.some((item) => item.id === tech.id)

    if (alreadyAdded) {
      // Same technology can't be added twice — warn instead of adding again.
      toast.warning(`${tech.name} is already in your stack`)
      return
    }

    setStack((prev) => [...prev, tech])
    toast.success(`${tech.name} added to your stack`)
  }

  // Called when the ✕ button is clicked on a single item in the sidebar.
  function handleRemove(tech) {
    setStack((prev) => prev.filter((item) => item.id !== tech.id))
    toast.info(`${tech.name} removed from your stack`)
  }

  // Called when "Remove All" is clicked.
  function handleRemoveAll() {
    if (stack.length === 0) return
    setStack([])
    toast.info('Your stack has been cleared')
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <TechnologySection
        stack={stack}
        onAdd={handleAdd}
        onRemove={handleRemove}
        onRemoveAll={handleRemoveAll}
      />

      <Footer />

      <ToastContainer position="bottom-right" autoClose={2500} theme="light" />
    </div>
  )
}
