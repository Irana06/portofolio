import { ArrowBigRight, CalendarDays, FolderOpenDot } from "lucide-react";
import openBook from "../assets/overlays/book.png";
import fotoProfile from "../assets/𝗪𝗮𝗴𝘂𝗿𝗶 𝗞𝗮𝗼𝗿𝘂𝗸𝗼.jpg";
import fotoProfile2 from "../assets/images/foto1x1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faBriefcase, faCalendarDays, faLocationDot } from "@fortawesome/free-solid-svg-icons";

// SFX
import book_opened from "../assets/sfx/book_opened.mp3"
import villager_1 from "../assets/sfx/villager_1.mp3"

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
import GitHub from "../assets/tools/GitHub.png";
import GitLab from "../assets/tools/GitLab.png";
import VSCode from "../assets/tools/Visual Studio Code (VS Code).png";
import Postman from "../assets/tools/Postman.png";
import Docker from "../assets/tools/Docker.png";
import Windows11 from "../assets/tools/Windows11.png";
import Ubuntu from "../assets/tools/Ubuntu.png";

// Projects Screenshots
import Badmintoon from "../assets/projects/Badmintoon.jpg";
import Reservation from "../assets/projects/Reservation.jpg";
import { useRef, useState } from "react";

export default function AboutMe() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const bookOpened = new Audio(book_opened);
  const villager1 = new Audio(villager_1);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const skills = ["Laravel", "ReactJS", "TypeScript", "PHP"];

  const sidebar = [
    { href: "#profile", text: "Introduction", },
    { href: "#tools", text: "Tools" },
    { href: "#projects", text: "Projects" },
    { href: "#experience", text: "Experience" },
  ];

  const tools = [
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
  ];

  const projects = [
    {
      name: "Badmintoon Portal",
      image: Badmintoon,
      description:
        "A web-based platform for managing badminton court participant registration, player profiles, and match scheduling, featuring real-time availability updates.",
      techStack: ["Laravel", "Inertia ReactJS", "PostgreSQL"],
      status: "Closed",
    },
    {
      name: "Reservation System",
      image: Reservation,
      description:
        "A web-based table reservation system for restaurants, allowing users to book tables online, ordering food and beverages, view real-time availability, and receive email confirmations.",
      techStack: ["Laravel", "Inertia ReactJS", "PostgreSQL"],
      status: "Ongoing",
    },
  ];

  const experience = [
    {
      position: "PHP Programmer Intern",
      company: "PT. Javan Cipta Solusi",
      companyURL: "https://javan.co.id",
      location: "Sleman, Yogyakarta",
      contract: "6 months",
      jobdesk: [
        "Developed and maintained web applications using Laravel and ReactJS.",
        "Collaborated with the team to code, test, and deploy new features.",
        "Assisted in debugging and troubleshooting issues in existing applications.",
      ],
      startDate: "July 2024",
      endDate: "January 2025",
      technologies: ["Laravel", "ReactJS", "PostgreSQL"],
    },
  ];

  return (
    <section className="relative mx-auto px-4 py-20 bg-[#090909]">
      {/* Sidebar Sticky Menu - hidden on mobile */}
      <aside className="hidden md:block w-[180px] shrink-0 sticky z-10 top-24 h-fit left-48">
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
            {sidebar.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="w-full text-center px-2 py-1 rounded-md text-gray-500 font-minecraft2 shadow hover:bg-black/10 hover:text-black transition"
                onClick={(e) => {
                  e.preventDefault();
                  const id = e.currentTarget
                    .getAttribute("href")
                    ?.replace("#", "");
                  if (id) {
                    scrollToSection(id);
                  }
                  bookOpened.play();
                }}
              >
                {item.text}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Content Area */}
      <div className="flex-1 space-y-32 max-w-screen-xl mx-auto">
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
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-green-700 text-white text-xs font-minecraft2 font-semibold px-2.5 py-0.5 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <p className="pt-6 text-sm text-justify text-gray-700">
                A passionate and motivated vocational school graduate with
                hands-on experience in web development using Laravel and React
                JS. Completed a 6-month internship in a real working environment
                and developed personal projects focusing on full-stack
                development. Eager to contribute and grow in a dynamic and
                professional tech team.
              </p>

              <div className="pt-8 pb-8 flex flex-col-reverse lg:flex-row justify-between items-center gap-6">
                <button
                  onClick={() => {
                    scrollToSection("tools");
                    villager1.play();
                  }}
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
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-sm text-center font-minecraft2 px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                      6+ Months experience working on
                      <br />
                      frontend & backend projects
                      <br />
                      (React, Laravel, etc.)
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
          className="max-w-6xl mx-auto my-32 px-4 pt-32 pb-32 lg:px-0"
        >
          <div className="mb-6">
            <div className="font-minecraft2 max-w-xl mx-auto text-center">
              <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                My Tools
              </h3>
              <p className="text-gray-400 mt-3">
                Here are some of the tools and technologies I work with:
              </p>
            </div>
            <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {tools.map((tool, index) => (
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
                    <h4 className="font-bold text-white">{tool.name}</h4>
                    <p className="opacity-50 text-gray-300">{tool.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 - Projects */}
        <section id="projects" className="px-4 py-16 sm:px-6 lg:px-8 pt-32 pb-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <span className="text-lg font-minecraft2 font-semibold text-blue-600">
                My Projects
              </span>
              <h2 className="mt-2 text-4xl font-minecraft2 font-bold text-gray-600 sm:text-5xl">
                Recent Works
              </h2>
              <div className="mx-auto mt-6 h-1 w-20 rounded-md bg-blue-600"></div>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className={`h-full w-full object-cover transition duration-500 group-hover:scale-110 
                        ${openIndex === index
                          ? "blur-sm"
                          : "group-hover:blur-sm"
                        }`}
                    />
                  </div>

                  <div
                    className={`absolute inset-0 flex items-end bg-gradient-to-t from-gray-900 to-transparent p-6 transition-all duration-300
                    ${openIndex === index
                        ? "opacity-90 translate-y-0"
                        : "opacity-0 translate-y-4 group-hover:opacity-90 group-hover:translate-y-0"
                      }
              `}
                  >
                    <div>
                      <h3
                        className="text-2xl font-bold text-white grid gap-1"
                        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}
                      >
                        {project.name}{" "}
                        <span
                          className={`rounded-full text-center ${project.status === "Ongoing"
                            ? "bg-blue-600"
                            : project.status === "Cancelled"
                              ? "bg-red-600"
                              : "bg-gray-600"
                            } px-3 py-1 text-xs font-semibold text-white`}
                        >
                          {project.status}
                        </span>
                      </h3>
                      <p className="mt-2 text-justify text-gray-300">
                        {project.description}
                      </p>
                      <div className="mt-4 flex space-x-2">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("experience");
                  villager1.play();
                }}
                className="inline-flex items-center rounded-full border border-blue-600 px-8 py-3 text-base font-medium font-minecraft2 text-blue-600 transition-colors duration-300 hover:bg-blue-600 hover:text-white"
              >
                Next
                <i className="fas fa-long-arrow-alt-right ml-3"></i>
              </a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="px-4 py-16 sm:px-6 lg:px-8 pt-32 pb-32">
          <div className="text-center mb-2">
            <h2 className="text-3xl font-minecraft2 font-bold text-gray-600">
              My Experience
            </h2>
            <p className="mt-4 text-gray-500">
              Here are some of my professional experiences:
            </p>
          </div>

          <div className="max-w-xl mx-auto p-8">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200" />

              <ul className="space-y-8">
                {experience.map((exp, index) => (
                  <li key={index} className="relative flex items-start">
                    {/* Timeline Icon */}
                    <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full ring-8 ring-white">
                      <svg
                        className="h-5 w-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 11-2 0 1 1 0 012 0zm-1 3a2.5 2.5 0 00-2.5 2.5v3a2.5 2.5 0 005 0v-3A2.5 2.5 0 0010 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="ml-6 flex-1">
                      <div className="text-md text-gray-500">
                        <div>
                          <span className="font-medium text-white mr-2">
                            {exp.position}
                          </span>
                          <span className="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                            <div className="absolute flex-shrink-0 flex items-center justify-center">
                              <span
                                className="h-1.5 w-1.5 rounded-full bg-green-500"
                                aria-hidden="true"
                              ></span>
                            </div>
                            <div className="ml-3.5 font-medium text-gray-900">
                              {exp.contract}
                            </div>
                          </span>
                        </div>

                        <a
                          href={exp.companyURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-blue-600/70 hover:text-blue-500 transition-all duration-300"
                        >
                          {exp.company}
                        </a>

                        <span className="text-gray-400 text-xs ml-2">
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            className="h-3 w-3 mr-1"
                          />
                          <span className="ml-1">{exp.location}</span>
                        </span>
                      </div>

                      <div className="mt-2 pb-2 text-xs text-gray-400">
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          className="h-3 w-3 mr-1"
                        />
                        <span className="ml-1">
                          {exp.startDate} - {exp.endDate}
                        </span>
                      </div>

                      <div className="mt-2 text-sm text-justify text-gray-400">
                        <p>
                          <FontAwesomeIcon
                            icon={faBriefcase}
                            className="h-3 w-3 mr-1"
                          />
                          {exp.jobdesk.map((task, i) => (
                            <span key={i} className="block">
                              - {task}
                              {i < exp.jobdesk.length - 1 && <br />}
                            </span>
                          ))}
                        </p>
                      </div>

                      <div className="mt-2 flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center rounded-full bg-blue-300 px-3 py-1 text-sm font-medium text-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

      </div>
    </section>
  );
}
