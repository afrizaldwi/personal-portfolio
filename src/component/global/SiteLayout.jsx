import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import usePageMetadata from "../../hooks/usePageMetadata";
import Navbar from "./navbar/Navbar";
import Footer from "../homepage/footer";

function SiteLayout() {
  usePageMetadata();
  const main = useRef(null);
  const { pathname, hash } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.focus({ preventScroll: true });
    } else if (previousPath.current !== pathname) {
      main.current.focus({ preventScroll: true });
    }
    previousPath.current = pathname;
  }, [pathname, hash]);

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main-content" ref={main} tabIndex={-1} className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default SiteLayout;
