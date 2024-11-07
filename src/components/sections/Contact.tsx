import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { Button } from '../ui/button'
import theme from '../../config/theme'

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { t, dir } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
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
    <section className="py-20 bg-background" dir={dir}>
      <div className="section-content">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
            style={{ fontFamily: theme.fonts.secondary }}
          >
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                           text-foreground"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                           text-foreground"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.form.subject}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                           text-foreground"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                           text-foreground"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                {t.contact.form.submit}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Map */}
            <div className="h-64 rounded-lg overflow-hidden bg-muted">
              <iframe
                title="OxDev Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.4314506383547!2d-6.8498878!3d34.020882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76ce7f9462dd1%3A0x2c981fcf4c0834ab!2sRabat%2C%20Morocco!5e0!3m2!1sen!2sus!4v1647095757123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {t.contact.details.map((detail, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-2xl text-primary">{detail.icon}</div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{detail.title}</h3>
                    <p className="text-muted-foreground">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact