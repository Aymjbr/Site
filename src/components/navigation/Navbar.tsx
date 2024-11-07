import { RefObject, useState, useEffect } from 'react'
import Logo from '../logo/Logo'
import theme from '../../config/theme'

interface NavbarProps {
  refs: {
    home: RefObject<HTMLDivElement>
    about: RefObject<HTMLDivElement>
    services: RefObject<HTMLDivElement>
    approach: RefObject<HTMLDivElement>
    caseStudies: RefObject<HTMLDivElement>
    resources: RefObject<HTMLDivElement>
    contact: RefObject<HTMLDivElement>
  }
}

const Navbar = ({ refs }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav 
      style={{ 
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(8px)',
        transition: theme.transitions.default
      }}
      className="fixed w-full z-50 py-4"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        
        <div className="hidden md:flex space-x-8">
          {Object.entries(refs).map(([key, ref]) => (
            <button
              key={key}
              onClick={() => scrollToSection(ref)}
              className="text-gray-800 hover:text-primary transition-colors bg-transparent relative group 
                         focus:outline-none focus:ring-0 active:outline-none appearance-none"
              style={{ 
                fontFamily: theme.fonts.primary,
                fontSize: theme.fontSizes.sm,
                padding: '0.5rem 1rem',
                border: 'none',
                outline: 'none',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
              <span 
                className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                style={{
                  transform: 'translateX(-50%)',
                }}
              />
            </button>
          ))}
        </div>

        <button 
          className="text-primary border-2 border-primary px-6 py-2 rounded-full hidden md:block
                     hover:bg-primary hover:text-white focus:outline-none focus:ring-0"
          style={{ 
            transition: theme.transitions.default,
            backgroundColor: 'transparent',
            WebkitTapHighlightColor: 'transparent',
          }}
          onClick={() => scrollToSection(refs.contact)}
        >
          Get Started
        </button>
      </div>
    </nav>
  )
}

export default Navbar 