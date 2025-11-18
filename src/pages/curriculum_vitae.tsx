import React from 'react';
import fotoku from '../assets/images/fotoku.jpg';

interface CVData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  portfolio: string;
  photoUrl?: string;
  summary: string;
  skills: {
    backend: string;
    frontend: string;
    database: string;
    tools: string;
  };
  experience: Array<{
    jobTitle: string;
    company: string;
    date: string;
    responsibilities: string[];
  }>;
  education: Array<{
    degree: string;
    school: string;
    date: string;
  }>;
  projects: Array<{
    title: string;
    description: string[];
    techStack: string[];
  }>;
  certifications: Array<{
    name: string;
    organization: string;
    date: string;
  }>;
  languages: Array<{
    name: string;
    level: string;
  }>;
}

const CVComponent: React.FC = () => {
  const cvData: CVData = {
    name: "YUSUF NOVANDRA",
    title: "Junior Full-Stack Web Developer",
    email: "kirainova11@gmail.com",
    phone: "+62 857-2584-1667",
    location: "Sleman, Yogyakarta",
    linkedin: "https://www.linkedin.com/in/yusuf-novandra-74705731a",
    portfolio: "https://yushika.vercel.app",
    photoUrl: fotoku, // Sesuaikan dengan path foto kamu
    summary: "Enthusiastic and detail-oriented junior web developer with over 1 year of hands-on experience in building full-stack applications using Laravel and React (Inertia.js). Throughout my journey, I've worked extensively with the Laravel-React stack, developing real-world applications and honing my skills in both backend and frontend development. Completed a 6-month internship at PT Javan Cipta Solusi, where I contributed to internal and external web application development and gained practical experience with modern development workflows, including RESTful API design, database optimization, and collaborative development using Git and Agile methodologies. Passionate about backend development, clean code, and continuous learning in the ever-evolving tech landscape.",
    skills: {
      backend: "PHP (Laravel Framework)",
      frontend: "React.js, Inertia.js, TailwindCSS",
      database: "PostgreSQL (Query Optimization)",
      tools: "Git, GitHub, GitLab, VS Code, Agile"
    },
    experience: [
      {
        jobTitle: "PHP & React Programmer Intern",
        company: "PT Javan Cipta Solusi - Yogyakarta",
        date: "July 2024 - January 2025",
        responsibilities: [
          "Assisted in developing internal and external web applications using Laravel and React with TypeScript",
          "Implemented CRUD modules and optimized backend database queries for improved performance",
          "Collaborated with senior developers using Git version control and Agile methodologies",
          "Gained practical experience in RESTful API development and project deployment workflows"
        ]
      }
    ],
    education: [
      {
        degree: "Bachelor of Information Systems (Ongoing)",
        school: "Universitas Terbuka",
        date: "2025 - Present"
      },
      {
        degree: "Vocational High School - Software Engineering",
        school: "SMK Muhammadiyah Pakem",
        date: "2022 - 2025"
      }
    ],
    projects: [
      {
        title: "Badmintoon Portal",
        description: [
          "Built a comprehensive CRUD system for managing participants, competition categories, and transactions",
          "Implemented user authentication and role-based access control management",
          "Designed and optimized relational database structure for efficient data handling"
        ],
        techStack: ["Laravel", "Inertia.js", "React.js", "PostgreSQL", "TailwindCSS"]
      }
    ],
    certifications: [
      {
        name: "Mini BootCamp - Optimalisasi Task Dengan Alurkerja Untuk Front End",
        organization: "Geek Academy",
        date: "November 2024"
      },
      {
        name: "Meningkatkan Kemampuan Dasar Pemrograman Web",
        organization: "Computer Engineering Student Association - Yogyakarta University of Technology",
        date: "May 2024"
      },
      {
        name: "Let's Be A Great Master of Ceremony",
        organization: "Prodamat-MPAI UAD",
        date: "November 2023"
      }
    ],
    languages: [
      { name: "Indonesian", level: "Native" },
      { name: "English", level: "Basic to Intermediate" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl">
        {/* Header */}
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-10 text-center relative">
          {/* Profile Photo */}
          <div className="w-36 h-36 mx-auto mb-5 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white flex items-center justify-center">
            {cvData.photoUrl ? (
              <img 
                src={cvData.photoUrl} 
                alt={cvData.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                  if (placeholder) placeholder.style.display = 'flex';
                }}
              />
            ) : null}
            <div className="hidden w-full h-full items-center justify-center text-indigo-500 text-5xl font-bold">
              YN
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-2 tracking-wider">{cvData.name}</h1>
          <div className="text-lg opacity-95 mb-5">{cvData.title}</div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <span>📧 {cvData.email}</span>
            <span>📱 {cvData.phone}</span>
            <span>📍 {cvData.location}</span>
            <a 
              href={cvData.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity text-white"
            >
              🔗 {cvData.linkedin}
            </a>
          </div>

          <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <a 
              href={cvData.portfolio} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white font-semibold hover:underline"
            >
              🌐 View My Portfolio: {cvData.portfolio}
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-10">
          {/* Summary */}
          <section className="mb-9">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4 pb-2 border-b-4 border-indigo-600">
              Summary
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              {cvData.summary}
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-9">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4 pb-2 border-b-4 border-indigo-600">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(cvData.skills).map(([key, value]) => (
                <div 
                  key={key}
                  className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-600"
                >
                  <div className="font-semibold text-gray-800 mb-1 capitalize">
                    {key === 'tools' ? 'Tools & Methods' : key}
                  </div>
                  <div className="text-gray-600 text-sm">{value}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-9">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4 pb-2 border-b-4 border-indigo-600">
              Professional Experience
            </h2>
            {cvData.experience.map((exp, idx) => (
              <div key={idx} className="mb-6 pl-5 border-l-2 border-gray-300">
                <div className="flex flex-wrap justify-between items-baseline mb-2">
                  <div>
                    <div className="font-semibold text-lg text-gray-800">
                      {exp.jobTitle}
                    </div>
                    <div className="text-indigo-600 text-base mt-1">
                      {exp.company}
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm italic">{exp.date}</div>
                </div>
                <ul className="mt-3 space-y-2">
                  {exp.responsibilities.map((resp, respIdx) => (
                    <li 
                      key={respIdx}
                      className="pl-5 relative text-gray-700 leading-relaxed before:content-['▹'] before:absolute before:left-0 before:text-indigo-600 before:font-bold"
                    >
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education */}
          <section className="mb-9">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4 pb-2 border-b-4 border-indigo-600">
              Education
            </h2>
            {cvData.education.map((edu, idx) => (
              <div key={idx} className="mb-6 pl-5 border-l-2 border-gray-300">
                <div className="flex flex-wrap justify-between items-baseline">
                  <div>
                    <div className="font-semibold text-lg text-gray-800">
                      {edu.degree}
                    </div>
                    <div className="text-indigo-600 text-base mt-1">
                      {edu.school}
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm italic">{edu.date}</div>
                </div>
              </div>
            ))}
          </section>

          {/* Featured Projects */}
          <section className="mb-9">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4 pb-2 border-b-4 border-indigo-600">
              Featured Project
            </h2>
            {cvData.projects.map((project, idx) => (
              <div key={idx} className="mb-6 pl-5 border-l-2 border-gray-300">
                <div className="font-semibold text-lg text-gray-800 mb-3">
                  {project.title}
                </div>
                <ul className="space-y-2 mb-3">
                  {project.description.map((desc, descIdx) => (
                    <li 
                      key={descIdx}
                      className="pl-5 relative text-gray-700 leading-relaxed before:content-['▹'] before:absolute before:left-0 before:text-indigo-600 before:font-bold"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.techStack.map((tech, techIdx) => (
                    <span 
                      key={techIdx}
                      className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Certifications */}
          <section className="mb-9">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4 pb-2 border-b-4 border-indigo-600">
              Certifications & Training
            </h2>
            {cvData.certifications.map((cert, idx) => (
              <div key={idx} className="mb-6 pl-5 border-l-2 border-gray-300">
                <div className="font-semibold text-gray-800 mb-1">
                  {cert.name}
                </div>
                <div className="text-indigo-600 text-sm mb-1">
                  {cert.organization}
                </div>
                <div className="text-gray-500 text-sm italic">
                  {cert.date}
                </div>
              </div>
            ))}
          </section>

          {/* Languages */}
          <section className="mb-9">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4 pb-2 border-b-4 border-indigo-600">
              Languages
            </h2>
            <div className="flex gap-8">
              {cvData.languages.map((lang, idx) => (
                <div key={idx} className="flex-1">
                  <div className="font-semibold text-gray-800 mb-1">
                    {lang.name}
                  </div>
                  <div className="text-gray-600 text-sm">{lang.level}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CVComponent;