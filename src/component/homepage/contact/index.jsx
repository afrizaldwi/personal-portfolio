import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import profile from "../../../data/profile";

function Contact() {
  return (
    <section
      id="contact"
      tabIndex={-1}
      className="section-shell"
      aria-labelledby="contact-heading"
    >
      <div className="panel flex flex-wrap items-center justify-between gap-5 p-6 sm:p-8">
        <div>
          <h2 id="contact-heading" className="section-title">
            Contact
          </h2>
          <p className="mt-2 text-muted">
            Find my work and connect with me online.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a className="btn btn-primary" href={profile.github} target="_blank" rel="noreferrer">
            <FiGithub aria-hidden="true" /> GitHub profile
          </a>
          <a
            className="btn btn-outline"
            href={profile.instagram}
            target="_blank" rel="noreferrer"
          >
            <FiInstagram aria-hidden="true" /> Instagram
          </a>
          <a
            className="btn btn-outline"
            href={profile.linkedin}
            target="_blank" rel="noreferrer"
          >
            <FiLinkedin aria-hidden="true" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
