import { useEffect, useState } from "react";

export function useTheme() {
  const INITIAL_THEME = localStorage.theme ?? getSystemTheme() ?? "dark";

  const [theme, setTheme] = useState(INITIAL_THEME);

  const oppositeTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(oppositeTheme);
    root.classList.add(theme);
    localStorage.theme = theme;
  }, [theme, oppositeTheme]);

  return { theme, toggleTheme: () => setTheme(oppositeTheme) };
}

const getSystemTheme = () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return undefined;
};
