import { personalInfo } from "../data/portfolioData";

/** Original logo: a hexagon with the owner's initials. Drawn as inline SVG, so no image file is needed. */
function Logo({ size = 40 }) {
  return (
    <svg
      className="logo"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label={`${personalInfo.initials} logo`}
    >
      <polygon points="32,3 58,18 58,46 32,61 6,46 6,18" fill="var(--color-primary)" />
      <polygon points="32,9 53,21 53,43 32,55 11,43 11,21" fill="none" stroke="var(--color-accent)" strokeWidth="2" />
      <text x="32" y="39" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="700" fill="#ffffff">
        {personalInfo.initials}
      </text>
    </svg>
  );
}

export default Logo;
