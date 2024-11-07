import { useLanguage } from '../../context/LanguageContext'
import { useTheme } from '../../providers/ThemeProvider'
import theme from '../../config/theme'
import Logo from '../logo/Logo'

const Footer = () => {
  const { t, dir } = useLanguage()
  const { theme: currentTheme } = useTheme()
  const isDark = currentTheme === 'dark'
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'LinkedIn', icon: '🔗', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'GitHub', icon: '💻', url: '#' }
  ]

  const quickLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.caseStudies, href: '#case-studies' },
    { name: t.nav.contact, href: '#contact' }
  ]

  return (
    <footer 
      className={`py-12 ${
        isDark ? 'bg-slate-900' : 'bg-gray-900'
      }`}
      dir={dir}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Logo />
            <p className={`mt-4 ${
              isDark ? 'text-gray-400' : 'text-gray-400'
            }`}>
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-bold mb-4 ${
              isDark ? 'text-gray-100' : 'text-white'
            }`}>
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className={`${
                      isDark 
                        ? 'text-gray-400 hover:text-indigo-400' 
                        : 'text-gray-400 hover:text-white'
                    } transition-colors`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className={`text-lg font-bold mb-4 ${
              isDark ? 'text-gray-100' : 'text-white'
            }`}>
              {t.footer.connect}
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  className={`${
                    isDark 
                      ? 'text-gray-400 hover:text-indigo-400' 
                      : 'text-gray-400 hover:text-white'
                  } transition-colors`}
                  title={social.name}
                >
                  <span className="text-2xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`border-t ${
          isDark ? 'border-gray-800' : 'border-gray-800'
        } pt-8 mt-8 text-center`}>
          <p className={isDark ? 'text-gray-400' : 'text-gray-400'}>
            {t.footer.copyright.replace('{year}', currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer