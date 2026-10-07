/**
 * Single place to edit all personal content.
 * Values still in [SQUARE BRACKETS] are placeholders to replace.
 * Image/PDF paths point to files inside the /public folder
 * (e.g. "/images/profile.jpg" = public/images/profile.jpg).
 */

export const personalInfo = {
  legalName: "Akhil Sam",
  initials: "AS", // Shown in the logo
  title: "Software Engineering Technology – Artificial Intelligence Student",
  email: "akhilsam9989@gmail.com",
  phone: "+1 (647) 884-6163",
  location: "Toronto, Ontario",
  linkedInUrl: "https://www.linkedin.com/in/akhil-sam-015631304", // leave "" to hide
  gitHubUrl: "https://github.com/akhilsam9989-rgb", // leave "" to hide
  profileImage: "/images/profile.jpg",
  resumePdf: "/resume/resume.pdf", // replace the file in public/resume/
};

export const homeContent = {
  welcomeMessage: "Welcome to my portfolio",
  introduction:
    "I'm a Software Engineering AI student at Centennial College who enjoys building responsive web applications.",
  missionStatement:
    "I aim to write clean, well-organized code and create web experiences that are accessible and easy to use for everyone.",
};

export const aboutContent = {
  summary:
    "I'm Akhil, a student at Centennial College studying software development. Through my courses I've worked with C#, JavaScript, HTML, CSS and React, building both console applications and responsive websites. I enjoy solving problems and turning ideas into clean, user-friendly applications. I'm currently looking for opportunities to grow my skills and contribute to a development team.",
  skills: ["C#", "JavaScript", "HTML", "CSS", "React", "Git & GitHub"],
  interests: [
    "Web application development",
    "Artificial intelligence",
    "Machine learning",
    "Problem solving",
  ],
};

export const projectList = [
  {
    id: 1,
    title: "La Maison Rouge",
    image: "/images/project-1.jpg",
    imageAlt: "Screenshot of the La Maison Rouge restaurant website",
    description:
      "A multi-page French restaurant website with an interactive map showing routes to the restaurant, and a built-in HTML5 Canvas game.",
    role: "Sole developer: designed and built all pages, the map integration and the game.",
    outcome:
      "Completed and submitted. Uses query strings, cookies and localStorage to pass and save data between pages.",
    technologies: ["HTML", "CSS", "JavaScript", "Leaflet", "Canvas"],
  },
  {
    id: 2,
    title: "Food Order Data Visualization Dashboard",
    image: "/images/project-2.jpg",
    imageAlt: "Screenshot of the Food Order Data Visualization Dashboard",
    description:
      "A multi-page dashboard that analyzes 1,898 restaurant delivery orders with linear regression charts, and shows live Toronto weather.",
    role: "Sole developer: cleaned the dataset, built the charts and predictions pages, and connected the weather API.",
    outcome:
      "Completed and submitted. Loads and cleans the data, fills in missing ratings, and visualizes trends with regression lines.",
    technologies: ["HTML", "CSS", "JavaScript", "Chart.js", "OpenWeatherMap API"],
  },
  {
    id: 3,
    title: "React Personal Portfolio",
    image: "/images/project-3.png",
    imageAlt: "Screenshot of the React personal portfolio home page",
    description:
      "A six-page responsive portfolio website with navigation, a project showcase and a validated contact form.",
    role: "Sole developer: built the pages, reusable components and styling.",
    outcome: "Completed as COMP229 Assignment 1: a working, mobile-friendly portfolio site.",
    technologies: ["React", "JavaScript", "CSS", "Vite"],
  },
];

export const educationList = [
  {
    id: 1,
    institution: "Centennial College",
    program: "Software Engineering Technology – Artificial Intelligence",
    dates: "2025 - 2028",
    qualification: "Advanced Diploma (in progress)",
  },
  {
    id: 2,
    institution: "Sree Narayana Guru Central School, Kollam, Kerala, India",
    program: "High School – Science Stream",
    dates: "Completed 2021",
    qualification: "High School Diploma (Science Stream)",
  },
];

// Descriptions state what is offered; they make no claims about experience or certifications.
export const serviceList = [
  {
    id: 1,
    name: "Web Development",
    icon: "</>",
    description: "Building clean, responsive websites with HTML, CSS and JavaScript.",
  },
  {
    id: 2,
    name: "React Development",
    icon: "⚛",
    description: "Creating component-based user interfaces and single-page applications with React.",
  },
  {
    id: 3,
    name: "JavaScript Programming",
    icon: "JS",
    description: "Writing readable JavaScript for interactive features and application logic.",
  },
  {
    id: 4,
    name: "Database Development",
    icon: "DB",
    description: "Designing simple data models and connecting applications to a database.",
  },
  {
    id: 5,
    name: "Software Development",
    icon: "{ }",
    description: "General programming and problem solving for small software projects.",
  },
];

// Order here controls the order of the navigation bar.
export const navigationLinks = [
  { label: "Home", path: "/" },
  { label: "About Me", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Education", path: "/education" },
  { label: "Services", path: "/services" },
  { label: "Contact Me", path: "/contact" },
];
