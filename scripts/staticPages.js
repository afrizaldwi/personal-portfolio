import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import pageMetadata, { notFoundMetadata } from "../src/data/pageMetadata.js";

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

function renderMetadata(entry, { title, description, robots }) {
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
  return robots
    ? html.replace(
        "</head>",
        `  <meta name="robots" content="${escapeHtml(robots)}" />\n  </head>`,
      )
    : html;
}

export default function staticPages() {
  return {
    name: "portfolio-static-pages",
    apply: "build",
    async writeBundle({ dir: output }) {
      const entry = await readFile(join(output, "index.html"), "utf8");

      await Promise.all(
        Object.entries(pageMetadata).map(async ([path, metadata]) => {
          if (path === "/") return;
          const folder = join(output, path.slice(1));
          await mkdir(folder, { recursive: true });
          await writeFile(
            join(folder, "index.html"),
            renderMetadata(entry, metadata),
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
