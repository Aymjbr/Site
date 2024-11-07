import theme from '../../config/theme'

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.accent} 100%)`
      }}
    >
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <h1 
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
          style={{ fontFamily: theme.fonts.secondary }}
        >
          Innovating Tomorrow's Solutions
        </h1>
        <p 
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white text-opacity-90"
          style={{ fontFamily: theme.fonts.primary }}
        >
          OxDev specializes in cutting-edge software development, data analysis, 
          artificial intelligence, and process optimization solutions that drive 
          your business forward.
        </p>
        <div className="flex justify-center gap-4">
          <button 
            className="bg-white text-primary px-8 py-3 rounded-full font-semibold
                       hover:bg-opacity-90 transition-all"
            style={{ 
              transition: theme.transitions.default
            }}
          >
            Get Started
          </button>
          <button 
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold
                       hover:bg-white hover:text-primary transition-all"
            style={{ 
              transition: theme.transitions.default,
              backgroundColor: 'transparent'
            }}
          >
            Learn More
          </button>
        </div>
      </div>
      
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 rounded-full bg-white -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 rounded-full bg-white -bottom-20 -right-20"></div>
      </div>
    </section>
  )
}

export default Hero 