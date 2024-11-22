import PageLayout from '../components/layout/PageLayout'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../providers/ThemeProvider'
import theme from '../config/theme'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'

const CaseStudyCard = ({
  title,
  context,
  solution,
  results,
  industry,
  image
}: {
  title: string
  context: string
  solution: string
  results: string[]
  industry: string
  image: string
}) => {
  const { theme: currentTheme } = useTheme()
  const isDark = currentTheme === 'dark'

  return (
    <div className={`rounded-lg overflow-hidden mb-12 ${
      isDark ? 'bg-slate-800' : 'bg-white'
    }`}>
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute top-4 left-4 px-4 py-2 rounded-full ${
          isDark ? 'bg-indigo-500' : 'bg-primary'
        } text-white`}>
          {industry}
        </div>
      </div>

      <div className="p-8">
        <h3 className={`text-2xl font-bold mb-4 ${
          isDark ? 'text-gray-100' : 'text-gray-900'
        }`}>
          {title}
        </h3>

        <div className="space-y-6">
          <div>
            <h4 className={`font-bold mb-2 ${
              isDark ? 'text-indigo-400' : 'text-primary'
            }`}>
              Context
            </h4>
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              {context}
            </p>
          </div>

          <div>
            <h4 className={`font-bold mb-2 ${
              isDark ? 'text-indigo-400' : 'text-primary'
            }`}>
              OxDev Solution
            </h4>
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              {solution}
            </p>
          </div>

          <div>
            <h4 className={`font-bold mb-2 ${
              isDark ? 'text-indigo-400' : 'text-primary'
            }`}>
              Results
            </h4>
            <ul className="space-y-2">
              {results.map((result, index) => (
                <li 
                  key={index}
                  className={`flex items-center ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  <span className={`mr-2 ${
                    isDark ? 'text-indigo-400' : 'text-primary'
                  }`}>•</span>
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const CaseStudiesPage = () => {
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
            {t.caseStudies.page.title}
          </h1>
          <p className={`text-lg max-w-3xl mx-auto mb-4 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t.caseStudies.page.subtitle}
          </p>
          <p className={`text-lg max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t.caseStudies.page.introduction}
          </p>
        </div>

        {/* Case Studies */}
        <div className="max-w-4xl mx-auto">
          {t.caseStudies.page.studies.map((study, index) => (
            <CaseStudyCard
              key={index}
              {...study}
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
            {t.caseStudies.page.conclusion}
          </p>
        </div>

        {/* Contact Button */}
        <div className="text-center mt-12">
          <Link to="/contact">
            <Button 
              variant="outline"
              size="lg"
              className={`px-8 py-2 ${
                isDark 
                  ? 'border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white' 
                  : 'border-primary text-primary hover:bg-primary hover:text-white'
              }`}
            >
              {t.nav.contact}
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}

export default CaseStudiesPage 