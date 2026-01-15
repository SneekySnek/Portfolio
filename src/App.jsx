import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    // Set VITE_GA_MEASUREMENT_ID in your environment or .env file
    const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID
    if (GA_MEASUREMENT_ID) {
      ReactGA.initialize(GA_MEASUREMENT_ID)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
