import { useRef, useEffect } from 'react'
import { useTheme } from '../../providers/ThemeProvider'
import { useLanguage } from '../../context/LanguageContext'
import Footer from '../navigation/Footer'
import theme from '../../config/theme'
import Navbar from '../navigation/Navbar'

interface PageLayoutProps {
  children: React.ReactNode
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const { dir } = useLanguage()
  const { theme: currentTheme } = useTheme()
  const isDark = currentTheme === 'dark'
  const homeRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const caseStudiesRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const blogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div 
      style={{ 
        fontFamily: theme.fonts.primary,
        direction: dir,
      }}
      className={`min-h-screen w-full ${dir === 'rtl' ? 'rtl' : 'ltr'} ${
        isDark ? 'bg-slate-900 text-gray-100' : 'bg-white text-gray-900'
      }`}
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
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default PageLayout 