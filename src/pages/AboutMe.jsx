import PageHeader from "../components/PageHeader";
import ImageWithFallback from "../components/ImageWithFallback";
import { personalInfo, aboutContent } from "../data/portfolioData";

function AboutMe() {
  return (
    <>
      <PageHeader title="About Me" />
      <section className="section">
        <div className="container about">
          <ImageWithFallback
            className="about__photo"
            src={personalInfo.profileImage}
            alt={`Profile photo of ${personalInfo.legalName}`}
            fallbackSrc="/images/profile-placeholder.svg"
          />
          <div className="about__text">
            <h2>{personalInfo.legalName}</h2>
            <p>{aboutContent.summary}</p>

            <h3>Skills</h3>
            <ul className="tag-list">
              {aboutContent.skills.map((skill, index) => (
                <li key={`${skill}-${index}`} className="tag">{skill}</li>
              ))}
            </ul>

            <h3>Interests</h3>
            <ul className="tag-list">
              {aboutContent.interests.map((interest, index) => (
                <li key={`${interest}-${index}`} className="tag tag--outline">{interest}</li>
              ))}
            </ul>

            <a
              className="btn btn--primary"
              href={personalInfo.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              View / Download Resume (PDF)
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
