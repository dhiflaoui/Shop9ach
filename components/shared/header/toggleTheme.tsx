"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const ThemeIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-5 w-5" />;
      case "dark":
        return <Moon className="h-5 w-5" />;
      case "system":
        return <Monitor className="h-5 w-5" />;
      default:
        return <Monitor className="h-5 w-5" />;
    }
  };
  const getThemeLabel = (): string => {
    switch (theme) {
      case "light":
        return "Light";
      case "dark":
        return "Dark";
      case "system":
        return "System";
      default:
        return "System";
    }
  };
  const toggleTheme = () => {
    const next =
      theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    setTheme(next);
  };

  return (
    <Button
      title={`Theme: ${getThemeLabel()}`}
      variant={"ghost"}
      onClick={toggleTheme}
      className="rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label={`Toggle theme, current theme is ${getThemeLabel()}`}
    >
      <ThemeIcon />
    </Button>
  );
}
