"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, FolderGit2, HandPlatter, BookOpenCheck } from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "/admin/projects", icon: FolderGit2 },
  { name: "Services", href: "/admin/services", icon: HandPlatter },
  { name: "Testimonials", href: "/admin/testimonials", icon: BookOpenCheck },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-abyss-800 bg-bg-card p-6 flex flex-col">
      <h2 className="font-title text-2xl font-bold mb-8 text-primary flex items-center gap-2">
        Abyss Admin 🌊
      </h2>
      <nav className="space-y-4 flex-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                isActive 
                  ? "text-abyss-900 bg-primary font-semibold shadow-lg" 
                  : "hover:text-primary text-text-muted hover:bg-abyss-900"
              }`}
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}