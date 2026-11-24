import { FiBookOpen } from "react-icons/fi";
import profile from "../../../data/profile";

function About() {
  return (
    <section id="about" tabIndex={-1} className="section-shell" aria-labelledby="about-heading">
      <div className="grid gap-7 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
        <div>
          <h2 id="about-heading" className="section-title">About me</h2>
          <div className="mt-4 space-y-3 text-muted">
            {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <div className="panel flex items-start gap-4 self-start p-6">
          <FiBookOpen className="mt-1 size-6 shrink-0 text-accent-ink" aria-hidden="true" />
          <div>
            <h3 className="eyebrow">Education</h3>
            <p className="mt-2 text-lg font-bold">{profile.university}</p>
            <p className="mt-1 text-muted">{profile.program} · {profile.educationLevel}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
