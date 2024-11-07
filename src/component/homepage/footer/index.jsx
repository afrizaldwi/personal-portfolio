import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const menu = [
  {
    name: "Home",
    link: "home",
  },
  {
    name: "About",
    link: "about",
  },
  {
    name: "skill",
    link: "skill",
  },
  {
    name: "portfolio",
    link: "portfolio",
  },
  {
    name: "certificate",
    link: "certificate",
  },
  {
    name: "Contact",
    link: "contact",
  },
];

const index = () => {
  const githubLink = "https://github.com/afrizaldwi";
  const instagramLink = "https://www.instagram.com/afrizaldwi16";

  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid md:grid-flow-col gap-4">
        {menu.map((item, index) => (
          <ScrollLink
            to={item.link}
            duration={500}
            smooth={true}
            key={index}
            className="capitalize link link-hover hover:link-primary"
          >
            {item.name}
          </ScrollLink>
        ))}
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link to={githubLink} target="_blank">
            <FaGithub className="text-3xl" />
          </Link>
          <Link to={instagramLink} target="_blank">
            <FaInstagram className="text-3xl" />
          </Link>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2024 - Afrizal Dwi Ahmad</p>
      </aside>
    </footer>
  );
};

export default index;
