import { Volume2, VolumeOff } from 'lucide-react'
import './App.css'
import avatarHead from './assets/avatarHead.png'
import caveBackground from './assets/cavewallpaper.png'
import { useRef, useState } from 'react'

function App() {
  const music = import.meta.glob('./assets/music/*.mp3', { eager: true })
  const musicFiles = Object.values(music).map((mod) => (mod as { default: string }).default)

  const randomIndex = Math.floor(Math.random() * musicFiles.length)
  const audioRef = useRef(new Audio(musicFiles[randomIndex]))

  const [isPlaying, setIsPlaying] = useState(false)

  const toggleMusic = () => {
    const audio = audioRef.current
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
      audio.loop = true
    }
    setIsPlaying(!isPlaying)
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

      <main className="mt-24">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img src={caveBackground} alt="Cave Background" className="h-full w-full object-cover opacity-20" />
        </div>

        {/* Sidebar Menu Card */}
        <div className="md:col-span-1 relative w-[180px] h-[240px] left-10">
          {/* Background Card */}
          <img
            src="/src/assets/overlays/book.png"
            alt="Book Background"
            className="absolute inset-0 w-full h-full object-contain"
          />

          {/* Menu */}
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
                href={item.href}
                className="w-full text-center px-2 py-1 rounded-md text-gray-500 font-minecraft2 shadow hover:bg-black/10 hover:text-black transition"
              >
                {item.text}
              </a>
            ))}
          </nav>
        </div>

      </main>

      {/* <p classNameName="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
