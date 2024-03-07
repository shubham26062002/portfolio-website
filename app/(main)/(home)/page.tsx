import { ActiveSectionHandler } from './_components/active-section-handler'
import { HomeSection } from './_components/home-section'
import { AboutSection } from './_components/about-section'
import { SkillsSection } from './_components/skills-section'
import { ServicesSection } from './_components/services-section'
import { PortfolioSection } from './_components/portfolio-section'
import { ContactSection } from './_components/contact-section'
import { Footer } from './_components/footer'

const HomePage = () => {
  return (
    <>
      <ActiveSectionHandler>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </ActiveSectionHandler>
      <Footer />
    </>
  )
}

export default HomePage