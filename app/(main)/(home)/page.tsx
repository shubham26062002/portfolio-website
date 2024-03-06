import { ActiveSectionHandler } from './_components/active-section-handler'
import { HomeSection } from './_components/home-section'
import { AboutSection } from './_components/about-section'

const HomePage = () => {
  return (
    <ActiveSectionHandler>
      <HomeSection />
      <AboutSection />
      <section className="min-h-screen section" id="skills">Skills</section>
      <section className="min-h-screen section" id="services">Services</section>
      <section className="min-h-screen section" id="portfolio">Portfolio</section>
      <section className="min-h-screen section" id="contact">Contact</section>
    </ActiveSectionHandler>
  )
}

export default HomePage