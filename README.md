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

## Production build and static hosting

```sh
npm run build
npm run preview
```

Publish the contents of `dist/` to a static host. The build emits directory index files for `/portfolio`, `/certificate` and every project slug. Serve directory indexes for direct links and refresh, and configure the host to use the generated `404.html` for unknown paths. Some hosts add a trailing slash on directory URLs. The router accepts either form. For a project hosted in a subdirectory, set the matching Vite base at build time.

```sh
npm run build -- --base=/personal-portfolio/
```

The production origin is awaiting confirmation. Add the canonical and sharing image URLs once the deployment address and image are approved. Retain the existing route slugs for shared links.

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
