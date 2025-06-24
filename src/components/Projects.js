import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: 'Patola Sarees Store',
      description: 'Angular-based e-commerce with animations and category gallery.',
      link: 'https://github.com/yourusername/patola-sarees',
    },
    {
      title: 'Node.js I/O Scheduler',
      description: 'A cron-driven automation system with live socket.io communication.',
      link: 'https://github.com/yourusername/node-scheduler',
    },
    {
      title: 'React Portfolio',
      description: 'A beautiful responsive portfolio using React and Tailwind.',
      link: 'https://github.com/yourusername/react-portfolio',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">My Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projectList.map((project, i) => (
          <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg p-6 transition">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 font-medium hover:underline"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
