import './App.css'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import Introduction from './pages/Introduction'

function App() {

  return (
    <>

      {/* Navbar */}
      <Navbar />

      <main>
        {/* Section 1 - Hero */}
        <Hero />

        {/* Section 2 - Introduction */}
        <Introduction />

        {/* Section 3 - Skills */}
        {/* <Skills /> */}

        {/* Section 4 - Projects */}
        {/* <Projects /> */}

        {/* Section 5 - Experience */}
        {/* <Experience /> */}

      </main>

      {/* <p classNameName="read-the-docs">
        This site is a fan-made portfolio inspired by Minecraft. Minecraft is a trademark of Mojang Synergies AB.
      </p> */}
    </>
  )
}

export default App
