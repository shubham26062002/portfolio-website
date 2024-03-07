import { ActiveSectionHandler } from './_components/active-section-handler'
import { HomeSection } from './_components/home-section'
import { AboutSection } from './_components/about-section'
import { SkillsSection } from './_components/skills-section'
import { PortfolioSection } from './_components/portfolio-section'

const HomePage = () => {
  return (
    <ActiveSectionHandler>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <section className="min-h-screen section" id="services">Services</section>
      <PortfolioSection />
      <section className="min-h-screen section" id="contact">Contact</section>
    </ActiveSectionHandler>
  )
}

export default HomePage