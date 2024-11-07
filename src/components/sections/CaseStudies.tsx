import theme from '../../config/theme'

const CaseStudies = () => {
  const cases = [
    {
      title: "E-Commerce Platform Optimization",
      description: "Increased sales by 150% through AI-powered recommendations",
      metrics: "150% increase in sales",
      industry: "Retail"
    },
    {
      title: "Logistics Management System",
      description: "Reduced delivery times by 40% with route optimization",
      metrics: "40% faster deliveries",
      industry: "Transportation"
    },
    {
      title: "Healthcare Data Analysis",
      description: "Improved patient care with predictive analytics",
      metrics: "30% better outcomes",
      industry: "Healthcare"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
          style={{ fontFamily: theme.fonts.secondary }}
        >
          Case Studies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
              style={{ boxShadow: theme.shadows.md }}
            >
              <h3 className="text-xl font-bold mb-3">{case_.title}</h3>
              <p className="text-gray-600 mb-4">{case_.description}</p>
              <div className="border-t pt-4">
                <p className="text-primary font-bold">{case_.metrics}</p>
                <p className="text-sm text-gray-500">{case_.industry}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies 