import { useRef } from 'react'
import Navbar from './components/navigation/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Approach from './components/sections/Approach'
import CaseStudies from './components/sections/CaseStudies'
import Resources from './components/sections/Resources'
import Contact from './components/sections/Contact'
import Footer from './components/navigation/Footer'
import theme from './config/theme'

function App() {
  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const approachRef = useRef<HTMLDivElement>(null)
  const caseStudiesRef = useRef<HTMLDivElement>(null)
  const resourcesRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  return (
    <div style={{ fontFamily: theme.fonts.primary }}>
      <Navbar 
        refs={{
          home: homeRef,
          about: aboutRef,
          services: servicesRef,
          approach: approachRef,
          caseStudies: caseStudiesRef,
          resources: resourcesRef,
          contact: contactRef
        }}
      />
      
      <main>
        <div ref={homeRef}>
          <Hero />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
        <div ref={approachRef}>
          <Approach />
        </div>
        <div ref={caseStudiesRef}>
          <CaseStudies />
        </div>
        <div ref={resourcesRef}>
          <Resources />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
