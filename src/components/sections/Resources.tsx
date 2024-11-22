import { useLanguage } from '../../context/LanguageContext'
import { useTheme } from '../../providers/ThemeProvider'
import theme from '../../config/theme'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const ResourceCard = ({ 
  title, 
  description, 
  type, 
  icon,
  link 
}: {
  title: string;
  description: string;
  type: string;
  icon: string;
  link: string;
}) => {
  const { theme: currentTheme } = useTheme()
  const isDark = currentTheme === 'dark'

  return (
    <a 
      href={link}
      className={`block p-6 rounded-lg hover:transform hover:-translate-y-1 
                  transition-all duration-300 group ${
        isDark 
          ? 'bg-slate-800 hover:shadow-lg hover:shadow-slate-700/50' 
          : 'bg-white hover:shadow-lg hover:shadow-gray-200/50'
      }`}
    >
      <div className="flex items-start space-x-4">
        <div 
          className="text-3xl group-hover:scale-110 transition-transform duration-300"
        >
          {icon}
        </div>
        <div>
          <div className={`text-sm mb-1 ${
            isDark ? 'text-indigo-400' : 'text-primary'
          }`}>
            {type}
          </div>
          <h3 className={`text-xl font-bold mb-2 ${
            isDark ? 'text-gray-100' : 'text-gray-900'
          }`}>
            {title}
          </h3>
          <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
            {description}
          </p>
        </div>
      </div>
    </a>
  )
}

const Resources = () => {
  const { t, dir } = useLanguage()
  const { theme: currentTheme } = useTheme()
  const isDark = currentTheme === 'dark'

  return (
    <section className={`py-20 relative ${
      isDark ? 'bg-slate-900' : 'bg-white'
    }`} dir={dir}>
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 opacity-5 ${
          isDark ? 'bg-gradient-to-br from-indigo-500/10 to-transparent' : ''
        }`} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-6 ${
              isDark ? 'text-gray-100' : 'text-gray-900'
            }`}
            style={{ fontFamily: theme.fonts.secondary }}
          >
            {t.resources.title}
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t.resources.subtitle}
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {t.resources.categories.map((category, index) => (
            <ResourceCard key={index} {...category} />
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 
            className={`text-2xl font-bold mb-8 text-center ${
              isDark ? 'text-gray-100' : 'text-gray-900'
            }`}
            style={{ fontFamily: theme.fonts.secondary }}
          >
            {t.resources.faq.title}
          </h3>
          <div className="space-y-4">
            {t.resources.faq.questions.map((faq, index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg transition-all duration-300 ${
                  isDark 
                    ? 'bg-slate-800 hover:shadow-lg hover:shadow-slate-700/50' 
                    : 'bg-white hover:shadow-lg hover:shadow-gray-200/50'
                }`}
                style={{ 
                  boxShadow: isDark ? theme.shadows.dark.sm : theme.shadows.light.sm
                }}
              >
                <h4 className={`font-bold mb-2 ${
                  isDark ? 'text-gray-100' : 'text-gray-900'
                }`}>
                  {faq.question}
                </h4>
                <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className={`mt-16 h-px w-full ${
          isDark 
            ? 'bg-gradient-to-r from-transparent via-slate-700 to-transparent'
            : 'bg-gradient-to-r from-transparent via-gray-200 to-transparent'
        }`} />

        <div className="text-center mt-12">
          <Link to="/resources">
            <Button 
              variant="outline"
              size="lg"
              className={`px-8 py-2 ${
                isDark 
                  ? 'border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white' 
                  : 'border-primary text-primary hover:bg-primary hover:text-white'
              }`}
            >
              {t.resources.viewAll}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Resources