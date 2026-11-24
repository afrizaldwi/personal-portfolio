import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import profile from "../../../data/profile";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { to: "/#projects", label: "Projects", route: "/portfolio" },
  { to: "/#about", label: "About" },
  { to: "/#skills", label: "Skills" },
  { to: "/#certifications", label: "Certifications", route: "/certificate" },
  { to: "/#contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);
  const navigationRef = useRef(null);
  const { pathname, hash } = useLocation();
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";
  const path = normalizedPath === "/index.html" ? "/" : normalizedPath;

  useEffect(() => {
    if (open) navigationRef.current.querySelector("a")?.focus();
  }, [open]);

  function onKeyDown(event) {
    if (event.key === "Escape" && open) {
      setOpen(false);
      menuButton.current.focus();
    }
  }

  return (
    <header className="site-header" onKeyDown={onKeyDown}>
      <div className="container-shell relative flex min-h-16 items-center justify-between gap-3">
        <Link
          to="/"
          className="brand flex min-w-0 items-center gap-2.5 font-bold"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark" aria-hidden="true">
            AD
          </span>
          <span className="truncate">{profile.name}</span>
        </Link>
        <nav
          ref={navigationRef}
          id="site-navigation"
          aria-label="Main navigation"
          className={`site-navigation ${open ? "flex" : "hidden"} md:flex`}
        >
          {navigation.map(({ to, label, route }) => {
            const active =
              path + hash === to ||
              (route && (path === route || path.startsWith(route + "/")));
            return (
              <Link
                key={to}
                to={to}
                aria-current={active ? "location" : undefined}
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="flex shrink-0 items-center gap-1">
          <ThemeToggle />
          <button
            ref={menuButton}
            type="button"
            className="btn btn-ghost btn-square md:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="site-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <FiX className="size-5" aria-hidden="true" />
            ) : (
              <FiMenu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
