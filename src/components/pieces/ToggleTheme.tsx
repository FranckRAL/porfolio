"use client";

import { useTheme } from "@/components/pieces/ThemeProvider";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="p-2 w-9 h-9 rounded-full bg-abyss-800/50" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full  text-text-main transition-all hover:scale-105 active:scale-95  z-50 hover:rotate-180 duration-300"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}