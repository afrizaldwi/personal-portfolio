import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { PhotoSlider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const issueDate = new Intl.DateTimeFormat("en", {
  month: "short", year: "numeric", timeZone: "UTC",
});
const noAnimation = () => 0;

function CertificateGallery({ certificates }) {
  const dialog = useRef(null);
  const closeButton = useRef(null);
  const [index, setIndex] = useState(null);
  const images = certificates.map(({ id, image }) => ({ key: id, src: import.meta.env.BASE_URL + image }));

  function showCertificate(index) {
    setIndex(index);
    dialog.current.showModal();
    closeButton.current.focus();
  }

  function closePreview() {
    dialog.current.close();
    setIndex(null);
  }

  return (
    <>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certificates.map((certificate, index) => (
          <li key={certificate.id}>
            <button
              type="button"
              className="panel flex h-full w-full flex-col overflow-hidden text-left hover:border-current"
              onClick={() => showCertificate(index)}
              aria-haspopup="dialog"
            >
              <img
                src={images[index].src}
                alt={`Dicoding certificate for ${certificate.title}`}
                width={certificate.width}
                height={certificate.height}
                loading="lazy"
                decoding="async"
                className="aspect-[1.414/1] w-full border-b border-line object-contain"
              />
              <span className="block p-4">
                <span className="block font-semibold">{certificate.title}</span>
                <span className="mt-1 block text-sm text-muted">
                  {certificate.issuer} · <time dateTime={certificate.issueDate}>{issueDate.format(new Date(certificate.issueDate))}</time>
                </span>
              </span>
            </button>
            {certificate.credentialUrl && (
              <a href={certificate.credentialUrl} className="text-link mt-2 inline-block text-sm">View credential</a>
            )}
          </li>
        ))}
      </ul>
      <dialog
        ref={dialog}
        className="certificate-dialog"
        aria-label="Certificate preview"
        onClose={() => setIndex(null)}
        onCancel={(event) => { event.preventDefault(); closePreview(); }}
      >
        <div className="certificate-controls flex flex-wrap items-center gap-2">
          <button type="button" className="btn btn-sm" ref={closeButton} onClick={closePreview}>Close preview</button>
          <button type="button" className="btn btn-sm" disabled={index === 0} onClick={() => setIndex(index - 1)}>Previous</button>
          <button type="button" className="btn btn-sm" disabled={index === images.length - 1} onClick={() => setIndex(index + 1)}>Next</button>
          <span className="text-sm" aria-live="polite">{certificates[index]?.title}</span>
        </div>
        {index !== null && (
          <PhotoSlider
            images={images}
            index={index}
            onIndexChange={setIndex}
            onClose={closePreview}
            portalContainer={dialog.current}
            visible
            bannerVisible={false}
            loop={false}
            speed={window.matchMedia("(prefers-reduced-motion: reduce)").matches ? noAnimation : undefined}
          />
        )}
      </dialog>
    </>
  );
}

CertificateGallery.propTypes = {
  certificates: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    issuer: PropTypes.string.isRequired,
    issueDate: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    credentialUrl: PropTypes.string,
  })).isRequired,
};

export default CertificateGallery;
