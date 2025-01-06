export default function ExperienceSection() {
  const experiences = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Senior Web Developer',
      duration: '2020 - Present',
      description: 'Led front-end development team, implemented new features, and optimized web applications.'
    },
    {
      company: 'Web Innovators',
      position: 'Web Developer',
      duration: '2018 - 2020',
      description: 'Developed and maintained multiple client websites, implemented responsive designs.'
    },
    {
      company: 'Freelance',
      position: 'Web Developer',
      duration: '2016 - 2018',
      description: 'Worked with various clients to create custom web solutions and e-commerce platforms.'
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
              <p className="text-gray-300">{exp.company} • {exp.duration}</p>
              <p className="mt-4 text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
