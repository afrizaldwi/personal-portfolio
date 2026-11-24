import { Link } from "react-router-dom";
import projects from "../../portfolio/data.js";
import ProjectCard from "../../portfolio/ProjectCard";

function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured);

  return (
    <section
      id="projects"
      tabIndex={-1}
      className="section-shell"
      aria-labelledby="projects-heading"
    >
      <div className="section-heading flex flex-wrap items-end justify-between gap-4">
        <h2 id="projects-heading" className="section-title">
          Featured projects
        </h2>
        <Link to="/portfolio" className="btn btn-outline">
          View all projects
        </Link>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;
