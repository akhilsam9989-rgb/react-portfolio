/** One entry in the education timeline. */
function EducationCard({ education }) {
  const { institution, program, dates, qualification } = education;

  return (
    <li className="timeline__item">
      <article className="card">
        <p className="timeline__dates">{dates}</p>
        <h2 className="card__title">{institution}</h2>
        <p><strong>Program:</strong> {program}</p>
        <p><strong>Qualification:</strong> {qualification}</p>
      </article>
    </li>
  );
}

export default EducationCard;
