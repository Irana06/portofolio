import './App.css'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import AboutMe from './pages/AboutMe'
import Footer from './pages/Footer'
import ContactMe from './pages/ContactMe'
import Certificate from './pages/Certificate'

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

        {/* Section 3 - Certificate */}
        <Certificate />

        {/* Section 4 - Contact Me */}
        <ContactMe />

      </main>

      {/* Footer */}
      <Footer />

    </>
  )
}

export default App
