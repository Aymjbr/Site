import PageLayout from '../components/layout/PageLayout'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../providers/ThemeProvider'
import theme from '../config/theme'
import { Button } from '../components/ui/button'
import { useState } from 'react'

interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
}

const ContactPage = () => {
  const { t } = useLanguage()
  const { theme: currentTheme } = useTheme()
  const isDark = currentTheme === 'dark'

  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

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
            {t.contact.page.title}
          </h1>
          <p className={`text-lg max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t.contact.page.introduction}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <h2 className={`text-2xl font-bold mb-6 ${
              isDark ? 'text-gray-100' : 'text-gray-900'
            }`}>
              {t.contact.page.form.title}
            </h2>
            <p className={`mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t.contact.page.form.instructions}
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    isDark 
                      ? 'bg-slate-800 border-slate-700 text-gray-100' 
                      : 'bg-white border-gray-200'
                  }`}
                  required
                />
              </div>
              <div>
                <label className={`block mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    isDark 
                      ? 'bg-slate-800 border-slate-700 text-gray-100' 
                      : 'bg-white border-gray-200'
                  }`}
                  required
                />
              </div>
              <div>
                <label className={`block mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {t.contact.page.form.phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    isDark 
                      ? 'bg-slate-800 border-slate-700 text-gray-100' 
                      : 'bg-white border-gray-200'
                  }`}
                />
              </div>
              <div>
                <label className={`block mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {t.contact.form.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    isDark 
                      ? 'bg-slate-800 border-slate-700 text-gray-100' 
                      : 'bg-white border-gray-200'
                  }`}
                  required
                />
              </div>
              <Button 
                type="submit"
                className={`w-full ${
                  isDark 
                    ? 'bg-indigo-500 hover:bg-indigo-600' 
                    : 'bg-primary hover:bg-primary/90'
                } text-white`}
              >
                {t.contact.form.submit}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className={`text-2xl font-bold mb-6 ${
              isDark ? 'text-gray-100' : 'text-gray-900'
            }`}>
              {t.contact.page.details.title}
            </h2>
            
            <div className="space-y-6">
              {t.contact.details.map((detail, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-2xl text-primary">{detail.icon}</div>
                  <div>
                    <h3 className={`font-bold ${
                      isDark ? 'text-gray-100' : 'text-gray-900'
                    }`}>
                      {detail.title}
                    </h3>
                    <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                      {detail.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-8 h-64 rounded-lg overflow-hidden">
              <iframe
                title="OxDev Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.4314506383547!2d-6.8498878!3d34.020882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76ce7f9462dd1%3A0x2c981fcf4c0834ab!2sRabat%2C%20Morocco!5e0!3m2!1sen!2sus!4v1647095757123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className={`font-bold mb-4 ${
                isDark ? 'text-gray-100' : 'text-gray-900'
              }`}>
                {t.contact.social.title}
              </h3>
              <div className="flex space-x-4">
                {t.contact.social.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl ${
                      isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="text-center max-w-3xl mx-auto mt-16">
          <p className={`text-lg ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t.contact.page.conclusion}
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

export default ContactPage 