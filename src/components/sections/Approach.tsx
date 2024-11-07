import { useLanguage } from '../../context/LanguageContext'
import { useTheme } from '../../providers/ThemeProvider'
import theme from '../../config/theme'

const ApproachStep = ({ 
  number, 
  title, 
  description, 
  icon 
}: {
  number: string;
  title: string;
  description: string;
  icon: string;
}) => {
  const { theme: currentTheme } = useTheme()
  const isDark = currentTheme === 'dark'

  return (
    <div className="relative group">
      {/* Connector Line */}
      <div 
        className={`hidden md:block absolute top-1/2 w-full h-0.5 -z-10 ${
          isDark ? 'bg-slate-700' : 'bg-gray-200'
        }`}
        style={{ transform: 'translateY(-50%)' }}
      />
      
      {/* Step Content */}
      <div className="flex flex-col items-center">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center text-white mb-4
                     group-hover:scale-110 transition-transform duration-300"
          style={{ 
            background: isDark
              ? 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)'
              : `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.accent} 100%)`
          }}
        >
          <span className="text-2xl">{icon}</span>
        </div>
        <div 
          className={`w-8 h-8 rounded-full flex items-center justify-center mb-4
                     border-2 ${isDark ? 'bg-slate-800 border-indigo-500' : 
                                       'bg-white border-primary'}`}
        >
          {number}
        </div>
        <h3 className={`text-xl font-bold mb-2 text-center ${
          isDark ? 'text-gray-100' : 'text-gray-900'
        }`}>
          {title}
        </h3>
        <p className={`text-center max-w-xs ${
          isDark ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {description}
        </p>
      </div>
    </div>
  )
}

const Approach = () => {
  const { t, dir } = useLanguage()
  const { theme: currentTheme } = useTheme()
  const isDark = currentTheme === 'dark'

  return (
    <section className={`py-20 ${isDark ? 'bg-slate-900' : 'bg-white'}`} dir={dir}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-6 ${
              isDark ? 'text-gray-100' : 'text-gray-900'
            }`}
            style={{ fontFamily: theme.fonts.secondary }}
          >
            {t.approach.title}
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t.approach.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {[
            {
              number: "01",
              title: t.approach.steps.analysis.title,
              description: t.approach.steps.analysis.description,
              icon: "🎯"
            },
            {
              number: "02",
              title: t.approach.steps.development.title,
              description: t.approach.steps.development.description,
              icon: "⚙️"
            },
            {
              number: "03",
              title: t.approach.steps.testing.title,
              description: t.approach.steps.testing.description,
              icon: "✓"
            },
            {
              number: "04",
              title: t.approach.steps.deployment.title,
              description: t.approach.steps.deployment.description,
              icon: "🚀"
            }
          ].map((step, index) => (
            <ApproachStep key={index} {...step} />
          ))}
        </div>

        {/* Methodology Details */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            className={`p-6 rounded-lg ${
              isDark ? 'bg-slate-800' : 'bg-white'
            }`}
            style={{ 
              boxShadow: isDark ? theme.shadows.dark.md : theme.shadows.light.md
            }}
          >
            <h3 
              className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-gray-100' : 'text-gray-900'
              }`}
              style={{ fontFamily: theme.fonts.secondary }}
            >
              {t.approach.methodology.title}
            </h3>
            <p className={`mb-4 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t.approach.methodology.description}
            </p>
            <ul className="space-y-2">
              {t.approach.methodology.features.map((feature, index) => (
                <li key={index} className={`flex items-center ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <span className={`mr-2 ${
                    isDark ? 'text-indigo-400' : 'text-primary'
                  }`}>•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div 
            className="p-6 rounded-lg text-white"
            style={{ 
              background: isDark
                ? 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)'
                : `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.accent} 100%)`
            }}
          >
            <h3 
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: theme.fonts.secondary }}
            >
              {t.approach.benefits.title}
            </h3>
            <p className="mb-4 text-white/90">
              {t.approach.benefits.description}
            </p>
            <ul className="space-y-2">
              {t.approach.benefits.list.map((benefit, index) => (
                <li key={index} className="flex items-center text-white/90">
                  <span className="mr-2">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Approach