import './App.css'
{/*import Footer from './componets/footer/Footer'
  
import Footer from './components/footer/Footer'*/}
import AboutMe from './components/aboutme/AboutMe'
import Header from './components/header/Header' 
import NavBar from './components/navbar/NavBar'
{/*import Footer from './components/footer/Footer'
import Projects from './components/projects/Projects' */}

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <AboutMe />
      {/*
      <Projects />
      <Footer />*/}
    </div>
  )
}
export default App
