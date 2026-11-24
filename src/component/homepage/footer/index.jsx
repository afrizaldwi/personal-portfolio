import { Link } from "react-router-dom";
import profile from "../../../data/profile";

function Footer() {
  return (
    <footer className="mt-8 border-t border-line bg-surface">
      <div className="container-shell flex flex-wrap items-center justify-between gap-3 py-6 text-sm text-muted">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-4">
          <Link className="hover:underline" to="/portfolio">Projects</Link>
          <a className="hover:underline" href={profile.github}>GitHub</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
