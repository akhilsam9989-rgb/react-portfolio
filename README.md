# React Personal Portfolio – COMP229 Assignment 1

A six-page personal portfolio built with React (JavaScript), React Router and CSS, bundled with Vite.

Pages: Home, About Me, Projects, Education, Services, Contact Me.

## Project structure

```
react-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── vercel.json            # SPA rewrite for Vercel
├── netlify.toml           # build settings for Netlify
├── public/                # static files, served as-is
│   ├── _redirects         # SPA fallback for Netlify
│   ├── favicon.svg
│   ├── images/            # profile + project images
│   └── resume/resume.pdf  # your resume
└── src/
    ├── main.jsx           # entry point (BrowserRouter)
    ├── App.jsx            # routes
    ├── data/portfolioData.js   # ALL your personal content lives here
    ├── components/        # Navbar, Logo, Footer, ProjectCard, ServiceCard,
    │                      # EducationCard, ContactForm, PageHeader, ImageWithFallback
    ├── pages/             # Home, AboutMe, Projects, Education, Services, ContactMe
    └── styles/            # global.css (colours/base), components.css (layout)
```

## 1. Replace the placeholders

Open `src/data/portfolioData.js` and replace every `[SQUARE BRACKET]` value (name, email, phone, intro, mission, about text, projects, education). Also change `initials` there to update the logo (and in `public/favicon.svg`).

## 2. Add your profile image

1. Copy your photo (e.g. `profile.jpg`, ideally square) into `public/images/`.
2. In `portfolioData.js` set `profileImage: "/images/profile.jpg"`.

## 3. Add your Resume PDF

Replace `public/resume/resume.pdf` with your own PDF using the **same file name** (or change `resumePdf` in `portfolioData.js`). The "View / Download Resume" button on About Me opens it.

## 4. Add project images

1. Copy three images into `public/images/` (e.g. `project-1.png`).
2. In `portfolioData.js`, set each project's `image` (e.g. `"/images/project-1.png"`) and update `imageAlt`.

## 5. Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview    # test the production build
```

## 6. Create the GitHub repository

Create an empty repository on github.com (no README), then in this folder:

```bash
git init
git add .
git commit -m "Initial React project setup"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Recommended commits (make them as you work, not all at once):

1. Initial React project setup
2. Added navigation and page structure
3. Added portfolio content
4. Added responsive styling
5. Added contact form
6. Final testing and cleanup

## 7. Deploy

**Vercel:** sign in at vercel.com → *Add New → Project* → import the GitHub repo → keep the detected Vite settings (build `npm run build`, output `dist`) → Deploy.

**Netlify:** sign in at netlify.com → *Add new site → Import an existing project* → choose the GitHub repo → build command `npm run build`, publish directory `dist` → Deploy.

Both are pre-configured so that refreshing or opening `/about`, `/projects`, etc. directly works.

## Submission checklist

- [ ] ZIP of the project (exclude `node_modules` and `dist`)
- [ ] GitHub repository link
- [ ] Live site link
