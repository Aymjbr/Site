import { useLanguage } from '../../context/LanguageContext'
import { useTheme } from '../../providers/ThemeProvider'
import theme from '../../config/theme'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

// Import blog post images
import blogPost1 from '../../assets/images/blog-1.jpg'
import blogPost2 from '../../assets/images/blog-2.jpg'
import blogPost3 from '../../assets/images/blog-3.jpg'
import blogPost4 from '../../assets/images/blog-4.jpg'
import blogPost5 from '../../assets/images/blog-5.jpg'

const BlogCard = ({ 
  title, 
  excerpt, 
  date, 
  category,
  image,
  readMoreText 
}: {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readMoreText: string;
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
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm
                        ${isDark ? 'bg-indigo-500 text-white' : 'bg-primary text-white'}`}>
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
        <Button 
          variant="outline"
          className={`${
            isDark 
              ? 'border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white' 
              : 'border-primary text-primary hover:bg-primary hover:text-white'
          }`}
        >
          {readMoreText} →
        </Button>
      </div>
    </div>
  )
}

const Blog = () => {
  const { t, dir } = useLanguage()
  const { theme: currentTheme } = useTheme()
  const isDark = currentTheme === 'dark'

  // Array of blog post images
  const blogImages = [blogPost1, blogPost2, blogPost3, blogPost4, blogPost5]

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
            {t.blog.title}
          </h2>
          <p className={`text-lg max-w-3xl mx-auto mb-8 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t.blog.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {t.blog.page.recentArticles.articles.map((post, index) => (
            <BlogCard 
              key={index}
              {...post}
              image={blogImages[index]}
              readMoreText={t.blog.readMore}
            />
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog">
            <Button 
              variant="outline"
              size="lg"
              className={`px-8 py-2 ${
                isDark 
                  ? 'border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white' 
                  : 'border-primary text-primary hover:bg-primary hover:text-white'
              }`}
            >
              {t.blog.visitBlog}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blog 