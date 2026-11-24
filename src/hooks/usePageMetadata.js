import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import pageMetadata, { notFoundMetadata } from "../data/pageMetadata";

function usePageMetadata() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, "") || "/";
  const { title, description, robots } =
    pageMetadata[path === "/index.html" ? "/" : path] ?? notFoundMetadata;

  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]').content = description;
    document.querySelector('meta[property="og:title"]').content = title;
    document.querySelector('meta[property="og:description"]').content =
      description;
    const robotsTag = document.querySelector('meta[name="robots"]');
    if (robots) {
      const tag = robotsTag ?? document.createElement("meta");
      tag.name = "robots";
      tag.content = robots;
      if (!robotsTag) document.head.append(tag);
    } else {
      robotsTag?.remove();
    }
  }, [title, description, robots]);
}

export default usePageMetadata;
