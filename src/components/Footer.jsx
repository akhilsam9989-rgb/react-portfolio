import { personalInfo } from "../data/portfolioData";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} {personalInfo.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
