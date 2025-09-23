import "../App.css";
import wallpaper from "../assets/Cherry_Blossom_House _Minecraft.mp4";
import avatarHero from "../assets/waguri_kaoruko.jpeg";

export default function Hero() {
  const skill = [
    "React",
    "Laravel",
    "TypeScript",
    "PHP",
  ]

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
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
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between m-32 px-10 lg:px-20 gap-12 w-full">
        {/* Text Content */}
        <div className="max-w-xl flex flex-col items-start gap-6">

          <h1
            className="text-5xl font-bold font-minecraft2 text-white leading-snug"
            style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}
          >
            Hi, I'm <br />
            <span className="text-green-500">Yusufnova!</span>
          </h1>

          <h2 className="text-xl font-semibold text-gray-200">
            Full-Stack Website Developer
          </h2>

          <p className="text-lg text-white/90">
            I craft exceptional digital experiences through clean code and
            thoughtful design. Specializing in modern web technologies with a
            passion for creating user-centered solutions.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {skill.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-white/20 text-white rounded-md text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
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
              className="px-6 py-2.5 bg-green-600 hover:bg-green-700 rounded-xl text-white hover:text-white font-semibold transition"
            >
              View Profile
            </a>
            <button className="px-6 py-2.5 bg-white/20 hover:bg-white/30 rounded-xl text-white font-semibold transition">
              Download Resume
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <img
            className="w-72 h-72 rounded-full border-4 border-green-500 object-cover shadow-lg"
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

      {/* Wave SVG at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <div className="absolute bottom-0 w-[200%] h-20 animate-waveMedium opacity-80 flex">
          <svg
            className="w-1/2 h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,49 C150,89 350,9 600,49 C850,89 1050,9 1200,49 L1200,120 L0,120 Z"
              className="fill-[#afafaf]/30"
            />
          </svg>
          <svg
            className="w-1/2 h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,49 C150,89 350,9 600,49 C850,89 1050,9 1200,49 L1200,120 L0,120 Z"
              className="fill-[#afafaf]/30"
            />
          </svg>
        </div>

        <div className="absolute bottom-0 w-[200%] h-20 animate-waveSlow opacity-60 flex">
          <svg
            className="w-1/2 h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,49 C150,89 350,9 600,49 C850,89 1050,9 1200,49 L1200,120 L0,120 Z"
              className="fill-[#d8b0b0]/30"
            />
          </svg>
          <svg
            className="w-1/2 h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,49 C150,89 350,9 600,49 C850,89 1050,9 1200,49 L1200,120 L0,120 Z"
              className="fill-[#d8b0b0]/30"
            />
          </svg>
        </div>

        <div className="relative w-[200%] h-20 animate-waveFast flex">
          <svg
            className="w-1/2 h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,49 C150,89 350,9 600,49 C850,89 1050,9 1200,49 L1200,120 L0,120 Z"
              className="fill-[#090909]"
            />
          </svg>
          <svg
            className="w-1/2 h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,49 C150,89 350,9 600,49 C850,89 1050,9 1200,49 L1200,120 L0,120 Z"
              className="fill-[#090909]"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
