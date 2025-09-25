import './App.css'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import AboutMe from './pages/AboutMe'
import Footer from './pages/Footer'
import ContactMe from './pages/ContactMe'
import Certificate from './pages/Certificate'

function App() {
  return (
    <div>
      <Navbar />
      <main className="w-[calc(100vw)] md:w-[calc(100vw-15px)]">
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
    </div>
  )
}

export default App
