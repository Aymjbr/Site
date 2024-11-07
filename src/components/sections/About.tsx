import theme from '../../config/theme'

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: theme.fonts.secondary }}
          >
            About OxDev
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Founded in 2024, OxDev is a technology company based in Rabat, Morocco, 
            dedicated to empowering businesses through innovative technology solutions.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Innovation",
              description: "Pushing boundaries with cutting-edge solutions",
              icon: "🚀"
            },
            {
              title: "Excellence",
              description: "Delivering quality in every project",
              icon: "⭐"
            },
            {
              title: "Collaboration",
              description: "Working closely with clients for optimal results",
              icon: "🤝"
            }
          ].map((value, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg text-center"
              style={{ 
                backgroundColor: theme.colors.background,
                boxShadow: theme.shadows.md
              }}
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-primary text-white p-8 rounded-lg">
          <h3 
            className="text-2xl font-bold mb-4 text-center"
            style={{ fontFamily: theme.fonts.secondary }}
          >
            Our Mission
          </h3>
          <p className="text-center max-w-2xl mx-auto">
            To empower businesses through innovative technology solutions, 
            delivering excellence in software development, data analysis, 
            and process optimization while maintaining the highest standards 
            of quality and client satisfaction.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About 