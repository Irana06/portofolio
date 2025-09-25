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
      <Navbar />
      <main className="w-screen">
        {/* Hero Section */}
        <Hero />
        {/* About Me Section */}
        <AboutMe />
        {/* Certificate Section */}
        <Certificate />
        {/* Contact Me Section */}
        <ContactMe />
      </main>
      <Footer />
    </>
  )
}

export default App
