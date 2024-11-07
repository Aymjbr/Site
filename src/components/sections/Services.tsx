import theme from '../../config/theme'

const ServiceCard = ({ title, description, icon }: {
  title: string;
  description: string;
  icon: string;
}) => (
  <div 
    className="p-6 rounded-lg hover:transform hover:-translate-y-1 transition-all"
    style={{ 
      backgroundColor: theme.colors.background,
      boxShadow: theme.shadows.md
    }}
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

const Services = () => {
  const services = [
    {
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs",
      icon: "💻"
    },
    {
      title: "Data Analysis",
      description: "Transform your data into actionable insights",
      icon: "📊"
    },
    {
      title: "Artificial Intelligence",
      description: "Smart solutions powered by machine learning",
      icon: "🤖"
    },
    {
      title: "Process Optimization",
      description: "Streamline operations for maximum efficiency",
      icon: "⚡"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
          style={{ fontFamily: theme.fonts.secondary }}
        >
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 