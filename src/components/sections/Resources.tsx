import theme from '../../config/theme'

const Resources = () => {
  const resources = [
    {
      title: "Industry Insights",
      description: "Latest trends and analysis in technology",
      icon: "📊",
      link: "#"
    },
    {
      title: "Technical Guides",
      description: "In-depth tutorials and best practices",
      icon: "📚",
      link: "#"
    },
    {
      title: "Case Studies",
      description: "Real-world implementation stories",
      icon: "📋",
      link: "#"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
          style={{ fontFamily: theme.fonts.secondary }}
        >
          Resources
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <a 
              key={index}
              href={resource.link}
              className="block p-6 rounded-lg hover:-translate-y-1 transition-all"
              style={{ 
                backgroundColor: theme.colors.background,
                boxShadow: theme.shadows.md
              }}
            >
              <div className="text-4xl mb-4">{resource.icon}</div>
              <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
              <p className="text-gray-600">{resource.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resources 