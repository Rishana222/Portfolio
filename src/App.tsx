import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiGithub, FiExternalLink, FiMail, FiSend, FiMenu, FiX } from "react-icons/fi";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { GraduationCap, Briefcase, Server, Code, Layers } from "lucide-react";
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiJsonwebtokens } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import logo from "./assets/name-logo.png";
import cv from "./assets/RishanaP-CV.pdf";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") setDarkMode(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className={`${darkMode ? "bg-[#020617] text-slate-200" : "bg-slate-50 text-slate-800"} font-sans transition-colors duration-500`}>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${darkMode ? "bg-[#020617]/90 border-slate-800" : "bg-white/90 border-slate-200"
        } backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <a href="#home">
            <img
              src={logo}
              alt="logo"
              className="w-28 md:w-32 h-auto hover:opacity-80 transition-opacity cursor-pointer"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center font-medium">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-cyan-500 transition-colors text-sm uppercase tracking-wider">
                {link.name}
              </a>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all ${darkMode ? "bg-slate-800 text-yellow-400 hover:bg-slate-700" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${darkMode ? "text-yellow-400" : "text-slate-600"}`}
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-cyan-500 text-2xl"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-64 border-b border-slate-800" : "max-h-0"
          } ${darkMode ? "bg-[#020617]" : "bg-white"}`}>
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium hover:text-cyan-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className={`absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[120px] opacity-20 ${darkMode ? "bg-cyan-500" : "bg-cyan-300"}`}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full blur-[120px] opacity-20 ${darkMode ? "bg-blue-600" : "bg-blue-300"}`}></div>

        <div className="relative z-10 max-w-4xl px-6 text-center space-y-8">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-500 text-xs md:text-sm font-medium tracking-wide animate-pulse">
            Available for Opportunities
          </div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-tight">
            Hi, I'm <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Rishana</span>
          </h1>
          <h2 className={`text-xl md:text-3xl font-light tracking-wide ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Full Stack Web Developer <span className="text-cyan-500">/</span> MERN Specialist
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed opacity-80">
            I craft high-performance, scalable web applications with a focus on clean architecture and intuitive user experiences.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl transition-all shadow-lg hover:scale-105 active:scale-95 text-center">
              View Projects
            </a>
            <a href={cv} className={`w-full sm:w-auto px-8 py-4 border-2 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 text-center ${darkMode ? "border-slate-700 hover:bg-slate-800 text-white" : "border-slate-200 hover:bg-white text-slate-800 shadow-sm"
              }`}>
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-24 ${darkMode ? "bg-slate-900/50" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-linear-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className={`relative p-6 md:p-8 rounded-3xl border ${darkMode ? "bg-slate-900 border-slate-800" : "bg-slate-50 border-slate-200"} shadow-2xl`}>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-cyan-500">
                <Layers size={24} /> Professional Overview
              </h3>
              <div className="space-y-6">
                {[
                  { icon: <GraduationCap />, text: "BCA – University of Calicut", label: "Education" },
                  { icon: <Briefcase />, text: "MERN Intern – Rootsys International", label: "Experience" },
                  { icon: <Server />, text: "Scalable REST APIs & JWT Auth", label: "Expertise" },
                  { icon: <Code />, text: "Full Stack JavaScript Ecosystem", label: "Focus" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="p-3 bg-cyan-500/10 text-cyan-500 rounded-lg h-fit">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">{item.label}</p>
                      <p className="text-base md:text-lg font-medium">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold italic">Driven by <span className="text-cyan-500">Code</span> & Creativity</h2>
            <div className={`space-y-4 text-base md:text-lg leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              <p>
                I am a Full Stack Developer with intensive internship experience at
                <span className="text-cyan-500 font-semibold italic"> Rootsys International</span>.
                I don’t just write code; I solve business problems through technology.
              </p>
              <p>
                My expertise lies in building the complete bridge between a complex database and a pixel-perfect frontend, ensuring security and responsiveness at every layer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              What I <span className="text-cyan-500 underline decoration-cyan-500/30 underline-offset-8 italic">Build With</span>
            </h2>
            <p className="max-w-2xl mx-auto opacity-70 italic font-light">Tools I use to build modern web architecture.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: "MongoDB", icon: <SiMongodb />, cat: "Database" },
              { name: "Express", icon: <SiExpress />, cat: "Backend" },
              { name: "React", icon: <FaReact />, cat: "Frontend" },
              { name: "Node.js", icon: <FaNodeJs />, cat: "Runtime" },
              { name: "TypeScript", icon: <SiTypescript />, cat: "Logic" },
              { name: "Tailwind", icon: <SiTailwindcss />, cat: "Design" },
              { name: "JWT", icon: <SiJsonwebtokens />, cat: "Security" },
              { name: "REST API", icon: <TbApi />, cat: "Architecture" },
            ].map((skill) => (
              <div key={skill.name} className={`group p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${darkMode ? "bg-slate-900/40 border-slate-800 hover:border-cyan-500/50" : "bg-white border-slate-100 hover:border-cyan-500 shadow-sm"
                }`}>
                <div className="text-3xl md:text-4xl text-cyan-500 group-hover:scale-110 transition-transform mb-4">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-base md:text-lg mb-1">{skill.name}</h3>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">{skill.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-24 px-6 ${darkMode ? "bg-slate-900/30" : "bg-slate-100/50"
          }`}
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center italic">
            Crafted <span className="text-cyan-500">Solutions</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "ERP Management System",
                description:
                  "A full-stack ERP management system that streamlines inventory control, sales and purchase tracking, customer/vendor account management, and automated financial transactions.",
                tech: ["React", "Node.js", "Express", "MongoDB"],
                links: [
                  {
                    label: "Frontend",
                    url: "https://github.com/Rishana222/ERP-Frontend.git",
                  },
                  {
                    label: "Backend",
                    url: "https://github.com/Rishana222/ERP-Backend.git",
                  },
                ],
              },
              {
                title: "Fitcamp Gym ",
                description: "A full-stack gym management web application for managing memberships, trainer programs, and user registrations with a responsive interface and secure backend built using the MERN stack.",
                tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
                links: [
                  { label: "Fitcamp", url: "https://github.com/Rishana222/Fitcamp.git" },
                ]
              },
            ].map((project, index) => (
              <div
                key={index}
                className={`group p-6 md:p-8 rounded-3xl border transition-all duration-500 ${darkMode
                  ? "bg-slate-900 border-slate-800 hover:bg-slate-800/80"
                  : "bg-white border-slate-200 hover:shadow-xl"
                  }`}
              >
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-cyan-500 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className={`mb-6 text-sm md:text-base leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                >
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-500 text-[10px] font-bold rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs md:text-sm font-bold border-b border-transparent hover:border-cyan-500 hover:text-cyan-500 transition-all"
                    >
                      {link.url.includes("github") ? (
                        <FiGithub />
                      ) : (
                        <FiExternalLink />
                      )}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-2xl mx-auto relative z-10 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Let's <span className="text-cyan-500">Connect</span>
          </h2>

          <p className="mb-12 opacity-70">
            Have a project in mind or want to discuss a role?
          </p>

          <form action="https://formspree.io/f/xqeyewww" method="POST" className="space-y-4">

            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="name"
                required
                placeholder="Name"
                className={`w-full p-4 rounded-xl border outline-none transition-all ${darkMode
                    ? "bg-slate-900 border-slate-800 focus:border-cyan-500"
                    : "bg-white border-slate-200 focus:border-cyan-500 shadow-sm"
                  }`}
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className={`w-full p-4 rounded-xl border outline-none transition-all ${darkMode
                    ? "bg-slate-900 border-slate-800 focus:border-cyan-500"
                    : "bg-white border-slate-200 focus:border-cyan-500 shadow-sm"
                  }`}
              />
            </div>

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your Message"
              className={`w-full p-4 rounded-xl border outline-none transition-all ${darkMode
                  ? "bg-slate-900 border-slate-800 focus:border-cyan-500"
                  : "bg-white border-slate-200 focus:border-cyan-500 shadow-sm"
                }`}
            />

            <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20">
              <FiSend />
              Send Message
            </button>

          </form>

          {/* Social + Contact Icons */}
          <div className="mt-12 flex justify-center items-center gap-8 text-2xl opacity-60 flex-wrap">

            <a
              href="https://github.com/Rishana222"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-500 transition-all hover:scale-110"
            >
              <FiGithub />
            </a>

            <a
              href="mailto:your-email@example.com"
              className="hover:text-cyan-500 transition-all hover:scale-110"
            >
              <FiMail />
            </a>

            <a
              href="https://www.linkedin.com/in/rishana-p-792604364/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-500 transition-all hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
  href="tel:+916238482589"
  className="flex items-center gap-2 text-lg hover:text-cyan-500 transition-all"
>
  <FaPhoneAlt />
  <span className="text-base">+91 6238482589</span>
</a>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t ${darkMode ? "border-slate-800" : "border-slate-200"} text-center`}>
        <p className="text-xs md:text-sm opacity-50 px-6 italic">© {new Date().getFullYear()} Rishana • Crafted with React & Tailwind</p>
      </footer>
    </div>
  );
}

export default App;