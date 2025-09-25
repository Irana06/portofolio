import { Menu, Volume2, VolumeOff, X } from "lucide-react";
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

  // state for track index
  const [currentTrack, setCurrentTrack] = useState(getRandomIndex());

  // ref for audio element
  const audioRef = useRef(new Audio(musicFiles[currentTrack]));
  const [isPlaying, setIsPlaying] = useState(false);

  // state for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // effect to handle track end and play next random track
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
    setIsMenuOpen(false);
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
            {/* Logo */}
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

            {/* Desktop menu */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-5 font-minecraft2">
              {["hero", "profile", "certificate", "contact"].map((id, i) => (
                <a
                  key={i}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(id);
                  }}
                  className={`inline-block rounded-lg px-2 py-1 text-sm font-medium
                  ${scrolled ? "text-white" : "text-gray-700"} 
                  transition-all duration-200 hover:bg-gray-100 hover:text-gray-900`}
                >
                  {id === "hero"
                    ? "Home"
                    : id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {/* Music toggle */}
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

              {/* Mobile hamburger */}
              <button
                className={`md:hidden bg-transparent border-hidden cursor-pointer inline-block rounded-lg px-2 py-1 text-sm font-medium
                ${scrolled ? "text-white" : "text-gray-700"}
                transition-all duration-200 hover:bg-gray-100 hover:text-gray-900`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          {isMenuOpen && (
            <div className="md:hidden mt-3 flex flex-col gap-2 font-minecraft2">
              {["hero", "profile", "certificate", "contact"].map((id, i) => (
                <a
                  key={i}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(id);
                  }}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium
                  ${scrolled ? "text-white" : "text-gray-700"} 
                  transition hover:bg-gray-100 hover:text-gray-900`}
                >
                  {id === "hero"
                    ? "Home"
                    : id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>
    </>
  );
}
