import "../App.css";
import wallpaper from "../assets/Cherry_Blossom_House _Minecraft.mp4";
import avatarHero from "../assets/images/foto1x1.png";
import CV from "../assets/files/CV Resume - Yusuf Novandra.pdf";
import { CloudDownload, Eye } from "lucide-react";
import WaveTop from "../components/WaveTop";
import endermen_teleport from "../assets/sfx/endermen_teleport.mp3";
import ender_pearl from "../assets/sfx/ender_pearl.mp3";


export default function Hero() {
  const skill = ["React", "Laravel", "TypeScript", "PHP"];
  const enderTeleport = new Audio(endermen_teleport);
  const enderPearl = new Audio(ender_pearl);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center py-24">
      <div className="absolute inset-0 -z-10">
        <video src={wallpaper} className="w-full h-full object-cover" autoPlay muted loop />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="max-w-screen-xl w-full flex flex-col lg:flex-row items-center justify-between px-4 gap-12">
        {/* Text Content */}
        <div className="max-w-xl flex flex-col items-start gap-6">
          <h1
            className="text-5xl font-bold font-minecraft2 text-white leading-snug"
            style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}
          >
            Hi, I'm <br />
            <span className="text-rose-200">Yusufnova!</span>
          </h1>

          <h2
            className="text-xl font-minecraft2 font-semibold text-gray-200"
            style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}
          >
            Full-Stack Website Developer
          </h2>

          <div className="bg-black/30 p-4 rounded-lg shadow-md backdrop-blur-sm">
            <p className="text-lg text-justify text-white/90">
              A passionate junior full-stack web developer eager to grow into a professional software engineer. I craft seamless and user-friendly digital experiences using Laravel and React, focusing on both functionality and elegance. With hands-on experience in full-stack development, I continuously learn and adapt to new technologies to deliver impactful web solutions.
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {skill.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-white/20 font-minecraft2 text-white rounded-md text-sm"
                style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 font-minecraft2">
            <a
              onClick={(e) => {
                e.preventDefault();
                const id = e.currentTarget
                  .getAttribute("href")
                  ?.replace("#", "");
                if (id) {
                  scrollToSection(id);
                };
                enderTeleport.play();
              }}
              href="#profile"
              className="relative flex items-center justify-center px-2 py-2 text-sm md:px-6 md:py-2.5 md:text-base bg-rose-300/70 hover:bg-white/20 rounded-xl text-black hover:backdrop-blur-sm font-semibold transition overflow-hidden group"
            >
              <span className="transition-opacity duration-300 group-hover:opacity-0">
                View Profile
              </span>
              <Eye className="absolute text-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white" />
            </a>

            <a
              href={CV}
              download="Yusufnova_CV.pdf"
              onClick={() => enderPearl.play()}
              className="relative flex items-center justify-center px-2 py-2 text-sm md:px-6 md:py-2.5 md:text-base bg-white/20 hover:bg-gray-300 rounded-xl text-white font-semibold transition overflow-hidden group"
            >
              <span className="transition-opacity duration-300 group-hover:opacity-0">
                Download Resume
              </span>
              <CloudDownload className="absolute text-lg text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <img
            className="w-72 h-72 rounded-full border-4 border-rose-200/50 object-cover shadow-lg"
            src={avatarHero}
            alt="Profile"
          />

          {/* Experience Badge */}
          <span className="absolute -left-10 top-10 bg-white/20 backdrop-blur-md px-3 py-1 rounded-md text-sm text-white shadow-md">
            6+ Month <br /> Experience
          </span>

          {/* Status Badge */}
          {/* inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/20 text-sm text-white font-medium shadow-md */}
          <span className="absolute -right-20 bottom-10 backdrop-blur-md inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/20 text-sm text-white font-medium shadow-md">
            <span className="h-2 w-2 bg-green-500 rounded-full"></span>
            Available for new opportunities
          </span>
          {/* Projects Badge */}
          {/* <span className="absolute -right-10 bottom-10 bg-white/20 backdrop-blur-md px-3 py-1 rounded-md text-sm text-white shadow-md">
            2+ Projects <br /> 
          </span> */}
        </div>
      </div>

      <WaveTop />
    </section>
  );
}
