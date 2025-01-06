import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <>
      <Head>
        <title>About Me - Web Developer Portfolio</title>
      </Head>
      <Navbar />
      <main className="min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-8">About Me</h1>
          <div className="space-y-4 text-gray-300">
            <p>
              I'm a passionate web developer with 5+ years of experience in building modern,
              responsive, and user-friendly web applications. I specialize in JavaScript
              frameworks like React and Next.js, and I'm always eager to learn new technologies.
            </p>
            <p>
              My expertise includes front-end development, back-end integration, and creating
              seamless user experiences. I believe in writing clean, maintainable code and
              following best practices.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or mentoring junior developers.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
