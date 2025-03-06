"use server";

function ProjectsSection() {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is a description of project 1',
      image: 'project1.jpg'
    },
    {
      title: 'Project 2',
      description: 'This is a description of project 2',
      image: 'project2.jpg'
    },
    {
      title: 'Project 3',
      description: 'This is a description of project 3',
      image: 'project3.jpg'
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full h-auto bg-neutral-800">
      <h1>
        Current Projects
      </h1>

      {/* Project Container; likely to be scrollable carousel with links */}
      <div className="flex flex-row py-4">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="flex flex-col justify-center items-center gap-1 py-2 w-1/3">
            <h2>{project.title}</h2>
            <p className="flex flex-col justify-center text-center align-middle">{project.description}</p>
            <img src={project.image} alt={project.title} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection