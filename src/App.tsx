import './App.css'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import AboutMe from './pages/AboutMe'

function App() {

  return (
    <>

      {/* Navbar */}
      <Navbar />

      <main>
        {/* Section 1 - Hero */}
        <Hero />

        {/* Section 2 - About Me */}
        <AboutMe />

      </main>

      {/* <p classNameName="read-the-docs">
        This site is a fan-made portfolio inspired by Minecraft. Minecraft is a trademark of Mojang Synergies AB.
      </p> */}
    </>
  )
}

export default App
