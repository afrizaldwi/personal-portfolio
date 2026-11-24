# Afrizal Dwi Ahmad · Software Engineering Portfolio

A static portfolio for software engineering, cloud computing and data analytics projects. It includes selected work, eight case studies, education, technical skills and a course certificate gallery.

## Stack

React 18, JavaScript and JSX, React Router 6, Vite 4, Tailwind CSS 3, DaisyUI 4, React Icons and React Photo View. The verified environment used Node.js 24.14.1 and npm 11.11.0.

## Local development

```sh
npm ci
npm run dev
npm run lint
```

In PowerShell, use `npm.cmd` for these commands.

## GitHub Pages deployment

The portfolio is live at [afrizaldwi.github.io/personal-portfolio/](https://afrizaldwi.github.io/personal-portfolio/). The repository uses **GitHub Actions** as its Pages publishing source.

Push portfolio updates to `main` to run the deployment automatically, or run **Deploy to GitHub Pages** manually from the **Actions** tab on `main`. The workflow installs locked dependencies with Node.js 24, lints, builds and publishes `dist/`. The build generates directory index files for direct links and refresh, plus a custom `404.html`.

Build locally with the GitHub Pages base path `/personal-portfolio/` and preview the result:

```sh
npm run build -- --base=/personal-portfolio/
npm run preview -- --base=/personal-portfolio/
```

Ordinary local development with `npm run dev` uses the root path.
The deployment workflow supplies the Pages URL for route-specific canonical and Open Graph tags. To include these tags in a local production build, set `VITE_SITE_URL` to the deployed site URL before building.

## Update content

| Content | Location | How to update |
| --- | --- | --- |
| Profile, education and GitHub | `src/data/profile.js` | Edit the shared identity and biography fields. |
| Recent projects | `src/component/portfolio/recentProjects.js` | Add a unique lowercase slug, category, summary and verified details. Set `featured: true` for homepage selection. |
| Other projects | `src/component/portfolio/data.js` | Edit the legacy collection. Projects here also receive individual routes. |
| Skills | `src/data/skills.js` | Add verified technology names to the appropriate category. |
| Achievements | `src/data/achievements.js` | Add a record with an `id`, `title` and `description` after verifying it. |
| Certificates | `src/data/certificates.js` | Add an `id`, English title, ISO issue date, image path and dimensions. Set `issuer` if it differs from Dicoding Indonesia. |
| Homepage and listing metadata | `src/data/pageMetadata.js` and `index.html` | Keep the homepage title and description aligned. Project metadata comes from the shared project entry. |

Project repositories, demos, screenshots and case study sections are optional. Place approved image files under `public/images/` and use a path relative to `public/`. Case studies can include context, solution, features, architecture, challenges, contributions, results and limitations as evidence allows.
