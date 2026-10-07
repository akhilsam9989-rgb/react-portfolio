import PageHeader from "../components/PageHeader";
import EducationCard from "../components/EducationCard";
import { educationList } from "../data/portfolioData";

function Education() {
  return (
    <>
      <PageHeader title="Education" subtitle="My educational and professional qualifications." />
      <section className="section">
        <div className="container">
          <ol className="timeline">
            {educationList.map((education) => (
              <EducationCard key={education.id} education={education} />
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

export default Education;
