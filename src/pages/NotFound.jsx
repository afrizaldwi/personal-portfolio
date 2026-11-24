import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="section-shell">
      <h1 className="section-title">Page unavailable</h1>
      <p className="my-5 text-muted">Check the address or browse the portfolio from the homepage.</p>
      <div className="flex flex-wrap gap-3">
        <Link className="btn btn-primary" to="/">Home</Link>
        <Link className="btn btn-outline" to="/portfolio">View projects</Link>
      </div>
    </section>
  );
}

export default NotFound;
