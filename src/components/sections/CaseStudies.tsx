import { useLanguage } from '../../context/LanguageContext'
import { useTheme } from '../../providers/ThemeProvider'
import theme from '../../config/theme'

// Import case study images
import caseStudy1 from '../../assets/images/case-study-1.jpg'
import caseStudy2 from '../../assets/images/case-study-2.jpg'
import caseStudy3 from '../../assets/images/case-study-3.jpg'

const CaseStudyCard = ({ 
  title, 
  description, 
  industry, 
  results, 
  image 
}: {
  title: string;
  description: string;
  industry: string;
  results: string[];
  image: string;
}) => {
  const { theme: currentTheme } = useTheme()
  const isDark = currentTheme === 'dark'

  return (
    <div 
      className={`rounded-lg overflow-hidden group hover:transform hover:-translate-y-1 
                  transition-all duration-300 ${
        isDark 
          ? 'bg-slate-800 hover:shadow-lg hover:shadow-slate-700/50' 
          : 'bg-white hover:shadow-lg hover:shadow-gray-200/50'
      }`}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute inset-0 flex items-center justify-center opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300 ${
          isDark 
            ? 'bg-indigo-500/50' 
            : 'bg-primary/50'
        }`}>
          <span className="text-white font-bold">{industry}</span>
        </div>
      </div>
      <div className="p-6">
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
        <div className="space-y-2">
          {results.map((result, index) => (
            <div key={index} className={`flex items-center ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <span className={`mr-2 ${
                isDark ? 'text-indigo-400' : 'text-primary'
              }`}>✓</span>
              {result}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const CaseStudies = () => {
  const { t, dir } = useLanguage()
  const { theme: currentTheme } = useTheme()
  const isDark = currentTheme === 'dark'

  // Array of case study images
  const caseStudyImages = [caseStudy1, caseStudy2, caseStudy3]

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
            {t.caseStudies.title}
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t.caseStudies.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.caseStudies.cases.map((caseStudy, index) => (
            <CaseStudyCard 
              key={index}
              {...caseStudy}
              image={caseStudyImages[index]}
            />
          ))}
        </div>

        {/* Results Overview */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {t.caseStudies.stats.map((stat, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg"
              style={{ 
                background: isDark
                  ? 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)'
                  : `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.accent} 100%)`
              }}
            >
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white text-opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies