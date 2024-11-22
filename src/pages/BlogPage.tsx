import PageLayout from '../components/layout/PageLayout'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../providers/ThemeProvider'
import theme from '../config/theme'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'

const BlogCard = ({
  title,
  excerpt,
  category,
  date,
  image,
  link
}: {
  title: string
  excerpt: string
  category: string
  date: string
  image: string
  link: string
}) => {
  const { theme: currentTheme } = useTheme()
  const isDark = currentTheme === 'dark'

  return (
    <div className={`rounded-lg overflow-hidden ${
      isDark ? 'bg-slate-800' : 'bg-white'
    }`}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm
                        ${isDark ? 'bg-indigo-500' : 'bg-primary'} text-white`}>
          {category}
        </div>
      </div>

      <div className="p-6">
        <p className={`text-sm mb-2 ${
          isDark ? 'text-gray-400' : 'text-gray-500'
        }`}>
          {date}
        </p>
        <h3 className={`text-xl font-bold mb-2 ${
          isDark ? 'text-gray-100' : 'text-gray-900'
        }`}>
          {title}
        </h3>
        <p className={`mb-4 ${
          isDark ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {excerpt}
        </p>
        <a href={link}>
          <Button 
            variant="outline"
            className={`${
              isDark 
                ? 'border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white' 
                : 'border-primary text-primary hover:bg-primary hover:text-white'
            }`}
          >
            Read Article →
          </Button>
        </a>
      </div>
    </div>
  )
}

const BlogPage = () => {
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
            {t.blog.page.title}
          </h1>
          <p className={`text-lg max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t.blog.page.introduction}
          </p>
        </div>

        {/* Recent Articles */}
        <div className="mb-16">
          <h2 className={`text-2xl font-bold mb-8 ${
            isDark ? 'text-gray-100' : 'text-gray-900'
          }`}>
            {t.blog.page.recentArticles.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.blog.page.recentArticles.articles.map((article, index) => (
              <BlogCard
                key={index}
                {...article}
              />
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className={`p-8 rounded-lg text-center mb-16 ${
          isDark ? 'bg-slate-800' : 'bg-gray-50'
        }`}>
          <h2 className={`text-2xl font-bold mb-4 ${
            isDark ? 'text-gray-100' : 'text-gray-900'
          }`}>
            {t.blog.page.newsletter.title}
          </h2>
          <p className={`mb-6 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t.blog.page.newsletter.description}
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder={t.blog.page.newsletter.placeholderText}
              className={`flex-1 px-4 py-2 rounded-lg border ${
                isDark 
                  ? 'bg-slate-700 border-slate-600 text-gray-100' 
                  : 'bg-white border-gray-200'
              }`}
            />
            <Button>
              {t.blog.page.newsletter.buttonText}
            </Button>
          </div>
        </div>

        {/* Conclusion */}
        <div className="text-center max-w-3xl mx-auto">
          <p className={`mb-6 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t.blog.page.conclusion.text}
          </p>
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
              {t.blog.page.conclusion.contactText}
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}

export default BlogPage 