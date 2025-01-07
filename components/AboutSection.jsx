export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-gray-300 space-y-4">
            <p>
            I am a 7th-semester student majoring in Information Systems at Universitas Negeri Semarang. I have a strong interest in backend development and cloud computing. I am enthusiastic about collaborating with talented professionals and contributing to the development of innovative technology solutions.
            </p>
            <p>
              My expertise includes front-end development, back-end integration, and creating
              seamless user experiences. I believe in writing clean, maintainable code and
              following best practices.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">Education</h3>
              <p className="text-gray-300">Bachelor's in Computer Science</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">Certifications</h3>
              <p className="text-gray-300">React, Next.js, Node.js</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
