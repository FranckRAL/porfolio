import type { Metadata } from "next";
import SideBar from "@/components/admin/SideBar";
import ToggleTheme from "@/components/pieces/ToggleTheme"

export const metadata: Metadata = {
  title: {
    template: "%s | Abyss Admin",
    default: "Dashboard | Abyss Admin",
  },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-bg-page text-text-main ">
      <SideBar />
      <main className="container flex-1 p-8 overflow-y-auto mx-auto">
        {children}
      </main>
      <div className="fixed bottom-4 right-4 z-50 bg-bg-card rounded-full shadow-lg">
        <ToggleTheme />
      </div>
    </div>
  );
}