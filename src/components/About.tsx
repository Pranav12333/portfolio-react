// src/components/About.tsx
import profile from "../assets/profile.jpg"; // make sure this path is correct

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Profile"
            className="w-64 h-64 object-cover rounded-2xl shadow-lg border-4 border-indigo-500 hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* About Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-indigo-400">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Hello! I’m <span className="text-indigo-400 font-semibold">Pranav Parmar</span>, a passionate
            front-end developer who loves building responsive, beautiful websites.
            I specialize in <strong className="text-purple-400">React</strong>, <strong className="text-purple-400">Tailwind CSS</strong>, and
            modern UI/UX design. I enjoy solving real-world problems and always strive for clean, optimized code.
          </p>
          <p className="text-md text-gray-400">
            I’m also an enthusiastic learner and keep upgrading my skills to stay aligned with the latest web trends.
          </p>
          <div>
            <a
              href="mailto:your-email@example.com"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg shadow-lg transition-all"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
