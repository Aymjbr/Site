import { useLanguage } from '../../context/LanguageContext'
import { useTheme } from '../../providers/ThemeProvider'
import theme from '../../config/theme'

const Hero = () => {
  const { t, dir } = useLanguage()
  const { theme: currentTheme } = useTheme()
  const isDark = currentTheme === 'dark'

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden w-full"
      style={{ 
        background: isDark
          ? `linear-gradient(135deg, #1a1f35 0%, #0f172a 100%)`
          : `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.accent} 100%)`
      }}
      dir={dir}
    >
      <div className="section-content py-20 text-center relative z-10">
        <h1 
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
          style={{ fontFamily: theme.fonts.secondary }}
        >
          {t.hero.title}
        </h1>
        <p 
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90"
          style={{ fontFamily: theme.fonts.primary }}
        >
          {t.hero.subtitle}
        </p>
        <p 
          className="text-ml md:text-xl mb-8 max-w-2xl mx-auto text-white/90"
          style={{ fontFamily: theme.fonts.primary }}
        >
          {t.hero.description}
        </p>
        <div className="flex justify-center gap-4">
          <button className="hero-button-primary">
            {t.hero.getStarted}
          </button>
          <button className="hero-button-learn-more hovered-learn-more">
            {t.hero.learnMore}
          </button>
        </div>
      </div>
      
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className={`absolute w-96 h-96 rounded-full ${
          isDark ? 'bg-indigo-500' : 'bg-white'
        } -top-20 -left-20`}></div>
        <div className={`absolute w-96 h-96 rounded-full ${
          isDark ? 'bg-indigo-500' : 'bg-white'
        } -bottom-20 -right-20`}></div>
      </div>

      {/* Animated gradient overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: isDark
            ? 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)'
        }}
      ></div>
    </section>
  )
}

export default Hero