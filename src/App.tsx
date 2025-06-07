import './App.css'
import AboutMe from './components/aboutme/AboutMe'
import Header from './components/header/Header' 
import NavBar from './components/navbar/NavBar'
import Skills from './components/skills/Skills'
import Footer from './components/footer/Footer'
{/*import Projects from './components/projects/Projects' */}




function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <AboutMe />
      <Skills />
      {/*
      <Projects />*/}
      <Footer />
    </div>
  )
}
export default App
