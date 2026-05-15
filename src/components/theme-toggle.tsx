"use client";

import { useTheme } from "@/components/theme-provider";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-border hover:border-accent/40 transition-colors cursor-pointer"
      aria-label={theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"}
    >
      <Sun
        className={`h-4 w-4 absolute transition-all duration-300 ${
          theme === "dark" ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
        }`}
      />
      <Moon
        className={`h-4 w-4 absolute transition-all duration-300 ${
          theme === "light" ? "opacity-0 -rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
        }`}
      />
    </button>
  );
}
