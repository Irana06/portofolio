import { ArrowBigRight, CalendarDays, FolderOpenDot, Volume2, VolumeOff } from 'lucide-react'
import './App.css'
import avatarHead from './assets/avatarHead.png'
import wallpaper from './assets/Cherry_Blossom_House _Minecraft.mp4'
import wallpaperCats from './assets/backgrounds/wallpaper_cats_minecraft.jpg'
import openBook from './assets/overlays/book.png'
import avatarHero from './assets/avatarBody5.png'
import fotoProfile from './assets/𝗪𝗮𝗴𝘂𝗿𝗶 𝗞𝗮𝗼𝗿𝘂𝗸𝗼.jpg'
import fotoProfile2 from './assets/waguri_kaoruko.jpeg'
import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBriefcase, faLocationDot } from '@fortawesome/free-solid-svg-icons'

function App() {
  const music = import.meta.glob('./assets/music/*.mp3', { eager: true })
  const musicFiles = Object.values(music).map((mod) => (mod as { default: string }).default)
  const [scrolled, setScrolled] = useState(false)

  const getRandomIndex = () => Math.floor(Math.random() * musicFiles.length)

  // state untuk track index
  const [currentTrack, setCurrentTrack] = useState(getRandomIndex())

  // audioRef dibuat sesuai currentTrack
  const audioRef = useRef(new Audio(musicFiles[currentTrack]))
  const [isPlaying, setIsPlaying] = useState(false)

  // ganti lagu otomatis saat selesai
  useEffect(() => {
    const audio = audioRef.current
    const handleEnded = () => {
      const newIndex = getRandomIndex()
      setCurrentTrack(newIndex) // update state
      audio.src = musicFiles[newIndex]
      audio.play()
    }

    audio.addEventListener('ended', handleEnded)
    return () => audio.removeEventListener('ended', handleEnded)
  }, [musicFiles])

  const toggleMusic = () => {
    const audio = audioRef.current
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>

      {/* Navbar */}
      <header
        className={`fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 
          ${scrolled ? "bg-transparent shadow-md" : "bg-white/80"} 
          py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg transition-all duration-300 ease-in-out`}
      >
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <div className="flex items-center">
                <img className="h-10 w-auto" src={avatarHead} alt="" />
                <p
                  className={`font-minecraft2 inline-block rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200
                    ${scrolled ? "text-white" : "text-gray-700"} 
                    hover:bg-gray-100 hover:text-gray-900 pointer-events-none`}
                >
                  Yusufnova
                </p>
              </div>
            </div>
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 md:items-center md:gap-5 font-minecraft2">
              <a aria-current="page"
                onClick={(e) => {
                  e.preventDefault();
                  const id = e.currentTarget.getAttribute("href")?.replace("#", "");
                  if (id) {
                    scrollToSection(id);
                  }
                }}
                className={`inline-block rounded-lg px-2 py-1 text-sm font-medium
                ${scrolled ? "text-white" : "text-gray-700"} transition-all duration-200 hover:bg-gray-100 hover:text-gray-900`}
                href="#hero">Home</a>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  const id = e.currentTarget.getAttribute("href")?.replace("#", "");
                  if (id) {
                    scrollToSection(id);
                  }
                }}
                className={`inline-block rounded-lg px-2 py-1 text-sm font-medium
                ${scrolled ? "text-white" : "text-gray-700"} transition-all duration-200 hover:bg-gray-100 hover:text-gray-900`}
                href="#profile">About Me</a>
              <a className={`inline-block rounded-lg px-2 py-1 text-sm font-medium
                ${scrolled ? "text-white" : "text-gray-700"} transition-all duration-200 hover:bg-gray-100 hover:text-gray-900`}
                href="#certificate">Certificate</a>
              <a className={`inline-block rounded-lg px-2 py-1 text-sm font-medium
                ${scrolled ? "text-white" : "text-gray-700"} transition-all duration-200 hover:bg-gray-100 hover:text-gray-900`}
                href="#contact">Contact</a>
            </div>

            <span
              onClick={toggleMusic}
              className={`cursor-pointer inline-block rounded-lg px-2 py-1 text-sm font-medium
              ${scrolled ? "text-white" : "text-gray-700"}
               transition-all duration-200 hover:bg-gray-100 hover:text-gray-900`}
              aria-label="Toggle Music"
              role="button">
              {isPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeOff className="w-6 h-6" />}
            </span>
            {/* <div className="flex items-center justify-end gap-3">
              <a className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                href="/login">Sign in</a>
              <a className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                href="/login">Login</a>
            </div> */}
          </div>
        </div>
      </header>

      <main>
        {/* Section 1 - Hero dengan background video */}
        <section
          id="hero"
          className="relative w-screen min-h-screen flex items-center justify-center pt-24">
          {/* Background Hero */}
          <div className="absolute inset-0 -z-10">
            <video
              src={wallpaper}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
            />
            {/* Optional overlay biar teks lebih jelas */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Hero Content */}
          <div className="flex flex-col lg:flex-row items-center justify-center px-10">
            {/* Text Content */}
            <div className="max-w-xl flex flex-col items-start gap-6">
              <h1 className="text-5xl font-bold font-minecraft2 text-white leading-snug" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>
                Hi, I'm <span className="text-green-500">Yusufnova!</span>
              </h1>
              <p className="text-lg text-white/90">
                Experienced full-stack developer with 1+ years of expertise in Laravel,
                ReactJS, and more.
              </p>
              <div className="flex gap-4 font-minecraft2">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    const id = e.currentTarget.getAttribute("href")?.replace("#", "");
                    if (id) {
                      scrollToSection(id);
                    }
                  }}
                  href="#profile"
                  className="px-6 py-2.5 bg-green-600 hover:bg-green-700 rounded-xl text-white font-semibold transition">
                  Explore
                </a>
                <button className="px-6 py-2.5 bg-white/20 hover:bg-white/30 rounded-xl text-white font-semibold transition">
                  Contact Me
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <img
              className="w-80 h-80 rounded-full border-4 border-green-500 object-cover"
              src={avatarHero}
              alt="Profile"
            />
          </div>
        </section>

        {/* Section 2+ (background beda) */}
        <section className="relative z-10 flex w-screen mx-auto px-10 py-20 gap-10 bg-[#0A2025]">
          {/* Sidebar Sticky Menu - hidden on mobile */}
          <aside className="hidden md:block w-[180px] shrink-0 sticky top-24 h-fit">
            <div className="relative w-full h-[240px]">
              <img
                src={openBook}
                alt="Book Background"
                className="absolute inset-0 w-full h-full object-contain"
              />
              <nav
                id="navbar-example3"
                className="absolute inset-0 flex flex-col items-center justify-start space-y-3 pt-9 px-6"
              >
                {[
                  { href: "#profile", text: "Introduction" },
                  { href: "#skills", text: "Skills" },
                  { href: "#projects", text: "Projects" },
                  { href: "#experience", text: "Experience" },
                ].map((item, i) => (
                  <a
                    key={i}
                    onClick={(e) => {
                      e.preventDefault();
                      const id = e.currentTarget.getAttribute("href")?.replace("#", "");
                      if (id) {
                        scrollToSection(id);
                      }
                    }}
                    href={item.href}
                    className="w-full text-center px-2 py-1 rounded-md text-gray-500 font-minecraft2 shadow hover:bg-black/10 hover:text-black transition"
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content Area */}
          <div className="flex-1 space-y-40">

            <div className="absolute inset-0 -z-10">
              <img
                src={wallpaperCats}
                className="w-full h-full"
              />
              {/* Optional overlay biar teks lebih jelas */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Section 1 - Profile */}
            <section
              id="profile"
              className="relative flex flex-wrap items-center justify-center max-w-6xl mx-auto my-32 pt-32 pb-32 lg:my-0 px-6 lg:px-0"
            >
              {/* Card Profile */}
              <div
                className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white/80 backdrop-blur-sm mx-6 lg:mx-0"
              >
                <div className="p-6 md:p-12 text-center lg:text-left">
                  {/* Image untuk mobile */}
                  <div
                    className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-40 w-40 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${fotoProfile2}')`,
                    }}
                  ></div>

                  <h1 className="font-minecraft2 text-3xl text-gray-700 font-bold pt-8 lg:pt-0" >Yusuf Novandra Sugiyanto</h1>
                  <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

                  <p className="pt-2 text-gray-600 text-xs font-bold lg:text-sm flex items-center justify-center lg:justify-start">
                    <FontAwesomeIcon icon={faBriefcase} className="h-4 fill-current text-green-700 pr-4" />
                    Web Developer
                  </p>

                  <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                    <FontAwesomeIcon icon={faLocationDot} className="h-4 fill-current text-green-700 pr-4" />
                    Sleman, Yogyakarta
                  </p>

                  <p className="pt-6 text-sm text-gray-700">
                    A passionate and motivated vocational school graduate with hands-on experience in web development using Laravel and React JS. Completed a 6-month internship in a real working environment and developed personal projects focusing on full-stack development. Eager to contribute and grow in a dynamic and professional tech team.
                  </p>

                  <div className="pt-8 pb-8 flex flex-col-reverse lg:flex-row justify-between items-center gap-6">
                    {/* Next button */}
                    <button
                      onClick={() => scrollToSection('#skills')}
                      className="bg-green-700 hover:bg-green-900 text-white font-minecraft2 font-bold py-2 px-6 rounded-full shadow-lg transition flex items-center gap-2"
                    >
                      Next <ArrowBigRight className="w-5 h-5" aria-hidden="true" />
                    </button>

                    {/* Wrap Projects + Experience together */}
                    <div className="flex items-center gap-4">
                      {/* Projects with tooltip */}
                      <div className="relative group">
                        <div className="bg-green-700 rounded-full py-1 px-3 flex items-center gap-2 text-white font-minecraft2 font-bold cursor-pointer">
                          <FolderOpenDot className="w-5 h-5" aria-hidden="true" />2+
                        </div>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-sm font-minecraft2 px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                          1 project closed, 1 project ongoing
                        </div>
                      </div>

                      {/* Experience with tooltip */}
                      <div className="relative group">
                        <div className="bg-green-700 rounded-full py-1 px-3 flex items-center gap-2 text-white font-minecraft2 font-bold cursor-pointer">
                          <CalendarDays className="w-5 h-5" aria-hidden="true" />6+
                        </div>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-sm font-minecraft2 px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                          Worked on frontend & backend projects
                          (React, Laravel, etc.)
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Icons */}
                  <div className="flex justify-center lg:justify-start space-x-6">
                    <a href="#" aria-label="LinkedIn" className='text-gray-500 hover:text-green-700 transition'>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="#" aria-label="Instagram" className='text-gray-500 hover:text-green-700 transition'>
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="#" aria-label="GitHub" className='text-gray-500 hover:text-green-700 transition'>
                      <FontAwesomeIcon icon={faGithub} />
                    </a>

                  </div>
                </div>
              </div>

              {/* Card Kanan (foto besar desktop) */}
              <div className="w-full lg:w-2/5">
                <img
                  src={fotoProfile}
                  className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
                  alt="Profile"
                />
              </div>
            </section>

          </div>
        </section>
      </main>

      {/* <p classNameName="read-the-docs">
        This site is a fan-made portfolio inspired by Minecraft. Minecraft is a trademark of Mojang Synergies AB.
      </p> */}
    </>
  )
}

export default App
