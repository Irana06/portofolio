import "../App.css";
import wallpaper from "../assets/Cherry_Blossom_House _Minecraft.mp4";
import avatarHero from "../assets/images/pp.jpg";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <section
        id="hero"
        className="relative w-screen min-h-screen flex items-center justify-center pt-24"
      >
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
            <h1
              className="text-5xl font-bold font-minecraft2 text-white leading-snug"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
            >
              Hi, I'm <span className="text-green-500">Yusufnova!</span>
            </h1>
            <p className="text-lg text-white/90">
              Experienced full-stack developer with 1+ years of expertise in
              Laravel, ReactJS, and more.
            </p>
            <div className="flex gap-4 font-minecraft2">
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
                href="#profile"
                className="px-6 py-2.5 bg-green-600 hover:bg-green-700 rounded-xl text-white font-semibold transition"
              >
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

        {/* Wave SVG at the bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        
          <div className="absolute bottom-0 w-[200%] h-20 animate-waveMedium opacity-80 flex">
            <svg className="w-1/2 h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,49 C150,89 350,9 600,49 C850,89 1050,9 1200,49 L1200,120 L0,120 Z" className="fill-[#afafaf]/30" />
            </svg>
            <svg className="w-1/2 h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,49 C150,89 350,9 600,49 C850,89 1050,9 1200,49 L1200,120 L0,120 Z" className="fill-[#afafaf]/30" />
            </svg>
          </div>

          <div className="absolute bottom-0 w-[200%] h-20 animate-waveSlow opacity-60 flex">
            <svg className="w-1/2 h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,49 C150,89 350,9 600,49 C850,89 1050,9 1200,49 L1200,120 L0,120 Z" className="fill-[#d8b0b0]/30" />
            </svg>
            <svg className="w-1/2 h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,49 C150,89 350,9 600,49 C850,89 1050,9 1200,49 L1200,120 L0,120 Z" className="fill-[#d8b0b0]/30" />
            </svg>
          </div>

          <div className="relative w-[200%] h-20 animate-waveFast flex">
            <svg className="w-1/2 h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,49 C150,89 350,9 600,49 C850,89 1050,9 1200,49 L1200,120 L0,120 Z" className="fill-[#090909]" />
            </svg>
            <svg className="w-1/2 h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,49 C150,89 350,9 600,49 C850,89 1050,9 1200,49 L1200,120 L0,120 Z" className="fill-[#090909]" />
            </svg>
          </div>

        </div>

      </section>
    </>
  );
}
