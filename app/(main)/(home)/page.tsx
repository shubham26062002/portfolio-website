import { ActiveSectionHandler } from "./_components/active-section-handler"

const HomePage = () => {
  return (
    <ActiveSectionHandler>
      <section className="min-h-screen section" id="home">Home</section>
      <section className="min-h-screen section" id="about">About</section>
      <section className="min-h-screen section" id="skills">Skills</section>
      <section className="min-h-screen section" id="services">Services</section>
      <section className="min-h-screen section" id="portfolio">Portfolio</section>
      <section className="min-h-screen section" id="contact">Contact</section>
    </ActiveSectionHandler>
  )
}

export default HomePage