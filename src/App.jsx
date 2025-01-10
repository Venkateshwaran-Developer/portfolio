
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from "./components/Navbar";
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AboutMeSection from './components/AboutMeSection';
import MySkillsSection from './components/MySkillsSection';
import Experience from './components/Experience';

function App() {
  return (
    <div className="w-full h-full overflow-hidden ">
      <NavBar />
      <Hero/> 
      <AboutMeSection/>
      <Experience/>
      <MySkillsSection/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
