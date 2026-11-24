import profile from "./profile.js";
import projects from "../component/portfolio/data.js";

export const notFoundMetadata = {
  title: `Page unavailable | ${profile.name}`,
  description:
    "Find projects and certificates on Afrizal Dwi Ahmad’s portfolio.",
  robots: "noindex",
};

const pageMetadata = {
  "/": {
    title: `${profile.name} | Software Engineering Portfolio`,
    description:
      "Explore Afrizal Dwi Ahmad’s software engineering, cloud computing and data analytics projects.",
  },
  "/portfolio": {
    title: `Projects | ${profile.name}`,
    description:
      "Browse software engineering, cloud computing and data analytics projects by Afrizal Dwi Ahmad.",
  },
  "/certificate": {
    title: `Certificates | ${profile.name}`,
    description:
      "Browse Afrizal Dwi Ahmad’s course completion certificates from Dicoding Indonesia.",
  },
  ...Object.fromEntries(
    projects.map(({ slug, title, description }) => [
      `/portfolio/${slug}`,
      { title: `${title} | ${profile.name}`, description },
    ]),
  ),
};

export default pageMetadata;
