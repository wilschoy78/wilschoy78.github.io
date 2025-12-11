# Website Portfolio – Comprehensive Overview

This document summarizes the portfolio website’s purpose, architecture, tech stack, data model, deployment, and maintenance workflows. It consolidates practical information for development, operations, and future enhancements.

## Summary
- Modern, responsive portfolio built with `React`, `TypeScript`, `Vite`, and `Tailwind CSS`.
- Animated UI using `framer-motion`; icons via `lucide-react`.
- Routing managed with `react-router-dom`.
- Contact form powered by `EmailJS` (client-side, public key only).
- Deployed to GitHub Pages via GitHub Actions; manual deploy supported with `gh-pages`.

## Live URLs
- Production (GitHub Pages): Configured via workflow in `.github/workflows/deploy.yml`.
- Development preview: `npm run dev` → `http://localhost:5173` (or next available port).
- Production preview: `npm run preview` → `http://localhost:4173`.

## Tech Stack
- Frontend: `React` 19 + `TypeScript`.
- Styling: `Tailwind CSS`, `PostCSS`, `autoprefixer`.
- Animations: `framer-motion`.
- Icons: `lucide-react`.
- Routing: `react-router-dom`.
- Build Tool: `Vite` 7.
- Linting: `ESLint` with React Hooks and React Refresh plugins.
- Type Checking: `TypeScript` (`tsc -b`).
- Deployment: `gh-pages`, GitHub Actions (Pages).

## Project Structure
- `src/components/` reusable UI components
- `src/components/layout/` header, footer, layout primitives
- `src/components/ui/` button, badge, card, modal and helpers
- `src/pages/` top-level routes: `Home`, `About`, `Projects`, `Skills`, `Contact`
- `src/types/` shared TypeScript types (e.g., `Project`, `Skill`, `Experience`)
- `src/data/` static content sources (projects, skills, navigation, services)
- `src/utils/` utilities (formatters, helpers)
- `src/hooks/` custom hooks
- `public/` static assets (favicon, images, PDFs, robots.txt)

## Core Pages
- Home: Hero, featured highlights, call-to-action.
- About: Professional background, experience timeline.
- Projects: Search, category filters, animated cards, external links.
- Skills: Categorized technical skills with proficiency levels.
- Contact: Validated contact form using `react-hook-form`; EmailJS-powered sending.

## Data Model (Types)
- `Project`: `id`, `title`, `description`, `technologies[]`, `imageUrl`, `demoUrl`, `githubUrl`, `featured`, `category`, `status`, `startDate`, `endDate`.
- Additional types: `Skill`, `Experience`, `NavItem`, `SocialLink`, `Service`.

## Current Projects (Examples)
- Colegio De Alicia Official Website
  - Demo: `https://www.colegiodealicia.com/`
  - Category: `websites`, Status: `active`, Featured: `true`
  - Technologies: `React`, `TypeScript`, `Tailwind CSS`
- Colegio De Alicia School Management System (Login)
  - Demo: `https://mis.colegiodealicia.com/login`
  - Category: `webapps`, Status: `active`, Featured: `true`
  - Technologies: `React`, `TypeScript`, `Tailwind CSS`

Note: Source `src/data/projects.ts` contains full portfolio entries; update this file to add/edit projects.

## UI/UX and Accessibility
- Responsive layout across mobile, tablet, desktop.
- Motion and transitions via `framer-motion` with sensible defaults.
- Keyboard focus states and semantic HTML used across components.
- Color contrast aligned with Tailwind defaults; customize in `tailwind.config.js` as needed.

## Forms and EmailJS
- Configuration file: `src/config/emailjs.ts` with placeholders for `serviceId`, `templateId`, `publicKey`.
- Setup guide: `EMAILJS_SETUP.md` (Public Key only in client; never include Private Key).
- Validation handled by `react-hook-form` with error messaging.

## Scripts
- `npm run dev`: Start development server (`vite`).
- `npm run build`: Type-check and build (`tsc -b && vite build`).
- `npm run preview`: Preview production build locally.
- `npm run lint`: Run ESLint.
- `npm run predeploy`: Build before deploy.
- `npm run deploy`: Publish `dist` to GitHub Pages using `gh-pages`.

## Deployment
- Automated: GitHub Actions workflow `.github/workflows/deploy.yml`.
  - Triggers: Push to `main` or manual dispatch.
  - Steps: Checkout → Setup Node → Install deps → Build → Upload artifact → Deploy to Pages.
- Manual: `npm run build` then `npm run deploy` (requires repo Pages configured).

## Performance and Assets
- Production build verified (no errors; ~2100 modules transformed during recent build).
- Bundle analysis available via `vite-bundle-analyzer` (dev-time tool).
- Asset review: `public/` contains images and PDFs; consider optimizing large images (e.g., `social_img.png`).

## Security Considerations
- No secrets in client code; EmailJS uses a Public Key only.
- Avoid embedding tokens or credentials in source or public assets.
- Follow RBAC/JWT guidelines for backend systems (not part of this static frontend).

## Development Workflow
- Install: `npm install`.
- Develop: `npm run dev` and iterate in `src/`.
- Type/Lint: `npm run lint`; type checks included in `npm run build`.
- Preview Prod: `npm run preview` for local production verification.
- Deploy: push to `main` or run `npm run deploy`.

## Content Maintenance
- Projects: Update `src/data/projects.ts` (ensure unique `id`, set `category`, `status`, and `featured` as appropriate).
- Skills/Services: Edit `src/data/skills.ts` and `src/data/services.ts`.
- Navigation/Social: Edit `src/data/navigation.ts`.
- Images: Place in `public/` and reference with relative paths in data.

## Known Good Configuration
- Node.js ≥ 18, npm ≥ 9.
- Vite 7.x, React 19.x, TypeScript 5.8.x.
- ESLint 9.x configured with React plugins.

## Troubleshooting
- Build errors: Run `npm run lint` and address TypeScript warnings, then rebuild.
- Preview port in use: Vite auto-increments; check terminal for the actual port.
- Email sending issues: Follow `EMAILJS_SETUP.md` and validate Service/Template IDs.

## Future Enhancements (Suggestions)
- Add image optimization pipeline for large assets.
- Integrate analytics with privacy controls.
- Add unit tests for critical components and utils.
- Expand project categories and filtering (e.g., tags, pagination).

## Assistant Q&A

Q: How do I add a new project to the portfolio?

A:
- Edit `src/data/projects.ts` and insert a new `Project` in the `projects` array.
- Ensure a unique `id`, set required fields (`title`, `description`, `technologies`, `imageUrl`, `featured`, `category`, `status`, `startDate`).
- Optionally include `demoUrl`, `githubUrl`, `longDescription`, and `endDate`.
- Place any image in `public/` (e.g., `public/my_project.webp`) and reference via `imageUrl`.
- Verify locally with `npm run dev` or production preview via `npm run preview`.
- Deploy by pushing to `main` (GitHub Actions) or run `npm run deploy`.

Example entry:

```ts
{
  id: 'my-new-project',
  title: 'My New Project',
  description: 'Brief description of what it does',
  technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  imageUrl: '/my_new_project.webp',
  demoUrl: 'https://example.com',
  githubUrl: 'https://github.com/wilschoy78/my-new-project',
  featured: true,
  category: 'web',
  status: 'in-progress',
  startDate: '2025-12-01'
}
```
