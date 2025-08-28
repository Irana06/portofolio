import { Volume2, VolumeOff } from 'lucide-react'
import './App.css'
import avatarHead from './assets/avatarHead.png'
import wallpaper from './assets/Cherry_Blossom_House _Minecraft.mp4'
import openBook from './assets/overlays/book.png'
import avatarHero from './assets/avatarBody5.png'
import { useEffect, useRef, useState } from 'react'

function App() {
  const music = import.meta.glob('./assets/music/*.mp3', { eager: true })
  const musicFiles = Object.values(music).map((mod) => (mod as { default: string }).default)

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

  return (
    <>

      {/* Navbar */}
      <header
        className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <div className="flex items-center">
                <img className="h-10 w-auto" src={avatarHead} alt="" />
                <p className="font-minecraft2 inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 pointer-events-none">Yusufnova</p>
              </div>
            </div>
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 md:items-center md:gap-5 font-minecraft2">
              <a aria-current="page"
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#">Profile</a>
              <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#">About Me</a>
              <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#">Certificate</a>
              <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#">Contact</a>
            </div>

            <span onClick={toggleMusic} className="cursor-pointer text-black " aria-label="Toggle Music" role="button">
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
        <section className="relative w-screen min-h-screen flex items-center justify-center pt-24">
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
                  href="#item-1"
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
                  { href: "#item-1", text: "Introduction" },
                  { href: "#item-2", text: "Skills" },
                  { href: "#item-3", text: "Projects" },
                  { href: "#item-4", text: "Experience" },
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
