import ProjectCard from '../components/ProjectCard';

function Projects() {
  const projects = [
    { title: 'Project 1', description: 'Description of project 1', link: '#' },
    { title: 'Project 2', description: 'Description of project 2', link: '#' },
  ];

  return (
    <div>
      <h1>My Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}

export default Projects;
