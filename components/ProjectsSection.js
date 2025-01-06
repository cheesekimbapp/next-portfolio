export default function ProjectsSection() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with React and Node.js',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: '/images/ecommerce.jpg'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Real-time analytics dashboard for social media platforms',
      technologies: ['Next.js', 'Firebase', 'Chart.js'],
      image: '/images/dashboard.jpg'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website for a web developer',
      technologies: ['Next.js', 'Tailwind CSS'],
      image: '/images/portfolio.jpg'
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-6">
              <div className="h-48 bg-gray-700 rounded mb-4"></div>
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
