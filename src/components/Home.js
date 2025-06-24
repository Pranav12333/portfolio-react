import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pranavImage from '../images/pranav.jpeg';
import resumePDF from '../images/resume.pdf';

function Home() {
  const [typedHeading, setTypedHeading] = useState('');
  const fullHeading = "Hello, I’m Pranav.\nWelcome to my World.";

  useEffect(() => {
    AOS.init({ duration: 500, once: true });

    let currentChar = 0;
    const typingTimer = setInterval(() => {
      setTypedHeading((prev) => prev + fullHeading.charAt(currentChar));
      currentChar++;
      if (currentChar >= fullHeading.length) clearInterval(typingTimer);
    }, 70);

    return () => clearInterval(typingTimer);
  }, []);

  return (
    <section className="min-h-screen bg-white text-gray-800 py-20 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="space-y-5" data-aos="fade-right">
          <p className="text-sm tracking-widest text-gray-500 uppercase">
            Freelance Software Developer
          </p>

          {/* Typing Animation Heading */}
          <h1 className="text-5xl font-bold leading-tight text-gray-800 whitespace-pre-line border-r-4 border-pink-600 pr-2 min-h-[5.5rem]">
            {typedHeading}
          </h1>

          <p className="max-w-2xl text-gray-600 text-lg transition duration-500 hover:text-pink-600">
            I’m a full-stack developer with 3+ years of experience. I enjoy building impactful applications,
            working with modern frameworks, and continuously learning to improve my craft.
          </p>

          {/* Buttons Section */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="bg-pink-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-pink-700 transition"
            >
              Hire Me
            </Link>

            <a
              href={resumePDF}
              download
              className="border border-pink-600 text-pink-600 px-6 py-3 rounded-full font-medium hover:bg-pink-600 hover:text-white transition"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-4">
            <a href="https://www.linkedin.com/in/pranav-parmar-webdeveloper/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition text-lg">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://youtube.com/@parmarpranav8069?si=S1YdD8cOjk7iwPtc" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition text-lg">
              <i className="fab fa-youtube"></i> YouTube
            </a>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="relative flex justify-center items-center h-full" data-aos="fade">
          <img
            src={pranavImage}
            alt="Pranav Parmar"
            className="w-[350px] md:w-[420px] object-contain mix-blend-multiply"
          />
        </div>
      </div>

      {/* Specialization Section */}
      <div className="mt-24 text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6">Specializations</h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: 'Frontend Development', detail: 'React, Angular, HTML, CSS, JavaScript, Bootstrap, Tailwind' },
            { title: 'Backend Development', detail: 'Node.js, Express.js, REST APIs, MongoDB, MySQL' },
            { title: 'Other Skills', detail: 'Socket.io, Cron Jobs, Git, Postman, Deployment, UI/UX Basics' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
