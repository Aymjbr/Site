import theme from '../../config/theme'

const Approach = () => {
  const steps = [
    {
      number: "01",
      title: "Needs Analysis",
      description: "Understanding your unique requirements"
    },
    {
      number: "02",
      title: "Agile Development",
      description: "Flexible and iterative development process"
    },
    {
      number: "03",
      title: "Quality Assurance",
      description: "Rigorous testing and validation"
    },
    {
      number: "04",
      title: "Continuous Improvement",
      description: "Ongoing optimization and support"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
          style={{ fontFamily: theme.fonts.secondary }}
        >
          Our Approach
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold"
                style={{ backgroundColor: theme.colors.primary }}
              >
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Approach 