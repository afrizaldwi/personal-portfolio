import { Link } from "react-router-dom";
import profile from "../../../data/profile";

function HeroText() {
  return (
    <div>
      <p className="eyebrow">{profile.role}</p>
      <h1 className="mt-4 text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl">
        {profile.name}
      </h1>
      <p className="mt-4 text-lg font-semibold text-accent-ink sm:text-2xl">
        {profile.focus}
      </p>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
        {profile.introduction}
      </p>
      <div className="mt-7 flex flex-wrap gap-2 sm:gap-3">
        <Link className="btn btn-primary" to="/#projects">
          View Projects
        </Link>
        <a className="btn btn-outline" href={profile.github}>
          GitHub
        </a>
        <Link className="btn btn-ghost" to="/#contact">
          Contact Me
        </Link>
      </div>
    </div>
  );
}

export default HeroText;
