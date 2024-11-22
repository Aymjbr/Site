import PageLayout from '../components/layout/PageLayout'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../providers/ThemeProvider'
import theme from '../config/theme'

const AboutPage = () => {
  const { t } = useLanguage()
  const { theme: currentTheme } = useTheme()
  const isDark = currentTheme === 'dark'

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
            {t.about.page.title}
          </h1>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 
            className={`text-3xl font-bold mb-4 ${
              isDark ? 'text-gray-100' : 'text-gray-900'
            }`}
          >
            {t.about.page.story.title}
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {t.about.page.story.description}
          </p>
        </div>

        {/* Mission Section */}
        <div 
          className="p-8 rounded-lg mb-16"
          style={{ 
            background: isDark
              ? 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)'
              : `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.accent} 100%)`
          }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white">
            {t.about.page.mission.title}
          </h2>
          <p className="text-lg text-white/90">
            {t.about.page.mission.description}
          </p>
        </div>

        {/* Team Section */}
        <div className={`p-8 rounded-lg mb-16 ${
          isDark ? 'bg-slate-800' : 'bg-gray-50'
        }`}>
          <h2 
            className={`text-3xl font-bold mb-4 ${
              isDark ? 'text-gray-100' : 'text-gray-900'
            }`}
          >
            {t.about.page.team.title}
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {t.about.page.team.description}
          </p>
        </div>

        {/* Commitment Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 
            className={`text-3xl font-bold mb-4 ${
              isDark ? 'text-gray-100' : 'text-gray-900'
            }`}
          >
            {t.about.page.commitment.title}
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {t.about.page.commitment.description}
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className={`max-w-3xl mx-auto p-8 rounded-lg ${
          isDark ? 'bg-slate-800' : 'bg-gray-50'
        }`}>
          <blockquote className="text-center">
            <p className={`text-xl italic mb-4 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              "{t.about.page.featuredTestimonial.quote}"
            </p>
            <footer className={isDark ? 'text-gray-400' : 'text-gray-500'}>
              <strong className={isDark ? 'text-gray-200' : 'text-gray-700'}>
                {t.about.page.featuredTestimonial.author}
              </strong>
              , {t.about.page.featuredTestimonial.position} - {t.about.page.featuredTestimonial.company}
            </footer>
          </blockquote>
        </div>
      </div>
    </PageLayout>
  )
}

export default AboutPage 