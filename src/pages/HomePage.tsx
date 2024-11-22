import { useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import Navbar from '../components/navigation/Navbar'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import CaseStudies from '../components/sections/CaseStudies'
import Contact from '../components/sections/Contact'
import Footer from '../components/navigation/Footer'
import theme from '../config/theme'
import Testimonials from '../components/sections/Testimonials'
import Blog from '../components/sections/Blog'

const HomePage = () => {
  // Your current AppContent code here
  const { dir } = useLanguage()
  const homeRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const caseStudiesRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const blogRef = useRef<HTMLDivElement>(null)

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
          testimonials: testimonialsRef,
          blog: blogRef,
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
        <div ref={testimonialsRef} className="w-full">
          <Testimonials />
        </div>
        <div ref={blogRef} className="w-full">
          <Blog />
        </div>
        <div ref={contactRef} className="w-full">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default HomePage 