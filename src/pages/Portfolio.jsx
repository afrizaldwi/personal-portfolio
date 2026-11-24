import ProjectCollection from "../component/portfolio/Data.jsx";

function Portfolio() {
  return (
    <section className="section-shell" aria-labelledby="portfolio-heading">
      <header className="section-heading">
        <h1 id="portfolio-heading" className="section-title">Projects</h1>
      </header>
      <ProjectCollection />
    </section>
  );
}

export default Portfolio;
