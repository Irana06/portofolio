import { Volume2, VolumeOff } from "lucide-react";
import "../App.css";
import avatarHead from "../assets/avatarHead.png";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const music = import.meta.glob("../assets/music/*.mp3", { eager: true });
  const musicFiles = Object.values(music).map(
    (mod) => (mod as { default: string }).default
  );
  const [scrolled, setScrolled] = useState(false);

  const getRandomIndex = () => Math.floor(Math.random() * musicFiles.length);

  // state untuk track index
  const [currentTrack, setCurrentTrack] = useState(getRandomIndex());

  // audioRef dibuat sesuai currentTrack
  const audioRef = useRef(new Audio(musicFiles[currentTrack]));
  const [isPlaying, setIsPlaying] = useState(false);

  // ganti lagu otomatis saat selesai
  useEffect(() => {
    const audio = audioRef.current;
    const handleEnded = () => {
      const newIndex = getRandomIndex();
      setCurrentTrack(newIndex); // update state
      audio.src = musicFiles[newIndex];
      audio.play();
    };

    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, [musicFiles]);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              <a
                aria-current="page"
                onClick={(e) => {
                  e.preventDefault();
                  const id = e.currentTarget
                    .getAttribute("href")
                    ?.replace("#", "");
                  if (id) {
                    scrollToSection(id);
                  }
                }}
                className={`inline-block rounded-lg px-2 py-1 text-sm font-medium
                ${
                  scrolled ? "text-white" : "text-gray-700"
                } transition-all duration-200 hover:bg-gray-100 hover:text-gray-900`}
                href="#hero"
              >
                Home
              </a>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  const id = e.currentTarget
                    .getAttribute("href")
                    ?.replace("#", "");
                  if (id) {
                    scrollToSection(id);
                  }
                }}
                className={`inline-block rounded-lg px-2 py-1 text-sm font-medium
                ${
                  scrolled ? "text-white" : "text-gray-700"
                } transition-all duration-200 hover:bg-gray-100 hover:text-gray-900`}
                href="#profile"
              >
                About Me
              </a>
              <a
                className={`inline-block rounded-lg px-2 py-1 text-sm font-medium
                ${
                  scrolled ? "text-white" : "text-gray-700"
                } transition-all duration-200 hover:bg-gray-100 hover:text-gray-900`}
                href="#certificate"
                onClick={(e) => {
                  e.preventDefault();
                  const id = e.currentTarget
                    .getAttribute("href")
                    ?.replace("#", "");
                  if (id) {
                    scrollToSection(id);
                  }
                }}
              >
                Certificate
              </a>
              <a
                className={`inline-block rounded-lg px-2 py-1 text-sm font-medium
                ${
                  scrolled ? "text-white" : "text-gray-700"
                } transition-all duration-200 hover:bg-gray-100 hover:text-gray-900`}
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const id = e.currentTarget
                    .getAttribute("href")
                    ?.replace("#", "");
                  if (id) {
                    scrollToSection(id);
                  }
                }}
              >
                Contact
              </a>
            </div>

            <span
              onClick={toggleMusic}
              className={`cursor-pointer inline-block rounded-lg px-2 py-1 text-sm font-medium
              ${scrolled ? "text-white" : "text-gray-700"}
               transition-all duration-200 hover:bg-gray-100 hover:text-gray-900`}
              aria-label="Toggle Music"
              role="button"
            >
              {isPlaying ? (
                <Volume2 className="w-6 h-6" />
              ) : (
                <VolumeOff className="w-6 h-6" />
              )}
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
    </>
  );
}
