"use client";

import { useTheme } from "next-themes";
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
      className="p-2 rounded-full  text-abyss-100 transition-all hover:scale-110 active:scale-95 "
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}