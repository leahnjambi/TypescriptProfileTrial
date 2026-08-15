import Mynav from './nav.tsx'
import HeroSection from './herosection/hero_section.tsx'
import AboutMe from './aboutMe.tsx'
import ProjectPage from './projects/project.tsx'
import OurServices from './services/ourService.tsx'
import OurExpertSection from './experience/ourExperienceSection.tsx'
import Footer from './footer/footersection.tsx'
import Mysocial from './socials/social-section.tsx'
import './App.css'

function App() {
  return (
    <>
      <section id="center">
        <Mynav />
        <HeroSection />
        <AboutMe />
        <ProjectPage />
        <OurServices />
        <OurExpertSection />
        <Footer />
        <Mysocial/>
      </section>
    </>
  )
}

export default App
