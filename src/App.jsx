import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TechnologySection from './components/TechnologySection.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [stack, setStack] = useState([])

  function handleAdd(tech) {
    const alreadyAdded = stack.some((item) => item.id === tech.id)

    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack`)
      return
    }

    setStack((prev) => [...prev, tech])
    toast.success(`${tech.name} added to your stack`)
  }

  function handleRemove(tech) {
    setStack((prev) => prev.filter((item) => item.id !== tech.id))
    toast.info(`${tech.name} removed from your stack`)
  }

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
