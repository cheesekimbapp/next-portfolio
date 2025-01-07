import Head from 'next/head'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/img/logo.png" />
        <title>Tars Portfolio</title>
        <meta name="description" content="Professional web developer portfolio" />
      </Head>
      <Navbar />
      <main className="scroll-smooth">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  )
}
