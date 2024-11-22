import { RefObject, useState, useEffect } from 'react'
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Globe, Moon, Sun, ChevronDown } from "lucide-react"
import Logo from '../logo/Logo'
import theme from '../../config/theme'
import { useLanguage } from '../../context/LanguageContext'
import { useTheme } from '../../providers/ThemeProvider'

interface NavbarProps {
  refs: {
    home: RefObject<HTMLDivElement>
    about: RefObject<HTMLDivElement>
    services: RefObject<HTMLDivElement>
    caseStudies: RefObject<HTMLDivElement>
    testimonials: RefObject<HTMLDivElement>
    blog: RefObject<HTMLDivElement>
    contact: RefObject<HTMLDivElement>
  }
}

const Navbar = ({ refs }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t, dir } = useLanguage()
  const { theme: currentTheme, setTheme } = useTheme()
  const isDark = currentTheme === 'dark'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  const navItems = {
    home: t.nav.home,
    about: t.nav.about,
    services: t.nav.services,
    caseStudies: t.nav.caseStudies,
    contact: t.nav.contact,
    testimonials: t.nav.testimonials,
    blog: t.nav.blog
  }

  return (
    <nav 
      style={{ 
        backgroundColor: isScrolled 
          ? isDark 
            ? 'rgba(15, 23, 42, 0.9)'  // dark.background with opacity
            : 'rgba(255, 255, 255, 0.9)'
          : isDark
            ? 'rgba(15, 23, 42, 0.7)'
            : 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(8px)',
        transition: theme.transitions.default
      }}
      className={`fixed w-full z-50 py-4 ${
        isDark ? 'text-gray-100' : 'text-gray-900'
      }`}
      dir={dir}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden bg-transparent hover:bg-transparent focus:ring-0 focus:outline-none
                       ${isDark ? 'text-gray-100' : 'text-gray-900'}`}
          >
            {isMobileMenuOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </Button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {Object.entries(refs).map(([key, ref]) => (
              <button
                key={key}
                onClick={() => scrollToSection(ref)}
                className={`relative px-2 py-2 hover:text-primary transition-colors 
                         bg-transparent focus:outline-none focus:ring-0 group
                         ${isDark ? 'text-gray-100 hover:text-indigo-400' : 
                                  'text-gray-900 hover:text-primary'}`}
                style={{ 
                  fontFamily: theme.fonts.primary,
                  fontSize: theme.fontSizes.sm,
                }}
              >
                {navItems[key as keyof typeof navItems]}
                <span 
                  className={`absolute bottom-0 left-1/2 w-0 h-0.5 
                           group-hover:w-full transition-all duration-300 -translate-x-1/2
                           ${isDark ? 'bg-indigo-400' : 'bg-primary'}`}
                />
              </button>
            ))}

            {/* Settings Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`bg-transparent hover:bg-transparent focus:ring-0 focus:outline-none 
                             inline-flex items-center gap-1 px-2
                             ${isDark ? 'text-gray-100' : 'text-gray-900'}`}
                >
                  <Globe size={20} />
                  <span className="font-medium">{language}</span>
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className={`w-[150px] ${
                  isDark 
                    ? 'bg-slate-800 text-gray-100 border-slate-700' 
                    : 'bg-white text-gray-900'
                }`}
              >
                {/* Language Options */}
                <DropdownMenuItem 
                  onClick={() => setLanguage('EN')}
                  className={`flex items-center justify-between ${
                    isDark ? 'hover:bg-slate-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <span>🇺🇸 English</span>
                  {language === 'EN' && '✓'}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage('FR')}
                  className={`flex items-center justify-between ${
                    isDark ? 'hover:bg-slate-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <span>🇫🇷 Français</span>
                  {language === 'FR' && '✓'}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage('AR')}
                  className={`flex items-center justify-between ${
                    isDark ? 'hover:bg-slate-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <span>🇲🇦 العربية</span>
                  {language === 'AR' && '✓'}
                </DropdownMenuItem>
                
                <DropdownMenuItem
                  onClick={() => setTheme(isDark ? 'light' : 'dark')}
                  className={`flex items-center justify-between ${
                    isDark ? 'hover:bg-slate-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isDark ? <Sun size={16} /> : <Moon size={16} />}
                    {isDark ? 'Light Mode' : 'Dark Mode'}
                  </span>
                  {isDark ? '✓' : ''}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button 
              variant="outline"
              onClick={() => scrollToSection(refs.contact)}
              className={`bg-transparent hover:bg-primary hover:text-white 
                       focus:ring-0 focus:outline-none transition-colors
                       ${isDark 
                         ? 'border-indigo-400 text-indigo-400 hover:bg-indigo-500 hover:border-indigo-500' 
                         : 'border-primary text-primary'}`}
            >
              {t.nav.getStarted}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden mt-4 backdrop-blur-sm rounded-lg shadow-lg py-4
                          ${isDark 
                            ? 'bg-slate-800/95 text-gray-100' 
                            : 'bg-white/95 text-gray-900'}`}>
            <div className="flex flex-col space-y-2">
              {Object.entries(refs).map(([key, ref]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(ref)}
                  className={`px-4 py-2 text-left bg-transparent focus:ring-0 focus:outline-none
                             ${isDark 
                               ? 'hover:bg-slate-700/50' 
                               : 'hover:bg-gray-100/50'}`}
                >
                  {navItems[key as keyof typeof navItems]}
                </button>
              ))}
              
              <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
                <div className="flex space-x-2">
                  {['EN', 'FR', 'AR'].map((lang) => (
                    <Button
                      key={lang}
                      variant={language === lang ? "default" : "ghost"}
                      onClick={() => setLanguage(lang as 'EN' | 'FR' | 'AR')}
                      size="sm"
                      className={`${
                        language === lang 
                          ? isDark 
                            ? 'bg-indigo-500 text-white' 
                            : ''
                          : 'bg-transparent'
                      }`}
                    >
                      {lang}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="px-4 py-2">
                <Button
                  variant={isDark ? "default" : "ghost"}
                  onClick={() => setTheme(isDark ? 'light' : 'dark')}
                  size="sm"
                  className={`flex items-center justify-between ${
                    isDark 
                        ? 'bg-indigo-500 text-white hover:bg-indigo-600' 
                        : 'bg-transparent hover:bg-gray-100'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isDark ? <Sun size={16} /> : <Moon size={16} />}
                    {isDark ? 'Light Mode' : 'Dark Mode'}
                  </span>
                  {isDark ? '✓' : ''}
                </Button>
              </div>

              <Button 
                variant="outline"
                className={`mx-4 bg-transparent focus:ring-0 focus:outline-none
                           ${isDark 
                             ? 'border-indigo-400 text-indigo-400 hover:bg-indigo-500 hover:text-white hover:border-indigo-500' 
                             : 'border-primary text-primary hover:bg-primary hover:text-white'}`}
                onClick={() => scrollToSection(refs.contact)}
              >
                {t.nav.getStarted}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar