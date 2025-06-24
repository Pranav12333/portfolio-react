import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pranavImage from '../images/pranav.jpeg';

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

          {/* Introduction */}
          <p className="max-w-2xl text-gray-600 text-lg transition duration-500 hover:text-pink-600">
            I’m a full-stack developer with 3+ years of experience. I enjoy building impactful applications,
            working with modern frameworks, and continuously learning to improve my craft.
          </p>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="inline-block mt-4 bg-pink-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-pink-700 transition"
          >
            Hire Me
          </Link>
        </div>

        {/* Right Profile Image */}
        <div className="flex justify-center" data-aos="fade">
          <img
            src={pranavImage}
            alt="Pranav Parmar"
            className="rounded-2xl shadow-xl w-72 h-72 object-cover transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          />
        </div>
      </div>

      {/* About Section */}
      <div className="mt-24 text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <p className="max-w-2xl mx-auto text-gray-600 text-lg transition duration-500 hover:text-pink-600">
          I’m a full-stack developer with 3+ years of experience. I enjoy building impactful applications,
          working with modern frameworks, and continuously learning to improve my craft.
        </p>

        {/* Info Boxes */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { title: 'Main Skills', detail: 'React, Angular, Node.js' },
            { title: 'Awards', detail: 'Best Developer - Teksun' },
            { title: 'Experience', detail: '3+ Years Full-Stack' },
            { title: 'Certifications', detail: 'Angular & Node Certified' },
          ].map((box, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-500"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <h4 className="text-gray-800 font-semibold mb-2">{box.title}</h4>
              <p className="text-sm text-gray-600">{box.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
