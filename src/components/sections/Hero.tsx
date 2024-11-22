import { useState, useEffect } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { useTheme } from '../../providers/ThemeProvider'
import theme from '../../config/theme'
import { Button } from '../ui/button'

// Fallback images from the internet
const fallbackImages = [
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',  // Tech/Data visualization
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',  // Modern office
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',  // Code
  'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80',  // Tech abstract
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80'   // Team working
]

const Hero = () => {
  const { t, dir } = useLanguage()
  const { theme: currentTheme } = useTheme()
  const isDark = currentTheme === 'dark'
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === fallbackImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 10000) // Change image every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen" dir={dir}>
      {/* Background Images */}
      {fallbackImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Hero ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            style={{ fontFamily: theme.fonts.secondary }}
          >
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {t.hero.subtitle}
          </p>
          <p className="text-lg mb-12 text-gray-300">
            {t.hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className={`px-8 ${
                isDark 
                  ? 'bg-indigo-500 hover:bg-indigo-600' 
                  : 'bg-primary hover:bg-primary/90'
              } text-white`}
            >
              {t.hero.getStarted}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 border-white text-white hover:bg-white hover:text-gray-900"
            >
              {t.hero.learnMore}
            </Button>
          </div>
        </div>

        {/* Image indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {fallbackImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white w-4' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero