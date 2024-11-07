import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Sosial = () => {
  const githubLink = "https://github.com/afrizaldwi";
  const instagramLink = "https://www.instagram.com/afrizaldwi16";
  return (
    <div>
      <h1 className="text-secondary text-xl capitalize font-semibold text-center my-4 lg:my-0 lg:text-3xl">
        follow me on
      </h1>
      <div className="w-full lg:flex justify-center lg:my-4">
        <div className="flex justify-center gap-4">
          <Link to={githubLink} target="_blank">
            <FaGithub className="text-3xl" />
          </Link>
          <Link to={instagramLink} target="_blank">
            <FaInstagram className="text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sosial;
