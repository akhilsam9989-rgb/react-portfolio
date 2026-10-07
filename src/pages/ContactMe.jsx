import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import { personalInfo } from "../data/portfolioData";

function ContactMe() {
  return (
    <>
      <PageHeader title="Contact Me" subtitle="I would be happy to hear from you." />
      <section className="section">
        <div className="container contact-layout">
          <aside className="card contact-panel">
            <h2 className="card__title">Contact Information</h2>
            <dl>
              <dt>Email</dt>
              <dd>{personalInfo.email}</dd>
              <dt>Phone</dt>
              <dd>{personalInfo.phone}</dd>
              <dt>Location</dt>
              <dd>{personalInfo.location}</dd>
              {personalInfo.linkedInUrl && (
                <>
                  <dt>LinkedIn</dt>
                  <dd><a href={personalInfo.linkedInUrl} target="_blank" rel="noopener noreferrer">{personalInfo.linkedInUrl}</a></dd>
                </>
              )}
              {personalInfo.gitHubUrl && (
                <>
                  <dt>GitHub</dt>
                  <dd><a href={personalInfo.gitHubUrl} target="_blank" rel="noopener noreferrer">{personalInfo.gitHubUrl}</a></dd>
                </>
              )}
            </dl>
          </aside>

          <div className="card">
            <h2 className="card__title">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactMe;
