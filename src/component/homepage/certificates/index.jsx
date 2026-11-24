import { Link } from "react-router-dom";
import achievements from "../../../data/achievements";
import certificates from "../../../data/certificates";
import CertificateGallery from "./ImageProvider";

function Certifications() {
  return (
    <section id="certifications" tabIndex={-1} className="section-shell" aria-labelledby="certifications-heading">
      {achievements.length > 0 && (
        <div className="mb-10">
          <h2 className="section-title">Achievements</h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {achievements.map(({ id, title, description }) => (
              <li className="panel p-5" key={id}>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-2 text-muted">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="section-heading flex flex-wrap items-end justify-between gap-4">
        <h2 id="certifications-heading" className="section-title">Certifications</h2>
        <Link className="btn btn-outline" to="/certificate">View all certificates</Link>
      </div>
      <CertificateGallery certificates={certificates.slice(0, 4)} />
    </section>
  );
}

export default Certifications;
