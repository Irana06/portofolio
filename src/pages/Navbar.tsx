import { Menu, Volume2, VolumeOff, X } from "lucide-react";
import "../App.css";
import avatarHead from "../assets/avatarHead.png";
import { useEffect, useRef, useState } from "react";
import bgm from "../assets/music/C418 - Haunt Muskie (Minecraft Volume Beta).mp3"
import item_pick from "../assets/sfx/item_pickup.mp3"
import door_opened from "../assets/sfx/door_opened.mp3"

interface NavbarProps {
  loadingFinished?: boolean;
}

export default function Navbar({ loadingFinished }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const itemPickup = new Audio(item_pick);
  const doorOpen = new Audio(door_opened);

  useEffect(() => {
    const audio = new Audio(bgm);
    audio.loop = true;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (loadingFinished && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  }, [loadingFinished]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
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
                    itemPickup.play();
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
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  doorOpen.play();
                }}
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
                    itemPickup.play();
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
