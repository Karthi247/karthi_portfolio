# Karthi C — Developer Portfolio

A responsive personal portfolio showcasing my work, technical skills, education, and experience as a **Java Backend Developer and Full Stack Developer**. Built with React, TypeScript, and Vite, the site includes a project gallery and a contact form for professional enquiries.

🌐 **Live Portfolio:** https://karthi247.github.io/karthi_portfolio/

## Overview

This portfolio gives recruiters and other developers a view of my background and selected software projects. It highlights my interest in Java backend development, REST APIs, database design, and building complete web applications.

## Features

- **Hero section:** Introduction, developer profile, and links to GitHub, LinkedIn, and email.
- **About section:** Development interests, approach, and education summary.
- **Skills section:** Skills grouped into Backend, Frontend, Database, Tools & DevOps, and Cloud.
- **Experience and education:** Full Stack Development internship details and academic background.
- **Featured projects:** Selected projects displayed on the home page.
- **Project gallery:** Dedicated `/projects` page with filters for All, Backend, and Full Stack projects.
- **Contact form:** Sends messages using EmailJS and displays sending, success, and error states.
- **Responsive navigation:** Mobile menu and section navigation.
- **UI interactions:** Scroll-based reveal effects, typing-effect hooks, and responsive layouts.
- **Not-found page:** Fallback route for unknown paths.

## Screenshots

Add screenshots of the deployed portfolio here to make the repository easier to review.

```md
![Portfolio home page](docs/screenshots/home.png)
![Project gallery](docs/screenshots/projects.png)
```

Create the `docs/screenshots/` folder and add your own screenshots before enabling these image links.

## Technology Stack

| Area | Technology |
|---|---|
| UI library | React 18 |
| Language | TypeScript |
| Build tool and dev server | Vite 5 |
| Routing | React Router |
| Styling | CSS |
| UI components | shadcn/ui, Radix UI |
| Icons | Lucide React |
| Forms | React Hook Form, Zod |
| Contact form delivery | EmailJS |
| Charts | Recharts |
| Utilities | date-fns, clsx, class-variance-authority |
| Code quality | ESLint |
| Package management | npm (lockfile included) |
| Hosting target | GitHub Pages |

## Portfolio Sections

The home page is assembled from reusable React components:

| Section | Component | Description |
|---|---|---|
| Navigation | `Header.tsx` | Site navigation and responsive menu |
| Introduction | `Hero.tsx` | Name, developer title, portrait, and social links |
| About | `About.tsx` | Profile introduction and development approach |
| Skills | `Skills.tsx` | Categorized technical skills |
| Experience & Education | `Education.tsx` | Internship and degree information |
| Selected work | `Projects.tsx` | Featured project cards |
| Contact | `Contact.tsx` | EmailJS contact form and contact details |
| Footer | `Footer.tsx` | Footer navigation and details |

Portfolio information is maintained in `src/data/portfolio.ts`, so profile details, skills, education, and project entries can be updated centrally.

## Projects Showcased

The portfolio data currently lists the following projects:

| Project | Category | Main Technologies |
|---|---|---|
| Government Welfare Advisory System | Full Stack | Java, Spring Boot, React, MySQL, Flask, Machine Learning |
| Task Management System | Full Stack | Java, Spring Boot, React, MySQL, Spring Security, JWT |
| Employee Management System | Backend | Java, Spring Boot, Spring MVC, JSP, MySQL |
| Job Application Tracker | Full Stack | Java, Spring Boot, JSP, MySQL, Hibernate/JPA |
| Event Registration System | Full Stack | Java, Spring Boot, React, MySQL, REST APIs |
| Student Management System | Full Stack | Java, Spring Boot, JSP, MySQL, Hibernate/JPA |

Each project card is driven by the `projects` array in `src/data/portfolio.ts`. Update the repository URL, description, category, and technology list there when adding or revising projects.

## Getting Started

### Prerequisites

- Node.js (an active LTS version is recommended)
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/Karthi247/karthi_portfolio.git
cd karthi_portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite will print a local URL in the terminal, normally:

```text
http://localhost:5173/
```

Open that URL in your browser. The development server supports hot module replacement.

### 4. Create a production build

```bash
npm run build
```

The generated static site is written to the `dist/` directory.

Preview the production build locally:

```bash
npm run preview
```

### 5. Run lint checks

```bash
npm run lint
```

## Deployment to GitHub Pages

The project is configured for the GitHub Pages repository path:

```text
/karthi_portfolio/
```

This base path is set in `vite.config.ts` for production builds. The `package.json` also contains `predeploy` and `deploy` scripts using the `gh-pages` package.

Build and publish using:

```bash
npm run deploy
```

The `predeploy` script builds the site and copies `dist/index.html` to `dist/404.html` for GitHub Pages fallback handling. The deploy script publishes the `dist` folder.

Make sure GitHub Pages is configured to serve the published `gh-pages` branch (or the matching deployment source) in the repository settings. The configured public URL is:

https://karthi247.github.io/karthi_portfolio/

> **Windows note:** The current `predeploy` script uses the Windows `copy` command. On Linux/macOS environments, replace it with a cross-platform copy command or a small Node script before running the deployment workflow.

## Contact Form Configuration

The contact form in `src/components/Contact.tsx` currently calls EmailJS directly with a service ID, template ID, and public key.

For maintainability, move these values into Vite environment variables instead of hardcoding them in the component.

Create a local `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then read those variables in the component using `import.meta.env` and add `.env` to `.gitignore` if it is not already ignored.

Vite exposes variables prefixed with `VITE_` in client-side code. They are visible to visitors in the built website, so use only an EmailJS public key intended for browser use. Never put private API keys or server-side secrets in frontend environment variables.

The EmailJS template should use field names matching the contact form:

- `user_name`
- `user_email`
- `subject`
- `message`

## Project Structure

```text
karthi_portfolio/
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── profile images
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── FadeSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── ui/
│   ├── data/
│   │   └── portfolio.ts
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   │   ├── Index.tsx
│   │   ├── NotFound.tsx
│   │   └── ProjectsPage.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Customization

### Update profile details

Edit the `profile` object in `src/data/portfolio.ts` to change your name, role, location, email, GitHub URL, LinkedIn URL, and introduction.

### Update skills

Modify the `skillGroups` array in the same file. The UI renders each group automatically.

### Add or update a project

Add an object to the `projects` array in `src/data/portfolio.ts` with:

- `title`
- `category`
- `type` (`Backend` or `Full Stack`)
- `description`
- `technologies`
- `repository`
- `visual`
- `mark`

The project gallery filters projects based on the `type` property. Keep the type values aligned with the available filters in `src/pages/ProjectsPage.tsx`.

### Update profile images

Replace the image files used by `src/components/Hero.tsx` with your preferred image, keeping the import path in sync.

## Quality and Maintenance Notes

- Keep personal details and project information in `src/data/portfolio.ts` rather than duplicating them across components.
- The contact form currently contains EmailJS configuration in source code. Move it to documented environment variables and use only browser-safe public credentials.
- Verify all project links, social links, and contact details before publishing.
- Add real screenshots under `docs/screenshots/` and update the examples above.
- Run `npm run lint` and `npm run build` before deploying.
- Review dependency versions periodically and update them with testing.

## License

No `LICENSE` file was identified in the repository. Add a license file if you want to specify how others may use, modify, or distribute this project.

## Author

**Karthi C**

- **Portfolio:** https://karthi247.github.io/karthi_portfolio/
- **GitHub:** https://github.com/Karthi247
- **LinkedIn:** https://www.linkedin.com/in/karthi-c2470
- **Email:** karthichinnathai@gmail.com

---

Thanks for visiting my portfolio!
