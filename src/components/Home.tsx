// --- Home.tsx ---
import { FaGithub, FaLinkedin, FaEnvelope, FaYoutube, FaCode, FaRocket, FaPalette } from "react-icons/fa";
import profile from "../assets/profile.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="pt-20 hero min-h-screen flex flex-col items-center justify-start relative px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden text-center"
    >
      {/* Floating Background Elements */}
      <div className="floating-elements absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-16 h-16 top-[10%] left-[5%] bg-indigo-400/10 rounded-full animate-float-x"></div>
        <div className="absolute w-28 h-28 top-[20%] right-[10%] bg-purple-400/15 rounded-full animate-float-y delay-[1000ms]"></div>
        <div className="absolute w-16 h-16 bottom-[15%] left-[15%] bg-indigo-300/10 rounded-full animate-float-xy delay-[2000ms]"></div>
        <div className="absolute w-32 h-32 top-[60%] left-[5%] bg-pink-400/10 rounded-full animate-float-xy delay-[3000ms]"></div>
        <div className="absolute w-14 h-14 bottom-[30%] right-[20%] bg-cyan-400/10 rounded-full animate-float-x delay-[4000ms]"></div>
        <div className="absolute w-10 h-10 top-[45%] left-[25%] bg-purple-300/10 rounded-full animate-float-y delay-[1500ms]"></div>
        <div className="absolute w-8 h-8 bottom-[20%] left-[70%] bg-indigo-400/10 rounded-full animate-float-xy delay-[2500ms]"></div>
        <div className="absolute w-12 h-12 top-[70%] right-[5%] bg-pink-500/10 rounded-full animate-float-y delay-[1200ms]"></div>
        <div className="absolute w-6 h-6 top-[80%] right-[25%] bg-gradient-to-r from-pink-500 to-red-500 rotate-45 animate-spin-reverse opacity-30"></div>
        <div className="absolute w-6 h-6 top-[30%] left-[20%] bg-gradient-to-r from-indigo-500 to-purple-500 rotate-45 animate-spin-slow opacity-20"></div>
      </div>


      {/* Hero Content */}
      <div className="hero-content relative z-10 max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
          {/* Left Column */}
          <div className="flex flex-col items-center lg:items-center lg:flex-1 order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 animate-gradient-shift mb-6">
              Pranav Parmar Here
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4 mb-4">
              <p className="text-gray-300 text-lg sm:text-xl font-semibold">Frontend Developer</p>
              <span className="hidden sm:block text-gray-500">•</span>
              <p className="text-gray-300 text-lg sm:text-xl font-semibold">Creative Designer</p>
            </div>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
              <span className="text-indigo-300 font-semibold">  Transforming ideas into stunning digital experiences</span>
              with modern web technologies and creative design thinking.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 max-w-2xl">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">  <FaCode className="text-indigo-400 text-xl" />  <div>    <p className="text-white font-medium text-sm">Clean Code</p>    <p className="text-gray-400 text-xs">React, TypeScript</p>  </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">  <FaPalette className="text-purple-400 text-xl" />  <div>    <p className="text-white font-medium text-sm">UI/UX Design</p>    <p className="text-gray-400 text-xs">Figma, Tailwind</p>  </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">  <FaRocket className="text-pink-400 text-xl" />  <div>    <p className="text-white font-medium text-sm">Performance</p>    <p className="text-gray-400 text-xs">Fast & Responsive</p>  </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mb-8">
              Ready to bring your vision to life with{" "}
              <span className="text-purple-300 font-semibold">  pixel-perfect designs</span>,{" "}
              <span className="text-indigo-300 font-semibold">  seamless user experiences</span>, and{" "}
              <span className="text-pink-300 font-semibold">  robust functionality</span>.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto">
              <a href="#projects" className="group px-6 py-3 text-sm sm:text-base text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <span>View My Work</span>
                <FaRocket className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="mailto:pranavparmar8069@gmail.com" className="group px-6 py-3 text-sm sm:text-base text-white bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full font-semibold hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <span>Hire Me Now</span>
                <FaEnvelope className="group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 sm:gap-6">
              <a href="https://github.com" target="_blank" className="group w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:translate-y-[-4px] transition-all duration-300">
                <FaGithub className="text-xl sm:text-2xl group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/pranav-parmar-webdeveloper/" target="_blank" className="group w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-blue-500/20 border border-blue-400/40 hover:bg-blue-500/30 hover:border-blue-400/60 hover:translate-y-[-4px] transition-all duration-300">
                <FaLinkedin className="text-xl sm:text-2xl text-blue-400 group-hover:scale-110 transition-transform" />
              </a>
              <a href="mailto:pranavparmar8069@gmail.com" className="group w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-indigo-500/20 border border-indigo-400/40 hover:bg-indigo-500/30 hover:border-indigo-400/60 hover:translate-y-[-4px] transition-all duration-300">
                <FaEnvelope className="text-xl sm:text-2xl text-indigo-300 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.youtube.com/@parmarpranav8069" target="_blank" className="group w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-red-500/20 border border-red-400/40 hover:bg-red-500/30 hover:border-red-400/60 hover:translate-y-[-4px] transition-all duration-300">
                <FaYoutube className="text-xl sm:text-2xl text-red-400 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column - Profile */}
          <div className="profile-section flex-shrink-0 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-spin-medium opacity-75 blur-sm"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-spin-reverse opacity-50 blur-sm"></div>
              <img src={profile} alt="Pranav - Frontend Developer" className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full border-4 border-white/20 shadow-2xl object-cover z-10 hover:scale-105 transition-transform duration-500" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse opacity-70"></div>
              <div className="absolute top-1/2 -left-6 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-ping opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section - Full Width */}
      <div className="w-full mt-20 max-w-5xl mx-auto text-left px-4 sm:px-0 z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
          💼 Experience
        </h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 shadow-md hover:shadow-purple-500/30 transition">
            <h3 className="text-indigo-300 font-semibold text-lg">Rapidise.co</h3>
            <p className="text-white text-sm font-medium">
              Full Stack Developer (MEAN Stack)
            </p>
            <p className="text-gray-400 text-xs mb-2">Aug 2023 – Present</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building scalable web apps with Angular, Node.js, MongoDB, and
              Express. Handling both frontend and backend features in
              production-ready systems.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 shadow-md hover:shadow-purple-500/30 transition">
            <h3 className="text-indigo-300 font-semibold text-lg">
              I Four Technolab Pvt Ltd
            </h3>
            <p className="text-white text-sm font-medium">Frontend Intern</p>
            <p className="text-gray-400 text-xs mb-2">May 2023 – Jul 2023</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Developed UI components using Angular, worked on integrating REST
              APIs, and enhanced responsive design capabilities.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 shadow-md hover:shadow-purple-500/30 transition">
            <h3 className="text-indigo-300 font-semibold text-lg">
              Cybercom Creation
            </h3>
            <p className="text-white text-sm font-medium">
              Web Development Intern
            </p>
            <p className="text-gray-400 text-xs mb-2">Jan 2023 – Apr 2023</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Contributed to static website development and learned basic
              frontend skills including HTML, CSS, JavaScript, and Git.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Availability */}
      <div className="mt-12 text-center z-10">
        <p className="text-gray-400 text-sm sm:text-base mb-4">
          💼 Available for freelance projects and full-time opportunities
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Open to work
          </span>
          <span className="hidden sm:block">•</span>
          <span>Remote & On-site</span>
          <span className="hidden sm:block">•</span>
          <span>Quick turnaround</span>
        </div>
      </div>
    </section>
  );
};

export default Home;