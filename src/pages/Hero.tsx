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
      </section>
    </>
  );
}
