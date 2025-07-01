// src/components/Projects.tsx
const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with React, Tailwind CSS, and Vite.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "E-Commerce App",
    description: "Angular + Node.js based fully-functional e-commerce platform with cart, auth, and admin dashboard.",
    tech: ["Angular", "Node.js", "MongoDB"],
  },
  {
    title: "Real-time Chat App",
    description: "Built with Socket.IO for instant messaging and user presence updates.",
    tech: ["React", "Socket.IO", "Express.js"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-4 py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-400 mb-12">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-all border border-white/10">
              <h3 className="text-2xl font-semibold text-indigo-300">{project.title}</h3>
              <p className="text-gray-400 my-3">{project.description}</p>
              <div className="text-sm text-gray-500">
                {project.tech.map((tech, i) => (
                  <span key={i} className="inline-block bg-indigo-900/50 rounded-full px-3 py-1 mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
