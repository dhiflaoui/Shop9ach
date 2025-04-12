import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    setTheme(saved || "system");
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const newTheme =
      theme === "system" ? (systemDark ? "dark" : "light") : theme;

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        root.classList.remove("light", "dark");
        root.classList.add(newTheme);
      });
    } else {
      root.classList.remove("light", "dark");
      root.classList.add(newTheme);
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
};
