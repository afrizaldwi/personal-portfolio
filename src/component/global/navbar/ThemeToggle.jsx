import { useLayoutEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const storageKey = "portfolio-theme";
const preference = "(prefers-color-scheme: dark)";

function ThemeToggle() {
  const [choice, setChoice] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved === "dark" || saved === "light" ? saved : null;
    } catch {
      return null;
    }
  });
  const [systemDark, setSystemDark] = useState(() => window.matchMedia(preference).matches);
  const theme = choice ?? (systemDark ? "dark" : "light");
  const dark = theme === "dark";

  useLayoutEffect(() => {
    const media = window.matchMedia(preference);
    function onChange(event) {
      setSystemDark(event.matches);
    }

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    const next = dark ? "light" : "dark";
    setChoice(next);
    try {
      localStorage.setItem(storageKey, next);
    } catch {
      // The current theme is still available in component state.
    }
  }

  return (
    <button type="button" className="btn btn-ghost btn-square" aria-label="Dark theme" aria-pressed={dark} onClick={toggleTheme}>
      {dark ? <FiSun className="size-5" aria-hidden="true" /> : <FiMoon className="size-5" aria-hidden="true" />}
    </button>
  );
}

export default ThemeToggle;
