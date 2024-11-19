import { useRef } from 'react'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { ThemeProvider } from './providers/ThemeProvider'
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

function AppContent() {
  const { dir } = useLanguage()
  const homeRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const approachRef = useRef<HTMLDivElement>(null)
  const caseStudiesRef = useRef<HTMLDivElement>(null)
  const resourcesRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  return (
    <div 
      style={{ 
        fontFamily: theme.fonts.primary,
        direction: dir,
      }}
      className={`min-h-screen w-full ${dir === 'rtl' ? 'rtl' : 'ltr'}`}
    >
      <Navbar 
        refs={{
          home: homeRef,
          services: servicesRef,
          about: aboutRef,
          caseStudies: caseStudiesRef,
          approach: approachRef,
          resources: resourcesRef,
          contact: contactRef
        }}
      />
      
      <main className="flex flex-col items-center w-full">
        <div ref={homeRef} className="w-full">
          <Hero />
        </div>
        <div ref={servicesRef} className="w-full">
          <Services />
        </div>
        <div ref={aboutRef} className="w-full">
          <About />
        </div>
        <div ref={caseStudiesRef} className="w-full">
          <CaseStudies />
        </div>
        <div ref={approachRef} className="w-full">
          <Approach />
        </div>
        <div ref={resourcesRef} className="w-full">
          <Resources />
        </div>
        <div ref={contactRef} className="w-full">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
