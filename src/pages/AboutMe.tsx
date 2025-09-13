import { ArrowBigRight, CalendarDays, FolderOpenDot } from "lucide-react";
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

// Tools Icons
import HTML from "../assets/tools/HTML5.png";
import laravel from "../assets/tools/laravel.png";
import react from "../assets/tools/react.svg";
import Vite from "../assets/tools/Vite.js.png";
import PHP from "../assets/tools/PHP.png";
import JavaScript from "../assets/tools/JavaScript.png";
import TypeScript from "../assets/tools/TypeScript.png";
import Livewire from "../assets/tools/Livewire.png";
import TailwindCSS from "../assets/tools/Tailwind CSS.png";
import Figma from "../assets/tools/Figma.png";
import PostgresSQL from "../assets/tools/PostgresSQL.png";
import DBeaver from "../assets/tools/DBeaver.png";
import FileZilla from "../assets/tools/FileZilla.png";
import Git from "../assets/tools/Git.png";
import GitHub from "../assets/tools/Github.png";
import GitLab from "../assets/tools/GitLab.png";
import VSCode from "../assets/tools/Visual Studio Code (VS Code).png";
import Postman from "../assets/tools/Postman.png";
import Docker from "../assets/tools/Docker.png";
import Windows11 from "../assets/tools/Windows11.png";
import Ubuntu from "../assets/tools/Ubuntu.png";

export default function AboutMe() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative z-10 flex w-screen mx-auto px-10 py-20 gap-10 bg-[#090909]">
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
              { href: "#tools", text: "Tools" },
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

              {/* Skills */}
              <div className="pt-6">
                <h3 className="text-gray-700 text-sm font-minecraft2 font-bold">
                  Skills
                </h3>
                <div className="mt-2 flex flex-wrap gap-2 justify-center lg:justify-start">
                  {[
                    "Laravel",
                    "ReactJS",
                    "TypeScript",
                    "PHP"
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="bg-green-700 text-white text-xs font-minecraft2 font-semibold px-2.5 py-0.5 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

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
                  onClick={() => scrollToSection("tools")}
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

        {/* Section 2 - Tools */}
        <section
          id="tools"
          className="max-w-6xl mx-auto my-32 px-6 pt-24 pb-32 lg:px-0"
        >
          <div className="mb-6">
            <div className="font-minecraft2 max-w-xl mx-auto text-center">
              <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                My Tools
              </h3>
              <p className="text-gray-400 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {[
                { icon: HTML, name: "HTML", note: "Markup Language" },
                { icon: laravel, name: "Laravel", note: "PHP Framework" },
                { icon: react, name: "React", note: "JavaScript Library" },
                { icon: Vite, name: "Vite", note: "Build Tool" },
                { icon: PHP, name: "PHP", note: "Server-side Language" },
                { icon: JavaScript, name: "JavaScript", note: "Programming Language" },
                { icon: TypeScript, name: "TypeScript", note: "Superset of JavaScript" },
                { icon: Livewire, name: "Livewire", note: "Full-Stack Framework" },
                { icon: TailwindCSS, name: "TailwindCSS", note: "CSS Framework" },
                { icon: Figma, name: "Figma", note: "Design Tool" },
                { icon: PostgresSQL, name: "PostgresSQL", note: "Database" },
                { icon: DBeaver, name: "DBeaver", note: "Database Tool" },
                { icon: FileZilla, name: "FileZilla", note: "FTP Client" },
                { icon: Git, name: "Git", note: "Version Control" },
                { icon: GitHub, name: "GitHub", note: "Code Hosting" },
                { icon: GitLab, name: "GitLab", note: "Code Hosting" },
                { icon: VSCode, name: "VSCode", note: "Code Editor" },
                { icon: Postman, name: "Postman", note: "API Testing" },
                { icon: Docker, name: "Docker", note: "Containerization" },
                { icon: Windows11, name: "Windows 11", note: "Operating System" },
                { icon: Ubuntu, name: "Ubuntu", note: "Operating System" },
              ].map((tool, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={index * 100}
                  data-aos-once="true"
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-500"
                  />
                  <div>
                    <h4 className="font-bold">{tool.name}</h4>
                    <p className="opacity-50">{tool.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </section>
  );
}
