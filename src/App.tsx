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
        <section className="container mx-auto px-4">
          <Hero />
        </section>
        <section className="container mx-auto px-4">
          <AboutMe />
        </section>
        <section className="container mx-auto px-4">
          <Certificate />
        </section>
        <section className="container mx-auto px-4">
          <ContactMe />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
