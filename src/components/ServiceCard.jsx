function ServiceCard({ service }) {
  return (
    <article className="card service-card">
      <div className="service-card__icon" aria-hidden="true">{service.icon}</div>
      <h2 className="card__title">{service.name}</h2>
      <p>{service.description}</p>
    </article>
  );
}

export default ServiceCard;
