import { Link } from "react-router-dom";
import { personalInfo, homeContent } from "../data/portfolioData";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__content">
          <p className="hero__welcome">{homeContent.welcomeMessage}</p>
          <h1>Hi, I&apos;m {personalInfo.legalName}</h1>
          <p className="hero__title">{personalInfo.title}</p>
          <p className="hero__intro">{homeContent.introduction}</p>
          <div className="button-group">
            <Link to="/about" className="btn btn--primary">About Me</Link>
            <Link to="/projects" className="btn btn--secondary">View Projects</Link>
            <Link to="/contact" className="btn btn--secondary">Contact Me</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card mission">
            <h2>Mission Statement</h2>
            <p>{homeContent.missionStatement}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
