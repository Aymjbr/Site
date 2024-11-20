import { useLanguage } from '../../context/LanguageContext'
import { useTheme } from '../../providers/ThemeProvider'
import theme from '../../config/theme'

const TestimonialCard = ({ 
  quote, 
  author, 
  position, 
  company,
  image 
}: {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}) => {
  const { theme: currentTheme } = useTheme()
  const isDark = currentTheme === 'dark'

  return (
    <div 
      className={`p-6 rounded-lg relative ${
        isDark 
          ? 'bg-slate-800' 
          : 'bg-white'
      }`}
    >
      {/* Quote mark decoration */}
      <div className={`absolute -top-4 left-6 text-4xl ${
        isDark ? 'text-indigo-500' : 'text-primary'
      }`}>
        "
      </div>
      
      <div className="flex flex-col h-full">
        <p className={`mb-6 text-lg italic ${
          isDark ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {quote}
        </p>
        
        <div className="mt-auto flex items-center">
          <img 
            src={image} 
            alt={author} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className={`font-bold ${
              isDark ? 'text-gray-100' : 'text-gray-900'
            }`}>
              {author}
            </h4>
            <p className={`text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {position}, {company}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Testimonials = () => {
  const { t, dir } = useLanguage()
  const { theme: currentTheme } = useTheme()
  const isDark = currentTheme === 'dark'

  return (
    <section className={`py-20 ${
      isDark ? 'bg-slate-900' : 'bg-white'
    }`} dir={dir}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-6 ${
              isDark ? 'text-gray-100' : 'text-gray-900'
            }`}
            style={{ fontFamily: theme.fonts.secondary }}
          >
            {t.testimonials.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              {...testimonial}
              image={`/images/testimonial-${index + 1}.jpg`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 