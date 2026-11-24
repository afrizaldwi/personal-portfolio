import certificates from "../../data/certificates";
import CertificateGallery from "../homepage/certificates/ImageProvider";

function CertificateCollection() {
  return (
    <section className="section-shell">
      <header className="section-heading">
        <h1 className="section-title">Certificates</h1>
        <p className="mt-2 text-muted">Course completion certificates from Dicoding Indonesia.</p>
      </header>
      <CertificateGallery certificates={certificates} />
    </section>
  );
}

export default CertificateCollection;
