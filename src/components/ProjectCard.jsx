import ImageWithFallback from "./ImageWithFallback";

function ProjectCard({ project }) {
  const { title, image, imageAlt, description, role, outcome, technologies } = project;

  return (
    <article className="card project-card">
      <ImageWithFallback className="project-card__image" src={image} alt={imageAlt} />
      <div className="card__body">
        <h2 className="card__title">{title}</h2>
        <p>{description}</p>
        <p><strong>My role:</strong> {role}</p>
        <p><strong>Outcome:</strong> {outcome}</p>
        <ul className="tag-list" aria-label="Technologies used">
          {technologies.map((technology, index) => (
            <li key={`${technology}-${index}`} className="tag">{technology}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ProjectCard;
