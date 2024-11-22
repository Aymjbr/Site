import { useLanguage } from '../../context/LanguageContext'
import { useTheme } from '../../providers/ThemeProvider'
import theme from '../../config/theme'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  features 
}: {
  title: string;
  description: string;
  icon: string;
  features: string[];
}) => {
  const { theme: currentTheme } = useTheme()
  const isDark = currentTheme === 'dark'

  return (
    <div 
      className={`p-6 rounded-lg hover:transform hover:-translate-y-1 
                  transition-all duration-300 ${
        isDark 
          ? 'bg-slate-800 hover:shadow-lg hover:shadow-slate-700/50' 
          : 'bg-white hover:shadow-lg hover:shadow-gray-200/50'
      }`}
      style={{ 
        boxShadow: isDark ? theme.shadows.dark.md : theme.shadows.light.md
      }}
    >
      <div className="text-4xl mb-4 transform transition-transform group-hover:scale-110">
        {icon}
      </div>
      <h3 className={`text-xl font-bold mb-2 ${
        isDark ? 'text-gray-100' : 'text-gray-900'
      }`}>
        {title}
      </h3>
      <p className={`mb-4 ${
        isDark ? 'text-gray-300' : 'text-gray-600'
      }`}>
        {description}
      </p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className={`flex items-center ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <span className={`mr-2 ${
              isDark ? 'text-indigo-400' : 'text-primary'
            }`}>✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

const Services = () => {
  const { t, dir } = useLanguage()
  const { theme: currentTheme } = useTheme()
  const isDark = currentTheme === 'dark'

  return (
    <section className={`py-20 ${
      isDark ? 'bg-slate-900/50' : 'bg-gray-50'
    }`} dir={dir}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-6 ${
              isDark ? 'text-gray-100' : 'text-gray-900'
            }`}
            style={{ fontFamily: theme.fonts.secondary }}
          >
            {t.services.title}
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: t.services.software.title,
              description: t.services.software.description,
              icon: "💻",
              features: t.services.software.features
            },
            {
              title: t.services.data.title,
              description: t.services.data.description,
              icon: "📊",
              features: t.services.data.features
            },
            {
              title: t.services.ai.title,
              description: t.services.ai.description,
              icon: "🤖",
              features: t.services.ai.features
            },
            {
              title: t.services.optimization.title,
              description: t.services.optimization.description,
              icon: "⚡",
              features: t.services.optimization.features
            }
          ].map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Optional: Add a gradient divider */}
        <div className={`mt-20 h-px w-full ${
          isDark 
            ? 'bg-gradient-to-r from-transparent via-slate-700 to-transparent'
            : 'bg-gradient-to-r from-transparent via-gray-200 to-transparent'
        }`} />

        <div className="text-center mt-12">
          <Link to="/services">
            <Button 
              variant="outline"
              size="lg"
              className={`px-8 py-2 ${
                isDark 
                  ? 'border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white' 
                  : 'border-primary text-primary hover:bg-primary hover:text-white'
              }`}
            >
              {t.services.viewAll}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services