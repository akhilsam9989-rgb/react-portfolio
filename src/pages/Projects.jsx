import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import { projectList } from "../data/portfolioData";

function Projects() {
  return (
    <>
      <PageHeader title="Projects" subtitle="A selection of projects I want to highlight." />
      <section className="section">
        <div className="container card-grid">
          {projectList.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
