import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import pageMetadata, { getPageUrl, notFoundMetadata } from "../data/pageMetadata";

function updateUrlTag(tagName, key, value, urlAttribute, url) {
  const existing = document.head.querySelector(`${tagName}[${key}="${value}"]`);
  if (!url) {
    existing?.remove();
    return;
  }
  const tag = existing ?? document.createElement(tagName);
  tag.setAttribute(key, value);
  tag.setAttribute(urlAttribute, url);
  if (!existing) document.head.append(tag);
}

function usePageMetadata() {
  const { pathname } = useLocation();
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";
  const path = normalizedPath === "/index.html" ? "/" : normalizedPath;
  const { title, description, robots } =
    pageMetadata[path] ?? notFoundMetadata;
  const url = getPageUrl(import.meta.env.VITE_SITE_URL, path);

  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]').content = description;
    document.querySelector('meta[property="og:title"]').content = title;
    document.querySelector('meta[property="og:description"]').content =
      description;
    updateUrlTag("link", "rel", "canonical", "href", url);
    updateUrlTag("meta", "property", "og:url", "content", url);
    const robotsTag = document.querySelector('meta[name="robots"]');
    if (robots) {
      const tag = robotsTag ?? document.createElement("meta");
      tag.name = "robots";
      tag.content = robots;
      if (!robotsTag) document.head.append(tag);
    } else {
      robotsTag?.remove();
    }
  }, [title, description, robots, url]);
}

export default usePageMetadata;
