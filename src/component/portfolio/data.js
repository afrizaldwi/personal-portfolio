import recentProjects from "./recentProjects.js";

const legacyProjects = [
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    category: "Frontend Development",
    description:
      "A static React site for technical projects and course certificates.",
    stack: ["React", "Vite", "Tailwind CSS", "DaisyUI"],
    architecture:
      "A client-side React application renders shared project and certificate data and builds to static files with Vite.",
    repository: "https://github.com/afrizaldwi/personal-portfolio",
    image: {
      path: "images/portfolio/portfolio.png",
      alt: "Earlier version of the portfolio homepage",
      width: 452,
      height: 341,
    },
  },
  {
    slug: "bookshelf-apps",
    title: "Bookshelf Apps",
    category: "Frontend Development",
    description:
      "A browser-based reading list with local storage for book records.",
    stack: ["HTML", "CSS", "JavaScript", "Web Storage"],
    architecture:
      "The browser stores the bookshelf locally so the list is available when the page is reopened.",
    repository: "https://github.com/afrizaldwi/Bookshelf-Apps",
    demo: "https://afrizal-bookshelf-apps.netlify.app/",
    image: {
      path: "images/portfolio/bookshelf_apps.png",
      alt: "Bookshelf Apps interface with book lists and entry form",
      width: 1358,
      height: 793,
    },
  },
  {
    slug: "tkj-website",
    title: "TKJ Website",
    category: "Frontend Development",
    description:
      "An informational website for a vocational computer and network engineering program.",
    stack: ["HTML", "CSS", "JavaScript"],
    architecture:
      "The site uses HTML, CSS and JavaScript and is served as a static website.",
    repository: "https://github.com/afrizaldwi/tkj",
    demo: "https://project-website-p5-tkj.netlify.app/",
    image: {
      path: "images/portfolio/tkj-preview.jpg",
      alt: "Homepage of the TKJ program website",
      width: 1280,
      height: 628,
    },
  },
];

export default [
  ...recentProjects,
  ...legacyProjects.map((project) => ({ ...project, legacy: true })),
];
