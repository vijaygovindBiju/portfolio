import HeroSection from '@/components/sections/HeroSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import EngineeringSection from '@/components/sections/HowIBuildSection'
import TechStackSection from '@/components/sections/TechStackSection'
import AboutSection from '@/components/sections/AboutSection'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <EngineeringSection />
      <TechStackSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}
