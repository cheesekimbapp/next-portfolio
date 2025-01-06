export default function SkillsSection() {
  const skills = [
    'JavaScript', 'React', 'Next.js', 'Node.js', 'TypeScript',
    'Tailwind CSS', 'MongoDB', 'Express', 'Git', 'REST APIs',
    'GraphQL', 'Docker', 'AWS', 'CI/CD'
  ]

  return (
    <section id="skills" className="py-20 bg-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white/10 px-6 py-3 rounded-full">
              <span className="text-gray-300">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
