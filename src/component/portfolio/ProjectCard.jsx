import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiActivity, FiBarChart2, FiCode, FiHome, FiImage, FiServer } from "react-icons/fi";
import ProjectLinks from "./ProjectLinks";

const covers = {
  health: FiActivity,
  server: FiServer,
  building: FiHome,
  image: FiImage,
  chart: FiBarChart2,
};

function ProjectCard({ project }) {
  const { slug, title, category, description, stack, image, cover, status } = project;
  const Cover = covers[cover] || FiCode;

  return (
    <article className="panel flex h-full min-w-0 flex-col overflow-hidden">
      {image ? (
        <img
          src={import.meta.env.BASE_URL + image.path}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
          className="aspect-[2/1] w-full border-b border-line bg-surface object-contain"
        />
      ) : (
        <div aria-hidden="true" className="project-cover flex aspect-[2.35/1] items-center justify-center border-b border-line">
          <Cover className="h-10 w-10" />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <p className="eyebrow">{category}</p>
        <div>
          <h3 className="text-xl font-bold tracking-tight">
            <Link className="hover:underline" to={`/portfolio/${slug}`}>{title}</Link>
          </h3>
          {status && <p className="mt-1 text-sm text-muted">{status}</p>}
        </div>
        <p className="text-muted">{description}</p>
        {!!stack?.length && (
          <ul className="flex flex-wrap gap-2" aria-label="Technologies">
            {stack.slice(0, 4).map((technology) => <li className="tag" key={technology}>{technology}</li>)}
          </ul>
        )}
        <div className="mt-auto border-t border-line pt-4">
          <ProjectLinks project={project} showDetails />
        </div>
      </div>
    </article>
  );
}


ProjectCard.propTypes = {
  project: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.shape({
      path: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
    cover: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;
