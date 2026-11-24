import { Link, useParams } from "react-router-dom";
import projects from "../component/portfolio/data.js";
import ProjectLinks from "../component/portfolio/ProjectLinks";
import NotFound from "./NotFound";

const sections = [
  ["context", "Problem and context"],
  ["solution", "Solution"],
  ["features", "Key functionality"],
  ["architecture", "Technical architecture"],
  ["challenges", "Engineering challenges"],
  ["contributions", "Personal contributions"],
  ["results", "Results"],
  ["limitations", "Status and limitations"],
];

function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) return <NotFound />;

  const { category, title, status, description, stack, image } = project;

  return (
    <article className="section-shell">
      <Link className="text-link text-sm font-semibold" to="/portfolio">
        All projects
      </Link>
      <header className="mt-7 max-w-3xl">
        <p className="eyebrow">
          {category}
          {status && ` · ${status}`}
        </p>
        <h1 className="section-title mt-3">{title}</h1>
        <p className="my-5 text-lg text-muted">{description}</p>
        <ProjectLinks project={project} />
      </header>
      {image && (
        <img
          className="panel mt-8 h-auto w-full max-w-3xl"
          src={import.meta.env.BASE_URL + image.path}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      )}
      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="max-w-2xl space-y-7">
          {sections
            .filter(([key]) =>
              Array.isArray(project[key]) ? project[key].length : project[key],
            )
            .map(([key, label]) => (
              <section key={key} aria-labelledby={key}>
                <h2 id={key} className="mb-2 text-xl font-bold">
                  {label}
                </h2>
                {Array.isArray(project[key]) ? (
                  <ul className="list-disc space-y-1 pl-5 text-muted">
                    {project[key].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted">{project[key]}</p>
                )}
              </section>
            ))}
        </div>
        {!!stack?.length && (
          <aside
            className="panel self-start p-5"
            aria-labelledby="technology-heading"
          >
            <h2 id="technology-heading" className="mb-3 text-lg font-bold">
              Technology stack
            </h2>
            <ul className="flex flex-wrap gap-2">
              {stack.map((technology) => (
                <li key={technology} className="tag">
                  {technology}
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </article>
  );
}

export default ProjectDetails;
