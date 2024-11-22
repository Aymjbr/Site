import PageLayout from '../components/layout/PageLayout'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../providers/ThemeProvider'
import theme from '../config/theme'

const ServiceSection = ({
  title,
  subtitle,
  description,
  keyPoints,
  icon
}: {
  title: string
  subtitle: string
  description: string
  keyPoints: string[]
  icon: string
}) => {
  const { theme: currentTheme } = useTheme()
  const isDark = currentTheme === 'dark'

  return (
    <div className={`p-8 rounded-lg mb-12 ${
      isDark ? 'bg-slate-800' : 'bg-gray-50'
    }`}>
      <div className="flex items-center gap-4 mb-4">
        <span className="text-4xl">{icon}</span>
        <div>
          <h2 className={`text-2xl font-bold ${
            isDark ? 'text-gray-100' : 'text-gray-900'
          }`}>
            {title}
          </h2>
          <p className={`text-lg ${
            isDark ? 'text-indigo-400' : 'text-primary'
          }`}>
            {subtitle}
          </p>
        </div>
      </div>

      <p className={`mb-6 ${
        isDark ? 'text-gray-300' : 'text-gray-600'
      }`}>
        {description}
      </p>

      <ul className="space-y-2">
        {keyPoints.map((point, index) => (
          <li 
            key={index}
            className={`flex items-center ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            <span className={`mr-2 ${
              isDark ? 'text-indigo-400' : 'text-primary'
            }`}>•</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

const ServicesPage = () => {
  const { t } = useLanguage()
  const { theme: currentTheme } = useTheme()
  const isDark = currentTheme === 'dark'

  const services = [
    { ...t.services.page.software, icon: "💻" },
    { ...t.services.page.data, icon: "📊" },
    { ...t.services.page.ai, icon: "🤖" },
    { ...t.services.page.optimization, icon: "⚡" }
  ]

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-gray-100' : 'text-gray-900'
            }`}
            style={{ fontFamily: theme.fonts.secondary }}
          >
            {t.services.page.title}
          </h1>
          <p className={`text-lg max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t.services.page.introduction}
          </p>
        </div>

        {/* Services Sections */}
        <div className="max-w-4xl mx-auto">
          {services.map((service, index) => (
            <ServiceSection
              key={index}
              {...service}
            />
          ))}
        </div>

        {/* Conclusion */}
        <div 
          className="max-w-3xl mx-auto mt-16 p-8 rounded-lg text-white text-center"
          style={{ 
            background: isDark
              ? 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)'
              : `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.accent} 100%)`
          }}
        >
          <p className="text-lg">
            {t.services.page.conclusion}
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

export default ServicesPage 