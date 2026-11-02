# Karthi C — Developer Portfolio

A responsive React and TypeScript portfolio with a monochrome visual system, custom regular CSS, accessible navigation, project cards, and a contact form.

## Run locally

```sh
npm install
npm run dev
```

## Build and preview

```sh
npm run build
npm run preview
```

The production build is written to `dist/`. The existing `deploy` script publishes that folder to GitHub Pages.

## Update portfolio content

Profile details, skills, education, internship information, and project links are in `src/data/portfolio.ts`. The profile photo is `src/assets/profile-photo.png`.

The contact form uses the existing EmailJS service configuration. A success message is shown only when EmailJS confirms the submission; on failure, the form offers a retry and direct email link.
