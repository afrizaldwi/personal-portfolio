import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProjectLinks({ project, showDetails = false }) {
  const { slug, title, repository, demo } = project;

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-semibold">
      {showDetails && (
        <Link
          className="text-link"
          to={`/portfolio/${slug}`}
          aria-label={`Case study for ${title}`}
        >
          Case study
        </Link>
      )}
      {repository && (
        <a
          className="inline-flex items-center gap-1 hover:underline"
          href={repository}
          aria-label={`Source code for ${title}`}
          target="_blank"
          rel="noreferrer"
        >
          Source code
        </a>
      )}
      {demo && (
        <a
          className="inline-flex items-center gap-1 hover:underline"
          href={demo}
          aria-label={`Live demo for ${title}`}
        >
          Live demo
        </a>
      )}
    </div>
  );
}

ProjectLinks.propTypes = {
  project: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    repository: PropTypes.string,
    demo: PropTypes.string,
  }).isRequired,
  showDetails: PropTypes.bool,
};

export default ProjectLinks;
