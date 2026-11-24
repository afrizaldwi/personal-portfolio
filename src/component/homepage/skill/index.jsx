import skills from "../../../data/skills";

function Skills() {
  return (
    <section id="skills" tabIndex={-1} className="section-shell" aria-labelledby="skills-heading">
      <div className="section-heading">
        <h2 id="skills-heading" className="section-title">Technical skills</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, technologies]) => (
          <div className="panel p-5" key={category}>
            <h3 className="mb-3 font-bold">{category}</h3>
            <ul className="flex flex-wrap gap-2">
              {technologies.map((technology) => <li className="tag" key={technology}>{technology}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
