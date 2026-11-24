import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import pageMetadata, {
  getPageUrl,
  notFoundMetadata,
} from "../src/data/pageMetadata.js";

const escapeHtml = (value) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
  );

function renderMetadata(entry, { title, description, robots }, url) {
  const html = entry
    .replace(/<title>.*?<\/title>/, () => `<title>${escapeHtml(title)}</title>`)
    .replace(
      /(meta (?:name="description"|property="og:description")\s+content=")[^"]*/g,
      (_, prefix) => prefix + escapeHtml(description),
    )
    .replace(
      /(meta property="og:title"\s+content=")[^"]*/,
      (_, prefix) => prefix + escapeHtml(title),
    );
  if (robots) {
    return html.replace(
      "</head>",
      `  <meta name="robots" content="${escapeHtml(robots)}" />\n  </head>`,
    );
  }
  if (!url) return html;
  const escapedUrl = escapeHtml(url);
  return html.replace(
    "</head>",
    `  <link rel="canonical" href="${escapedUrl}" />\n  <meta property="og:url" content="${escapedUrl}" />\n</head>`,
  );
}

export default function staticPages() {
  let siteUrl;
  return {
    name: "portfolio-static-pages",
    apply: "build",
    configResolved({ env }) {
      siteUrl = env.VITE_SITE_URL;
    },
    async writeBundle({ dir: output }) {
      const entry = await readFile(join(output, "index.html"), "utf8");

      await Promise.all(
        Object.entries(pageMetadata).map(async ([path, metadata]) => {
          const folder = join(output, path.slice(1));
          await mkdir(folder, { recursive: true });
          await writeFile(
            join(folder, "index.html"),
            renderMetadata(entry, metadata, getPageUrl(siteUrl, path)),
          );
        }),
      );

      await writeFile(
        join(output, "404.html"),
        renderMetadata(entry, notFoundMetadata),
      );
    },
  };
}
