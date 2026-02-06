"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, FolderGit2, HandPlatter, BookOpenCheck, Anchor } from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "/admin/projects", icon: FolderGit2 },
  { name: "Services", href: "/admin/services", icon: HandPlatter },
  { name: "Testimonials", href: "/admin/testimonials", icon: BookOpenCheck },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="group  h-screen w-20 hover:w-64 border-r border-abyss-800 bg-bg-card p-4 flex flex-col transition-all duration-500 ease-in-out z-50 overflow-hidden shadow-2xl">
      
      {/* Logo Section */}
      <div className="flex items-center gap-4 mb-10 pl-2">
        <div className="bg-primary p-2 rounded-lg shadow-[0_0_15px_rgba(var(--primary-rgb),0.4)] shrink-0">
          <Anchor size={24} className="text-abyss-900" />
        </div>
        <span className="font-title text-xl font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Abyss Admin
        </span>
      </div>

      {/* Navigation */}
      <nav className="space-y-4 flex-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300 relative ${
                isActive 
                  ? "text-abyss-900 bg-primary font-bold shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]" 
                  : "hover:text-primary text-text-muted hover:bg-abyss-900"
              }`}
            >
              <div className="shrink-0 pl-1">
                <item.icon size={22} />
              </div>
              
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-medium">
                {item.name}
              </span>

              {/* Tooltip simple pour mobile ou quand fermé (optionnel) */}
              {!isActive && (
                <div className="absolute left-full ml-6 px-2 py-1 bg-primary text-abyss-900 text-xs rounded opacity-0 pointer-events-none group-hover:hidden">
                  {item.name}
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer / Indicator */}
      <div className="pt-4 border-t border-abyss-800/50 flex items-center gap-4 pl-2">
        <div className="w-8 h-8 rounded-full bg-abyss-800 shrink-0 border border-primary/20" />
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-[10px] text-text-muted uppercase font-bold tracking-tighter">Deep Sea Unit</p>
        </div>
      </div>
    </aside>
  );
}