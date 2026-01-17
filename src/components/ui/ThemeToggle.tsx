import * as React from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = React.useState<boolean>(() => {
    try {
      if (typeof document !== "undefined") return document.documentElement.classList.contains("dark");
    } catch (e) {
      void e;
    }
    return false;
  });

  React.useEffect(() => {
    try {
      if (isDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    } catch (e) {
      // ignore
    }
  }, [isDark]);

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setIsDark((v) => !v)}
      className="relative inline-flex h-8 w-14 items-center rounded-full p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-ring bg-muted/20 dark:bg-muted/60"
    >
      <span
        className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-card text-sm text-card-foreground shadow-sm transform transition-transform ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isDark ? <Sun className="h-3 w-3" /> : <Moon className="h-3 w-3" />}
      </span>
      <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-muted-foreground text-[10px] opacity-0" />
    </button>
  );
};

export default ThemeToggle;
