import theme from '../../config/theme'

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
          style={{ fontFamily: theme.fonts.secondary }}
        >
          Contact Us
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div 
            className="bg-white p-6 rounded-lg"
            style={{ boxShadow: theme.shadows.md }}
          >
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input 
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email"
                  className="w-full p-2 border rounded"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  className="w-full p-2 border rounded"
                  rows={4}
                  placeholder="Your message"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-2 px-4 rounded text-white"
                style={{ backgroundColor: theme.colors.primary }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-600">Rabat, Morocco</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600">contact@oxdev.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600">+212 XXX-XXXXXX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 