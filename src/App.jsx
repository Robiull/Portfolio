import './App.css'
import AboutMain from './components/aboutSection/AboutMain'
import ContactMain from './components/contactSection/ContactMain'
import ExperienceMain from './components/experienceSection/ExperienceMain'
import FooterMain from './components/footer/FooterMain'
import HelperSection from './components/HelperSection'
import HeroGradiant from './components/heroSection/HeroGradiant'
import HeroMain from './components/heroSection/HeroMain'
import SubHeroSection from './components/heroSection/SubHeroSection'
import NavbarMain from './components/navbar/NavbarMain'
import ProjectMain from './components/projectSection/ProjectMain'
import SkillsMain from './components/skillsSection/SkillsMain'
import SubSkillPic from './components/skillsSection/SubSkillPic'

function App() {
  // <link href="/src/style.css" rel="stylesheet"></link>
  return( 
  <main className='font-body'>
    <NavbarMain/>
    <HeroMain/>
    <HeroGradiant/>
    <SubHeroSection/>
    <AboutMain/>
    <SkillsMain/>
    <SubSkillPic/>
    {/* <ExperienceMain/> */}
    <ProjectMain/>
    <ContactMain/>
    <FooterMain/>
    {/* <HelperSection/> */}
  </main>)
}

export default App
