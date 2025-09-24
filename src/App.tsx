import './App.css'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import AboutMe from './pages/AboutMe'
import Footer from './pages/Footer'

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

      {/* Footer */}
      <Footer />

    </>
  )
}

export default App
