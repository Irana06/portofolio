import { ArrowBigRight, CalendarDays, FolderOpenDot } from "lucide-react";
import wallpaperCats from "../assets/backgrounds/wallpaper_cats_minecraft.jpg";
import openBook from "../assets/overlays/book.png";
import fotoProfile from "../assets/𝗪𝗮𝗴𝘂𝗿𝗶 𝗞𝗮𝗼𝗿𝘂𝗸𝗼.jpg";
import fotoProfile2 from "../assets/waguri_kaoruko.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faBriefcase, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Introduction() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
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
                  const id = e.currentTarget
                    .getAttribute("href")
                    ?.replace("#", "");
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
          <img src={wallpaperCats} className="w-full h-full object-cover" />
          {/* Optional overlay biar teks lebih jelas */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Section 1 - Profile */}
        <section
          id="profile"
          className="relative flex flex-wrap items-center justify-center max-w-6xl mx-auto my-32 pt-32 pb-32 lg:my-0 px-6 lg:px-0"
        >
          {/* Card Profile */}
          <div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white/80 backdrop-blur-sm mx-6 lg:mx-0">
            <div className="p-6 md:p-12 text-center lg:text-left">
              {/* Image untuk mobile */}
              <div
                className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-40 w-40 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${fotoProfile2}')`,
                }}
              ></div>

              <h1 className="font-minecraft2 text-3xl text-gray-700 font-bold pt-8 lg:pt-0">
                Yusuf Novandra Sugiyanto
              </h1>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

              <p className="pt-2 text-gray-600 text-xs font-bold lg:text-sm flex items-center justify-center lg:justify-start">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="h-4 fill-current text-green-700 pr-4"
                />
                Web Developer
              </p>

              <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="h-4 fill-current text-green-700 pr-4"
                />
                Sleman, Yogyakarta
              </p>

              <p className="pt-6 text-sm text-gray-700">
                A passionate and motivated vocational school graduate with
                hands-on experience in web development using Laravel and React
                JS. Completed a 6-month internship in a real working environment
                and developed personal projects focusing on full-stack
                development. Eager to contribute and grow in a dynamic and
                professional tech team.
              </p>

              <div className="pt-8 pb-8 flex flex-col-reverse lg:flex-row justify-between items-center gap-6">
                {/* Next button */}
                <button
                  onClick={() => scrollToSection("#skills")}
                  className="bg-green-700 hover:bg-green-900 text-white font-minecraft2 font-bold py-2 px-6 rounded-full shadow-lg transition flex items-center gap-2"
                >
                  Next <ArrowBigRight className="w-5 h-5" aria-hidden="true" />
                </button>

                {/* Wrap Projects + Experience together */}
                <div className="flex items-center gap-4">
                  {/* Projects with tooltip */}
                  <div className="relative group">
                    <div className="bg-green-700 rounded-full py-1 px-3 flex items-center gap-2 text-white font-minecraft2 font-bold cursor-pointer">
                      <FolderOpenDot className="w-5 h-5" aria-hidden="true" />
                      2+
                    </div>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-sm font-minecraft2 px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                      1 project closed, 1 project ongoing
                    </div>
                  </div>

                  {/* Experience with tooltip */}
                  <div className="relative group">
                    <div className="bg-green-700 rounded-full py-1 px-3 flex items-center gap-2 text-white font-minecraft2 font-bold cursor-pointer">
                      <CalendarDays className="w-5 h-5" aria-hidden="true" />
                      6+
                    </div>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-sm font-minecraft2 px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                      Worked on frontend & backend projects (React, Laravel,
                      etc.)
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center lg:justify-start space-x-6">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-gray-500 hover:text-green-700 transition"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-gray-500 hover:text-green-700 transition"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="#"
                  aria-label="GitHub"
                  className="text-gray-500 hover:text-green-700 transition"
                >
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
  );
}
