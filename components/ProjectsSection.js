export default function ProjectsSection() {
  const projects = [
    {
      title: 'Anime World',
      description: 'Anime World is your gateway to discovering and enjoying the best anime. Find recommendations, track your favorites, and explore a rich database—all in one place!',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: '/img/portfolio/anime.png'
    },
    {
      title: 'SEMAWIS',
      description: 'Website for Semarang provides interactive information about tourist destinations, culinary delights, and cultural experiences in the city, making it easy for visitors to explore the beauty of Semarang with comprehensive maps and guides.',
      technologies: ['Next.js', 'Firebase', 'Chart.js'],
      image: '/img/portfolio/semawis.png'
    },
    {
      title: 'PET MATE',
      description: 'PetMate is an an application that utilizes machine learning technology to be able to provide recommendations for pets that are suitable for prospective pet owners based on the preferences they want.',
      technologies: ['Next.js', 'Tailwind CSS'],
      image: '/img/portfolio/petmate.png'
    },
    {
      title: 'Basic Portfolio',
      description: 'A simple portfolio website for a web developer',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: '/img/portfolio/basic-portfolio.png'
    },
    {
      title: 'Portfolio',
      description: 'A modern portfolio website for a web developer',
      technologies: ['Next.js', 'Firebase', 'Chart.js'],
      image: '/img/portfolio/next-portfolio.png'
    },
    {
      title: 'SPARK',
      description: 'SISTEM INFORMASI PENGELOLAAN TEMPAT PARKIR. The system offers better administration to optimize parking resources and improve overall parking experience.',
      technologies: ['Next.js', 'Tailwind CSS'],
      image: '/img/portfolio/spark.png'
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-6">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
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
            </div>
          ))}
        </div>
        {/* Tambahkan Tombol "More" di sini */}
        <div className="flex justify-center mt-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            More
          </a>
        </div>
      </div>
    </section>
  )
}