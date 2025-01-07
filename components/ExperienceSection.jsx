export default function ExperienceSection() {
  const experiences = [
    {
      company: 'Tarraki Industries',
      position: 'Web Developer',
      duration: 'February 2023 - Present',
      description: 'Led front-end development team, implemented new features, and optimized web applications.'
    },
    {
      company: 'Halodoc (PT. Media Dokter Investama)',
      position: 'Tech IT Infrastructure Intern',
      duration: 'February 2024 - June 2024',
      description: 'Led front-end development team, implemented new features, and optimized web applications.'
    },
    {
      company: 'Bangkit Academy (Google, Tokopedia, Gojek, & Traveloka) - Capstone Project',
      position: 'Cloud Computing',
      duration: 'August 2023 - January 2024',
      description: 'Developed and maintained multiple client websites, implemented responsive designs.'
    },
    {
      company: 'I-Secret',
      position: 'Networking Division Staff',
      duration: 'August 2021 - December 2022',
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
