import { useLanguage } from '../../context/LanguageContext'
import { useTheme } from '../../providers/ThemeProvider'
import theme from '../../config/theme'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const About = () => {
  const { t, dir } = useLanguage()
  const { theme: currentTheme } = useTheme()
  const isDark = currentTheme === 'dark'

  const values = [
    {
      title: t.about.values.expertise.title,
      description: t.about.values.expertise.description,
      icon: "🚀"
    },
    {
      title: t.about.values.personalization.title,
      description: t.about.values.personalization.description,
      icon: "⭐"
    },
    {
      title: t.about.values.innovation.title,
      description: t.about.values.innovation.description,
      icon: "🤝"
    },
    {
      title: t.about.values.customer.title,
      description: t.about.values.customer.description,
      icon: "🤝"
    }
  ]

  return (
    <section 
      className={`py-20 ${isDark ? 'bg-slate-900' : 'bg-white'}`} 
      dir={dir}
    >
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-6 ${
              isDark ? 'text-gray-100' : 'text-gray-900'
            }`}
            style={{ fontFamily: theme.fonts.secondary }}
          >
            {t.about.title}
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t.about.description}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div 
              key={index}
              className={`p-6 rounded-lg text-center hover:transform hover:-translate-y-1 
                         transition-all duration-300 ${
                isDark 
                  ? 'bg-slate-800 hover:shadow-lg hover:shadow-slate-700/50' 
                  : 'bg-white hover:shadow-lg hover:shadow-gray-200/50'
              }`}
              style={{ 
                boxShadow: isDark ? theme.shadows.dark.sm : theme.shadows.light.sm
              }}
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className={`text-xl font-bold mb-2 ${
                isDark ? 'text-gray-100' : 'text-gray-900'
              }`}>
                {value.title}
              </h3>
              <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div 
          className="p-8 rounded-lg"
          style={{ 
            background: isDark
              ? 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)'  // Indigo gradient
              : `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.accent} 100%)`
          }}
        >
          <h3 
            className="text-2xl font-bold mb-4 text-center text-white"
            style={{ fontFamily: theme.fonts.secondary }}
          >
            {t.about.mission.title}
          </h3>
          <p className="text-center max-w-2xl mx-auto text-white/90">
            {t.about.mission.description}
          </p>
        </div>

        {/* Add this after the mission statement */}
        <div className="text-center mt-12">
          <Link to="/about">
            <Button 
              variant="outline"
              size="lg"
              className={`px-8 py-2 ${
                isDark 
                  ? 'border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white' 
                  : 'border-primary text-primary hover:bg-primary hover:text-white'
              }`}
            >
              {t.about.learnMore}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About