import projects from "./data.js";
import ProjectCard from "./ProjectCard";

const groups = [
  {
    title: "Recent projects",
    id: "recent-projects",
    items: projects.filter((project) => !project.legacy),
  },
  {
    title: "Other projects",
    id: "other-projects",
    items: projects.filter((project) => project.legacy),
  },
];

function ProjectCollection() {
  return (
    <div className="space-y-10">
      {groups.map(({ title, id, items }) => (
        <section key={id} aria-labelledby={id}>
          <h2 className="mb-4 text-2xl font-bold" id={id}>
            {title}
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {items.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProjectCollection;
